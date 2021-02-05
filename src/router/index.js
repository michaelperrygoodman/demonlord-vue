import Vue from 'vue';
import Router from 'vue-router';

// Page Components
import MainView from '@/components/MainView';
import PageResume from '@/components/PageResume';
import PageWarez from '@/components/PageWarez';
import PageEtc from '@/components/PageEtc';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page-main',
      component: MainView,
    },
    {
      path: '/resume',
      name: 'page-resume',
      component: PageResume,
    },
    {
      path: '/warez',
      name: 'page-warez',
      component: PageWarez,
    },
    {
      path: '/etc',
      name: 'page-etc',
      component: PageEtc,
    },
  ],
});
