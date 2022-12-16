<template>
  <section class="section">
    <h1 class="title has-text-centered mb-6">Our partners</h1>
    <h2 class="subtitle">
      We believe in supporting those that produce our coffee! That's why we partner with farmers who do good things at
      the source, like building homes, schools, and churches.
    </h2>
    <h3 class="subtitle">
      Sanders Bros. Coffee partners with the following farms*:
    </h3>

    <div class="box">
      <p class="has-text-weight-bold">Ashley Williams - Legacy Farms Coffee</p>
      <p>
        <a href="https://goo.gl/maps/refrDsXC3Zuztwzt9" target="_blank">
          Village of Cerro Bueno, Honduras (La Paz, Marcala)
        </a>
      </p>
      <p>
        If you want to support their mission outside of coffee, please donate directly at:
        <a href="http://lfmissions.org" target="_blank">LF Missions</a>
      </p>

      <div class="columns">
        <div
          v-for="(element, index) in ashleyWilliams"
          :key="index"
          class="column is-one-third"
        >
          <SbcImageCard :image-file-name="element.imageFileName" />
        </div>
      </div>

    </div>

    <div class="box">
      <p>Dos Ninas Coffee - Schippers Family</p>
      <p>
        <a href="https://goo.gl/maps/8bHRbuTWp75iZMZY6" target="_blank">
          Finca El Volcancito in Santa Rosa department, Guatemala
        </a>
      </p>
      <p>Direct trade coffee</p>
      <div class="columns">
        <div
          v-for="(element, index) in dosNinas"
          :key="index"
          class="column is-one-third"
        >
          <SbcImageCard :image-file-name="element.imageFileName" />
        </div>
      </div>
    </div>

    <p>*While supplies last. Although other coffees offered are not Direct Trade, they are traceable to the farm
      level.</p>

  </section>

</template>

<script>
import SbcImageCard from "@/components/SbcImageCard.vue"

export default {
  name: "OurPartnersPage",
  components: {
    SbcImageCard
  },
  data() {
    return {
      ashleyWilliams: [
        { imageFileName: "ashley" },
        { imageFileName: "ashley-workers" },
        { imageFileName: "ashley-warehouse" }
      ],
      dosNinas: [
        { imageFileName: "dos-ninas-baskets" },
        { imageFileName: "dos-ninas-build" },
        { imageFileName: "dos-ninas-school" }
      ],
    };
  },
  head() {
    return {
      title: "Our Partners",
      meta: [
        {
          hid: "description",
          name: "coffee beans artisanal local roasted",
          content: "The Sanders Bros Coffee company partners directly with farmers, where possible."
        }
      ]
    };
  },
};
</script>
