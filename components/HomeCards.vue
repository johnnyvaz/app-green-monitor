<template>
  <div class="section section-lg pt-lg-0 mt--200 container">
<!--    <div class="container">-->
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">

            <div class="col-lg-4">
              <card id="card1" hover shadow body-classes="py-5">
                <h6 class="text-primary text-uppercase">Pós Graduação</h6>
<!--                <p class="description mt-3">{{ pgInicio.descricaoPosGraduacao }}</p>-->
                <nuxt-link to="pos-graduacao">
                  <base-button tag="a" href="#" type="primary" class="mt-8">
                    Acesse
                  </base-button>
                </nuxt-link>
              </card>
            </div>
            <div class="col-lg-4">
              <card id="card2" class="border-0" hover shadow body-classes="py-5">
                <h6 class="text-success text-uppercase">Graduação</h6>
<!--                <p class="description mt-3">{{ pgInicio.descricaoGraduacao }}</p>-->
                <nuxt-link to="graduacao">
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Acesse
                  </base-button>
                </nuxt-link>
              </card>
            </div>
            <div class="col-lg-4">
              <card id="card3" class="border-0" hover shadow body-classes="py-5">
                <h6 class="text-info text-uppercase">Técnicos</h6>
<!--                <p class="description mt-3">{{ pgInicio.descricaoTecnico }}</p>-->
                <nuxt-link to="tecnico">
                  <base-button tag="a" href="#" type="info" class="mt-4">
                    Acesse
                  </base-button>
                </nuxt-link>
              </card>
            </div>

            <div class="col-lg-4">
              <card id="card4" class="border-0" hover shadow body-classes="py-5">
                <h6 class="text-warning text-uppercase">Profissionalizantes</h6>
<!--                <p class="description mt-3">{{ pgInicio.descriçãoProfissionalizante }}</p>-->
                <!--                    <nuxt-link to="profissionalizante">-->
                <base-button tag="a" href="#" type="warning" class="mt-4">
                  Acesse
                </base-button>
                <!--                    </nuxt-link>-->
              </card>
            </div>

            <div class="col-lg-4">
              <card id="card5" class="border-0" hover shadow body-classes="py-5">
                <h6 class="text-black text-uppercase">Supletivo</h6>
<!--                <p class="description mt-3">{{ pgInicio.descricaoSupletivo }}</p>-->
                <nuxt-link to="supletivo">
                  <base-button tag="a" href="#" variant="secondary" class="mt-4">
                    Acesse
                  </base-button>
                </nuxt-link>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--  </div>-->

<!--  <div class="card"-->
<!--       :class="[-->
<!--         {'card-lift&#45;&#45;hover': hover},-->
<!--         {'shadow': shadow},-->
<!--         {[`shadow-${shadowSize}`]: shadowSize},-->
<!--         {[`bg-gradient-${gradient}`]: gradient},-->
<!--         {[`bg-${type}`]: type}-->
<!--       ]">-->
<!--    <div v-if="$slots.header" class="card-header" :class="headerClasses">-->
<!--      <slot name="header">-->
<!--      </slot>-->
<!--    </div>-->
<!--    <div v-if="!noBody" class="card-body" :class="bodyClasses">-->
<!--      <slot></slot>-->
<!--    </div>-->

<!--    <slot v-if="noBody"></slot>-->

<!--    <div v-if="$slots.footer" class="card-footer" :class="footerClasses">-->
<!--      <slot name="footer"></slot>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script>
export default {
  name: "HomeCards",
  async asyncData({$content}) {
    const pgInicio = await $content('paginaInicial').fetch()
    return {
      pgInicio
    }
  },
  // props: {
  //   type: {
  //     default: "test",
  //     type: String,
  //     description: "Card type"
  //   },
  //   gradient: {
  //     default: "test",
  //     type: String,
  //     description: "Card background gradient type (warning,danger etc)"
  //   },
  //   hover: {
  //     default: true,
  //     type: Boolean,
  //     description: "Whether card should move on hover"
  //   },
  //   shadow: {
  //     default: true,
  //     type: Boolean,
  //     description: "Whether card has shadow"
  //   },
  //   shadowSize: {
  //     default: "test",
  //     type: String,
  //     description: "Card shadow size"
  //   },
  //   noBody: {
  //     type: Boolean,
  //     default: false,
  //     description: "Whether card should have wrapper body class"
  //   },
  //   bodyClasses: {
  //     default: "test",
  //     type: [String, Object, Array],
  //     description: "Card body css classes"
  //   },
  //   headerClasses: {
  //     default: "test",
  //     type: [String, Object, Array],
  //     description: "Card header css classes"
  //   },
  //   footerClasses: {
  //     default: "test",
  //     type: [String, Object, Array],
  //     description: "Card footer css classes"
  //   }
  // }
};
</script>

