Vue.component('app-h1', {
    template: '<h1>{{ msg }}</h1>',
    props: ['msg']
})

var vm = new Vue({
    el: '#app', //element
    router: new VueRouter({
        mode: 'history', //delete # in url
        routes: [
            {
                path: '/main/h4',
                component: {
                    template: '<h4>{{ this.own_msg }}</h4>',
                    data: function() {
                        return {
                            own_msg: 'app h4 : This is my own msg'
                        }
                    }
                }
            },
            {
                path: '/main/h5',
                component: {
                    template: '<h5>{{ this.new_msg }}</h5>',
                    data: function() {
                        return {
                            own_msg: 'This is my own msg'
                        }
                    },
                    computed: {
                        new_msg: function() {
                            return 'app h5 : ' + this.own_msg
                        }
                    }
                }
            }
        ]
    }),
    data: {
        message: 'hello Vue.js',
        msg_h1: 'app h1',
        msg_h2: 'app h2',
        num: 0,
        msg_h3: ''
    },
    components: {
        'app-h2': {
            template: '<h2 v-on:click="h2_click">{{ data.msg }} : {{ data.num }}</h2>',
            props: ['data'],
            methods: {
                h2_click: function() {
                    this.$emit('pass', this.data.msg)
                }
            }
        },
        'app-input': {
            template: '<input v-on:input="input_change"></input>',
            methods: {
                input_change: function(e) {
                    this.$emit('pass', e.target.value)
                }
            }
        },
        'app-h3': {
            template: '<h3>app h3 + {{ msg }}</h3>',
            props: ['msg']
        }
    },
    methods: {
        click: function(e) {
            console.log(e, 'hello Vue.js')
        },
        h2_click: function(data) {
            //props cannot be changed by root(readonly)
            console.log(data)
        },
        inc_num: function() {
            this.num += 1
        },
        input_change: function(data) {
            this.msg_h3 = data
        }
    }
})

var vm2 = new Vue({
    el: '#app2',
    data: {
        message: '',
        list: [],
        li_style: 'color: red',
        ul_style: 'ul_style',
        app2_msg: 'app2 msg!!',
        flag: true,
        app_model: {
            text: '',
            members: []
        },
        member_list: ['john', 'mike', 'son'],
        resultForm: ''
    },
    computed: {
        app2_msg_with_flag: function() {
            return this.app2_msg + ' : ' + String(this.flag)
        }
    },
    methods: {
        getData: function() {
            if(this.message === ''){
                axios({
                    method: 'GET',
                    url: 'http://localhost:3000/value'
                })
                .then((res) => {
                    //In lamda expression, this means Vue Instance
                    //else, this means Window
                    this.message = res.data
                })
            }
            else{
                this.message = ''
            }
        },
        getList: function() {
            if (this.list.length === 0) {
                axios({
                    method: 'GET',
                    url: 'http://localhost:3000/value/list'
                })
                .then((res) => {
                    this.list = res.data
                })
            }
            else{
                this.list = []
            }
        },
        changeFlag: function() {
            this.flag = !this.flag
        },
        app2_submit: function(e) {
            //form's submit event moves to another page.
            //e.preventDefalut() prevent default event.
            e.preventDefault()

            axios({
                method: e.target.method,
                url: e.target.action,
                data: this.app_model
            })
            .then((res) => {
                this.resultForm = res.data
            })
        }
    }
})