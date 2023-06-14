<template>
  <section class="section section-lg section-shaped overflow-hidden my-0">
    <div class="shape shape-style-1 shape-default shape-skew">
    </div>

    <div class="container py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-12 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden ">
            <b-carousel id="carousel1" controls indicators>
              <div v-for="image in imagens" :key="image">
                <b-carousel-slide :img-src="require(`~/assets/banner/${image}`)" :alt={image} />
              </div>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HomeConfig from '../content/config/home.json'

export default {
  name: 'CarouselBase',
  data() {
    return {
      imagens: HomeConfig.imagensBanner
    }
  }
};
</script>

<style scoped>
.w-50 {
  width: 48% !important;
  margin: 5px !important;
  padding: 5px !important;
}

.w-75 {
  width: 97% !important;
  margin: 5px !important;
  padding: 5px !important;
}

.w-25 {
  width: 32% !important;
}

.pb-lg {
  padding-bottom: 1rem !important;
}

@media only screen and (max-width: 990px) {
  .btn-mobile {
    width: 97% !important;
    margin: 5px !important;
    padding: 5px !important;
  }
}
/*.containerButton {*/
/*  height: 90% !important;*/
/*}*/
</style>
