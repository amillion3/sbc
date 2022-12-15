<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <img src="~assets/images/beans-4-colors.jpg" alt="Coffee beans">
          <h1 class="sub-title">Before specialty coffee is ready for your favorite mug, it must go through a
            highly-monitored process. The
            beans are often hand-picked, dried on a patio or elevated table, sorted for defects, taken to a cupping
            table to be graded, and then bagged for export.
          </h1>
          <h2 class="sub-title">In the bean’s description you’ll see one of these processing methods farmers use to
            produce the flavor
            profile they desire:</h2>

        </div>
      </div>

      <div
        class="columns  is-multiline"
      >
        <div
          v-for="(type, index) in types"
          :key="index"
          class="column is-full-mobile is-half-tablet"
        >
          <SbcProcessingCard
            :title="type.title"
            :description="type.description"
            :image-file-name="type.imageFileName"
          />

        </div>

      </div>

    </div>
  </section>

</template>

<script>
import SbcProcessingCard from "~/components/SbcProcessingCard.vue";

export default {
  name: "ProcessingPage",
  components: {
    SbcProcessingCard
  },
  data() {
    return {
      types: [
        {
          title: "Washed",
          description: "Combines complexity and cleanness, with great intensity. The coffee is run through a “depulper” which removes the outer fruit (cherry), the beans are soaked in water for a period and then washed in running water to remove the remaining residue.",
          imageFileName: "washed"
        },
        {
          title: "Natural",
          description: "Often has a “wild” or intensely complex flavor profile. Just as it sounds: the coffee is picked and dried as-is. Once dried, the cherry and skin around the seed (parchment) is removed mechanically prior to being bagged for export.",
          imageFileName: "natural"
        },
        {
          title: "Honey",
          description: "Allows the natural sugars of the bean to become more concentrated, and ultimately leads to a naturally sweeter cup profile. This process is aptly named “honey” because some of the sticky mucilage, the layer between the cherry and the parchment, is left on the bean while drying.",
          imageFileName: "honey"
        },
        {
          title: "Wet-Hulled",
          description: "The resulting cup from these beans are usually earthy, lower acid and full-bodied. A very interesting method commonly practiced in Indonesian growing areas. Depulping is done at the farm level, with mucilage left on the seed for a day or so, then it’s bagged and taken to a facility where the remaining parchment is removed and the beans are dried while being exposed to the elements.",
          imageFileName: "wet-hulled"
        }
      ]
    };
  },
  head() {
    return {
      title: "Processing",
      meta: [
        {
          hid: "description",
          name: "coffee beans artisanal local roasted",
          content: "Additional information on coffee bean processing by the Sanders Bros Coffee company"
        }
      ]
    };
  }
};
</script>
