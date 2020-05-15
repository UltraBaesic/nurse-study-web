import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

function guardMyroute(to, from, next){
let userAuth = store.state.users.isAuthenticated
if(localStorage.getItem('NurseToken')) {
    userAuth = true;
} else {
    userAuth = false;
}
 if(userAuth) {
  next();
 } 
 else
 {
  next('/');
 }
}

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/Login.vue'),
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import('./layouts/DashboardLayout.vue'),
            beforeEnter : guardMyroute,
            meta: {},
            children: [
                {
                    path: '',
                    component: () => import('./views/DashboardHome.vue')
                },
                {
                    path: '/sections',
                    component: () => import('./views/Sections.vue')
                },
                {
                    path: '/sections/:sectionName',
                    component: () => import('./views/Viewsection.vue'),
                },
                {
                    path: '/users',
                    component: () => import('./views/Users.vue'),
                },
                {
                    path: '/sections/sectionname/topicname',
                    component: () => import('./views/ReadTopic.vue')
                },
                {
                    path: '/sections/sectioname/addsection',
                    component: () => import('./views/AddSection.vue')
                },
                {
                    path: '/sections/sectioname/addsvideo',
                    component: () => import('./views/AddVideo.vue')
                },
                {
                    path: '/sections/sectioname/addaudio',
                    component: () => import('./views/AddAudio.vue')
                },
                {
                    path: '/sections/sectioname/quiz',
                    component: () => import('./views/Quiz.vue')
                },
                {
                    path: '/sections/sectioname/:topicname',
                    component: () => import('./views/ReadTopic.vue')
                },
                {
                    path: '/settings',
                    component: () => import('./views/Settings.vue')
                },
                {
                    path: '/admin',
                    component: () => import('./views/Admin.vue')
                },
            ]
        }
    ]
});