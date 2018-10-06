// How the VueJs Template Syntax and Instance Work Together
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        sayHello: function() {
            return 'Hello';
        }
    }
});