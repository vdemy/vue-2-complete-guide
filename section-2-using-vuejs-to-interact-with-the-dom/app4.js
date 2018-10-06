// Disable Re-Rendering with v-once
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://google.com'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});