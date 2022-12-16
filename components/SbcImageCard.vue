<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img
          :src="require(`../assets/images/partners/${imageFileName}.jpg`)"
          :alt="`Image of ${imageFileName}`"
        >
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "SbcImageCard",
  props: {
    imageFileName: {
      type: String,
      required: true
    },
  }
};
</script>

<style>
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
