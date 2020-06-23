<template>
  <div id="app">
    <global-header/>
    <router-view/>
    <footer-link-bar/>
  </div>
</template>

<script>
import globalHeader from './components/GlobalHeader';
import footerLinkBar from './components/FooterLinkBar';

export default {
  name: 'App',
  components: {
    'global-header': globalHeader,
    'footer-link-bar': footerLinkBar,
  },
  methods: {
    randomBorderColor() {
      const colorValue = ['#66ffcc', '#ff6666', '#9566ff', '#ffffff', '#66ffff', '#ffff66'];
      const randomColorValue = colorValue[Math.floor(Math.random() * colorValue.length)];
      document.body.style.borderColor = randomColorValue;
    },
  },
  mounted() {
    const hexChanger = () => {
      this.randomBorderColor();
    };
    setInterval(hexChanger, 96);
  },
};
</script>
