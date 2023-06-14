<template>
  <div>
    <MenuHeader />
    <Header />
    <div>
<!--      <FadeTransition :duration="300" mode="out-in">-->
        <!-- your content here -->
        <Nuxt />
<!--      </FadeTransition>-->
    </div>
    <Footer />
  </div>
</template>
<script>
// import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'DefaultLayout',
  component: {
    // FadeTransition,
  },
}
</script>
