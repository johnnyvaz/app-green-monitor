<template>
  <div>
    <infinite-slide-bar>
      <b-row>
            <b-col><b-img :src="require(`~/assets/svg/educamais.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/facol.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/fasul.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/sao-luis.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/unibta.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/unilins.svg`)" height="100px" /></b-col>
            <b-col><b-img :src="require(`~/assets/svg/unisantacruz.svg`)" height="100px" /></b-col>
      </b-row>
    </infinite-slide-bar>
  </div>
</template>
<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import HomeConfig from '../content/config/home.json'

export default {
  name: "SlideInfinite",
  components: {
    InfiniteSlideBar,
  },
  data() {
    return {
      parceiros: HomeConfig.parceiros
    }
  }
};
</script>

