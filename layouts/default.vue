<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">

          <a class="navbar-item size-1" href="/">
            <img src="~assets/images/car-logo.png" alt="Sanders Bros Coffee" height="28" />
            Sanders Bros Coffee
          </a>


        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
<!--              <b-icon :icon="item.icon" />-->
               {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: { name: 'index' },
        },
        {
          title: 'Purchase',
          to: { name: 'for-sale' },
        },
        {
          title: 'Process',
          to: { name: 'processing' },
        },
        {
          title: 'Partners',
          to: { name: 'our-partners' },
        },
        {
          title: 'About',
          to: { name: 'about-us' },
        },
        {
          title: 'Contact',
          to: { name: 'contact-us' },
        },
      ],
    }
  },
  head: {
    titleTemplate: '%s - Sanders Bros Coffee | Murfreesboro, TN',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Fresh and locally roasted coffee beans in Murfreesboro TN, Rutherford County and surrounding areas.'
      }
    ]
  },
}
</script>
