<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/car-logo.png" alt="Buefy" height="28" />
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
          title: 'Processing',
          to: { name: 'processing' },
        },
        {
          title: 'Our Partners',
          to: { name: 'our-partners' },
        },
        {
          title: 'About Us',
          to: { name: 'about-us' },
        },
        {
          title: 'Contact Us',
          to: { name: 'contact-us' },
        },
      ],
    }
  },
}
</script>
