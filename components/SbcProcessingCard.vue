<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="require(`../assets/images/processing/${imageFileName}.jpg`)"
          :alt="`Image of ${title} process`"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content">
        <p class="title is-4">{{ title }}</p>
      </div>
    </div>

    <div class="content">
      {{ description }}
    </div>
  </div>

</template>

<script>
export default {
  name: "SbcProcessingCard",
  props: {
    imageFileName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
  .card {
    /*max-width: 25%;*/
  }
</style>
