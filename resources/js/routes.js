import VueRouter from 'vue-router';


let routes = [
    {
        path: '/dashboard',
        component: require('./views/dashboard').default
    },
    {
        path: '/users',
        component: require('./views/users').default
    }
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
