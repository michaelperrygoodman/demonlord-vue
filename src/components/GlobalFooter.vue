<template>
  <section>
    <nav class="link-bar">
      <a :href="link.url" v-for="link in social" :key="link.network" target="_blank">{{ link.network }}</a>
    </nav>
    <!-- <span class="quote"></span> -->
  </section>
</template>

<script>
import quoteData from '../data/quoteData.json';
export default {
  name: 'GlobalFooter',
  data() {
    return {
      quotes: quoteData,
      social: [
        { network: 'github', url: '//github.com/michaelperrygoodman' },
        { network: 'codepen', url: '//codepen.io/michaelperrygoodman' },
        { network: 'linkedin', url: '//linkedin.com/in/michaelperrygoodman' },
        { network: 'email', url: 'mailto:michaelperrygoodman@gmail.com' },
      ]
    }
  },
  methods: {
    textChanger() {
      let idx = Math.floor(Math.random() * this.quotes.length);
      let rndQuote = this.quotes[idx].quote;
      document.querySelector('.quote').innerHTML = rndQuote;
    },
  },
  mounted() {
    this.textChanger();
  },
};
</script>
