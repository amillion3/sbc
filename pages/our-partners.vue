<template>
  <card title="Free" icon="github">
    Our partners
  </card>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'OurPartnersPage',
  components: {
    Card,
  },
  head() {
    return {
      title: 'Our Partners',
      meta: [
        {
          hid: 'description',
          name: 'coffee beans artisanal local roasted',
          content: 'The Sanders Bros Coffee company partners directly with farmers, where possible.'
        }
      ]
    }
  }
}
</script>
