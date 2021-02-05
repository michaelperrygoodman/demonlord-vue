<template>
  <div id="app">
    <global-header/>
    <section class="content" :class="componentName ? `${componentName}` : ``">
      <router-view/>
      <global-footer/>
    </section>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';

export default {
  name: 'App',
  components: {
    'global-header': GlobalHeader,
    'global-footer': GlobalFooter,
  },
  computed: {
    siteUrl() {
      const url = document.URL;
      const urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
      return urlParts[0];
    },
    currentYear() {
      return new Date().getFullYear();
    },
    componentName() {
      return this.$route.name;
    }
  },
  methods: {
    banner() {
      console.log('Initializing...');
    },
    randomColor() {
      const colors = [ '#66ffcc', '#ff6666', '#9566ff', '#66ffff', '#ffff66' ];
      const colorValue = colors;
      const randomColorValue = colorValue[Math.floor(Math.random() * colorValue.length)];
      document.body.style.backgroundColor = randomColorValue;
    },
    randomBorderColor() {
      const colorValue = ['#66ffcc', '#ff6666', '#9566ff', '#ffffff', '#66ffff', '#ffff66'];
      const randomColorValue = colorValue[Math.floor(Math.random() * colorValue.length)];
      document.body.style.borderColor = randomColorValue;
    },
  },
  mounted() {
    this.banner();

    const hexChanger = () => {
      this.randomColor();
      this.randomBorderColor();
    };
    setInterval(hexChanger, 2000);
  },
};
</script>
