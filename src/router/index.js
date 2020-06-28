import Vue from 'vue';
import Router from 'vue-router';

// Page Components
import mainView from '@/components/MainView';
import PageCode from '@/components/PageCode';
import PageArtwork from '@/components/PageArtwork';
import PageSound from '@/components/PageSound';
import PageGames from '@/components/PageGames';
import PageSpace from '@/components/PageSpace';
import PageHardware from '@/components/PageHardware';
import PageTextfile from '@/components/PageTextfile';
import PageLinks from '@/components/PageLinks';

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
      path: '/artwork',
      name: 'PageArtwork',
      component: PageArtwork,
    },
    {
      path: '/sound',
      name: 'PageSound',
      component: PageSound,
    },
    {
      path: '/games',
      name: 'PageGames',
      component: PageGames,
    },
    {
      path: '/code',
      name: 'PageCode',
      component: PageCode,
    },
    {
      path: '/space',
      name: 'PageSpace',
      component: PageSpace,
    },
    {
      path: '/hardware',
      name: 'PageHardware',
      component: PageHardware,
    },
    {
      path: '/textfile',
      name: 'PageTextfile',
      component: PageTextfile,
    },
    {
      path: '/links',
      name: 'PageLinks',
      component: PageLinks,
    },
  ],
});
