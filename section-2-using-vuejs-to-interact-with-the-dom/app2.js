// Accsssing Data in the Vue Instance
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});