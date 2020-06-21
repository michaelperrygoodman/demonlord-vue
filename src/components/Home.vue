<template>
  <section>
    <p>hi, i'm michael and i'm a front-end developer with a graphic design background.</p>
    <p>for over a decade i've worked with web design and development agencies in a variety
      of industries, with brands such as Kraft, IBM, Wilson, Abbott, and others.</p>
    <p>my primary focus in most of these roles has been tasks like page templating,
      converting design comps into HTML/CSS/JS, and application UI, however i've
      become a swiss army knife of sorts, with skills ranging from logo design
      to HTML email development to single page apps.</p>
    <p>please feel free to reach out and chat.</p>
    <span class="cursor"></span>
    <p class="link-bar">
      <a href="//codepen.io/michaelperrygoodman" target="_blank">codepen</a>
      <a href="//github.com/michaelperrygoodman" target="_blank">github</a>
      <a href="//linkedin.com/in/michaelperrygoodman" target="blank">linkedin</a>
      <a href="mailto:michaelperrygoodman@gmail.com">email</a>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Home',
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
