new Vue({
    el: '#exercise',
    data: {
        name: 'Lexa',
        age: 22,
        image: 'https://mvish.com/images/post/vuejs-reactive-components-for-modern-web-interfaces.png'
    },
    methods: {
        random: function() {
            return Math.random();
        }
    }
});