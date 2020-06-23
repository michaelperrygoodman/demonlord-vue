<template>
  <section>
    <nav class="link-bar">
      <a :href="link.url" v-for="link in social" :key="link.network" target="_blank">{{ link.network }}</a>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'footerLinkBar',
  data() {
    return {
      social: [
        { network: 'codepen', url: '//codepen.io/michaelperrygoodman' },
        { network: 'github', url: '//github.com/michaelperrygoodman' },
        { network: 'linkedin', url: '//linkedin.com/in/michaelperrygoodman' },
        { network: 'email', url: 'mailto:michaelperrygoodman@gmail.com' },
      ]
    }
  },
};
</script>
