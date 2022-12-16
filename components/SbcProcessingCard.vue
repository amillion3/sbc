<template>
  <div class="card mb-4 shadow-2xl">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="require(`../assets/images/processing/${imageFileName}.jpg`)"
          :alt="`Image of ${title} process`"
        >
      </figure>
    </div>
    <div class="card-content has-background-primary">
      <div class="media-content">
        <p class="title is-4 text-center has-text-white">{{ title }}</p>
      </div>
    </div>

    <div class="content has-background-grey-lighter">
      <p class="p-4">{{ description }}</p>
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
