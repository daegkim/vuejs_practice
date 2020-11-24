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
                    template: '<h5>{{ this.own_msg }}</h5>',
                    data: function() {
                        return {
                            own_msg: 'app h5 : This is my own msg'
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