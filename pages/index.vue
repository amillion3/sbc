<template>
  <section class="section">
    <h1 class="title has-text-centered mb-6">Fresh, locally roasted coffee</h1>
    <h2 class="subtitle has-text-centered">Welcome to Sanders Bros. Coffee!</h2>
  </section>
</template>

<script>

export default {
  name: "IndexPage",
  components: {},
  head() {
    return {
      title: "Fresh, locally roasted coffee beans",
      meta: [
        {
          hid: "description",
          name: "coffee beans artisanal local roasted"
        }
      ]
    };
  }
};
</script>

<style>
h1, h2 {
  display: block;
}
</style>
