<template>
  <section id="global-header">
    <router-link to="/" class="logo">demonlord.org</router-link>
    <nav-menu/>
  </section>
</template>

<script>
import navMenu from './NavMenu';

export default {
  name: 'globalHeader',
  components: {
    'nav-menu': navMenu,
  },
};
</script>
