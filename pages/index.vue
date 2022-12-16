<template>
  <section class="section">
    <div class="columns is-mobile">
      <h1 class="title">Welcome to Sanders Bros. Coffee</h1>
    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {},
  head() {
    return {
      title: 'Fresh, locally roasted coffee beans',
      meta: [
        {
          hid: 'description',
          name: 'coffee beans artisanal local roasted',
        }
      ]
    }
  }
}
</script>
