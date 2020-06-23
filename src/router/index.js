import Vue from 'vue';
import Router from 'vue-router';

// Page Components
import mainView from '@/components/MainView';
import pageCode from '@/components/PageCode';
import pageArtwork from '@/components/PageArtwork';
import pageSound from '@/components/PageSound';
import pageQuake from '@/components/PageQuake';
import pageLinks from '@/components/PageLinks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: mainView,
    },
    {
      path: '/code',
      name: 'pageCode',
      component: pageCode,
    },
    {
      path: '/artwork',
      name: 'pageArtwork',
      component: pageArtwork,
    },
    {
      path: '/sound',
      name: 'pageSound',
      component: pageSound,
    },
    {
      path: '/quake',
      name: 'pageQuake',
      component: pageQuake,
    },
    {
      path: '/links',
      name: 'pageLinks',
      component: pageLinks,
    },
  ],
});
