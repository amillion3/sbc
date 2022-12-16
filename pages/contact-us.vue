<template>
  <section class="mx-auto form-container">
    <div class="container is-max-desktop">
      <p class="mb-6">
        We would love to hear from you! Please fill out the form below and we will get back with you
        soon.
      </p>
      <form
        name="sbc-contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <!--      <form-->
<!--        name="contact"-->
<!--        method="POST"-->
<!--        data-netlify=true-->
<!--      >-->
<!--&lt;!&ndash;        data-netlify-recaptcha="true"&ndash;&gt;-->
<!--        <div class="field">-->
<!--          <label class="label">Name</label>-->
<!--          <div class="control">-->
<!--            <input class="input" type="text" placeholder="Your name">-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="field">-->
<!--          <label class="label">Email</label>-->
<!--          <div class="control">-->
<!--            <input class="input" type="email" placeholder="Your email" value="">-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="field">-->
<!--          <label class="label">Message</label>-->
<!--          <div class="control">-->
<!--            <textarea class="textarea" placeholder="Your message"></textarea>-->
<!--          </div>-->
<!--        </div>-->

<!--&lt;!&ndash;        <div data-netlify-recaptcha="true"></div>&ndash;&gt;-->

<!--        <div class="field is-grouped">-->
<!--          <div class="control">-->
<!--            <button type="submit" class="button is-primary">Submit</button>-->
<!--          </div>-->
<!--        </div>-->

<!--      </form>-->


    </div>
  </section>
</template>

<script>

export default {
  name: "ContactUsPage",
  components: {},
  head() {
    return {
      title: "Contact Us",
      meta: [
        {
          hid: "description",
          name: "coffee beans artisanal local roasted",
          content: "Get in touch with the Sanders Bros Coffee company"
        }
      ]
    };
  }
};
</script>

<style>
.form-container {
  max-width: 500px;
  margin-top: 50px;
}

</style>
