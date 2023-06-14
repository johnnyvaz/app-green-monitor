<template>
  <div>
    <Carousel/>

    <section class="section section-lg pt-0">
      <div class="container">
        <nuxt-content :document="pgInicio"/>
        <card
          gradient="warning"
          no-body
          shadow-size="lg"
          class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <div v-if="loading">Carregando...</div>
                  <div v-else>
                    <div v-if="error">Erro ao buscar os dados.</div>
                    <div v-else>
                      <div v-if="data">
                        <p>Índice de qualidade do ar: {{ data.aqi }}</p>
                        <p>Localização: {{ data.city.name }}, {{ data.city.country }}</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 ml-lg-auto">
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'PaginaInicial', pgInicio: undefined,

  async asyncData({$content}) {
    const pgInicio = await $content('paginaInicial').fetch()
    return {
      pgInicio
    }
  },
  data() {
    return {
      loading: true,
      error: false,
      data: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('https://api.waqi.info/feed/here/?token=402d3f043a9c77b1a06ef7bfcce11e799b8a6273')
        .then(response => response.json())
        .then(data => {
          this.loading = false;
          this.data = data.data;
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
          this.error = true;
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
  }
};
</script>
<style scoped>
.hidden {
  display: none;
}

</style>
