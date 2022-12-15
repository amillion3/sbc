<template>
  <section class="section is-medium">
    <h1 class="title">About Us</h1>
    <p class="subtitle">
      The Sanders Bros. have a 100 year heritage of providing top-notch service. This heirloom family photo shows our great, great grandfather John Henry with his three sons Isaac, Herbert, and Nealy Sanders in front of the livery that housed their customers’ Model-T Fords.
    </p>

    <div class="columns is-mobile is-centered">
      <div class="column is-full-mobile is-two-thirds-tablet">
        <div class="box">
          <article class="media">
            <div class="media-center">
              <figure class="image">
                <img
                  src="~assets/images/model-t.png"
                  alt="Sanders Bros vintage"
                  style="max-width:800px;"
                >
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>

    <p class="subtitle">
      Back then it was automobiles, but today the Sanders Bros. (and sister!) work to continue the legacy by sourcing and roasting the best coffee available. And so from our cup to yours we say, “Here’s to good coffee!”.
    </p>

    <div class="columns is-mobile is-centered">
      <div class="column is-full-mobile is-two-thirds-tablet">
        <div class="box">
          <article class="media">
            <div class="media-center">
              <figure class="image">
                <img
                  src="~assets/images/sbc-new.png"
                  alt="Sanders Bros current"
                  style="max-width:800px;"
                >
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutUsPage',
  components: {},
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'coffee beans artisanal local roasted',
          content: 'The Sanders Bros. have a 100 year heritage of providing top-notch service.'
        }
      ]
    }
  }
}
</script>
