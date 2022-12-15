<template>
  <card title="Free" icon="github">
    FOR SALE
  <p>Ecwid shopping stuff here</p>
  <p>Where to purchase locally</p>
  </card>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'ForSalePage',
  components: {
    Card,
  },
  head() {
    return {
      title: 'For Sale',
      meta: [
        {
          hid: 'description',
          name: 'coffee beans artisanal local roasted',
          content: 'Buy some freshly roasted coffee beans'
        }
      ]
    }
  }
}
</script>
