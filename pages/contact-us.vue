<template>
  <card title="Free" icon="github">
    CONTACT Us
  </card>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'ContactUsPage',
  components: {
    Card,
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'coffee beans artisanal local roasted',
          content: 'Get in touch with the Sanders Bros Coffee company'
        }
      ]
    }
  }
}
</script>
