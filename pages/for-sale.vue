<template>
  <section>
    <p>Ecwid shopping stuff here</p>
    <p>Where to purchase locally</p>
  </section>
</template>

<script>

export default {
  name: "ForSalePage",
  components: {},
  head() {
    return {
      title: "For Sale",
      meta: [
        {
          hid: "description",
          name: "coffee beans artisanal local roasted",
          content: "Buy some freshly roasted coffee beans"
        }
      ]
    };
  }
};
</script>
