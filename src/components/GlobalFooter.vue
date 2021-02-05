<template>
  <footer class="interior">
    <div class="wrap">
      <nav class="link-bar">
        <a :href="link.url" v-for="link in social" :key="link.network" target="_blank">{{ link.network }}</a>
      </nav>

      <span class="quote"></span>
    </div>
  </footer><!-- footer -->
</template>

<script>
  import quotes from '../data/quotes.json';

  export default {
    name: 'GlobalFooter',
    data() {
      return {
        quotes: quotes,
        social: [
          { network: 'linkedin', url: '//linkedin.com/in/michaelperrygoodman' },
          { network: 'github', url: '//github.com/michaelperrygoodman' },
          { network: 'codepen', url: '//codepen.io/michaelperrygoodman' },
          { network: 'email', url: 'mailto:mpg@demonlord.org' },
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
