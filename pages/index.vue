<template>
  <div>
    <Carousel />

    <div v-if="loading">Carregando...</div>
    <div v-else>
      <div v-if="error">Erro ao buscar os dados.</div>
      <div v-else>
        <div v-if="data">

          <div>

            <div class="card-container">
              <div class="card" :class="{ 'animate-colors': data.aqi < 50 }">
                <div class="card-header" style="background-color: lightblue">
                  <h3>{{ data.aqi }}</h3>
                </div>
                <div class="card-body">
                  <div>Índice de qualidade do ar</div>
                </div>
                <div class="card-footer" style="background-color: lightblue">
                  <!-- <p>Localização: {{ data.city.name }}</p> -->
                  <p>Nível ideal: 50</p>
                </div>
              </div>
              <div class="card" :class="{ 'animate-colors': data.iaqi.t.v < 20 }">
                <div class="card-header" style="background-color: lightgreen">
                  <h3>{{ data.iaqi.t.v }}</h3>
                </div>
                <div class="card-body">
                  <div>Temperatura</div>
                </div>
                <div class="card-footer" style="background-color: lightgreen">
                  <p>Nível ideal: 20 </p>
                </div>
              </div>
              <div class="card">
                <div class="card-header" style="background-color: lightpink">
                  <h3>{{ data.iaqi.p.v }}</h3>
                </div>
                <div class="card-body">
                  <div>Pressão</div>
                </div>
                <div class="card-footer" style="background-color: lightpink">
                  <p>Nível ideal: </p>
                </div>
              </div>
            </div>

            <!-- -------------------------- -->

            <div class="card-container">
              <div class="card">
                <div class="card-header" style="background-color: lightblue">
                  <h3>{{ data.iaqi.h.v }}</h3>
                </div>
                <div class="card-body">
                  <div>Humidade</div>
                </div>
                <div class="card-footer" style="background-color: lightblue">
                  <p>Nível ideal: </p>
                </div>
              </div>
              <div class="card">
                <div class="card-header" style="background-color: lightgreen">
                  <h3>{{ data.iaqi.w.v }}</h3>
                </div>
                <div class="card-body">
                  <div>Vento</div>
                </div>
                <div class="card-footer" style="background-color: lightgreen">
                  <p>Nível ideal: </p>
                </div>
              </div>
            </div>

            <!-- -------------------------- -->
            <div class="card-container">
              <h2>Poluentes</h2>
            </div>
            <div class="card-container">
              <div class="card">
                <div class="card-header" style="background-color: lightblue">
                  <h3>{{ data.iaqi.no2.v }}</h3>
                </div>
                <div class="card-body">
                  <div>NO2</div>
                </div>
                <div class="card-footer" style="background-color: lightblue">
                  <p>Nível ideal: </p>
                </div>
              </div>
              <div class="card">
                <div class="card-header" style="background-color: lightgreen">
                  <h3>{{ data.iaqi.w.v }}</h3>
                </div>
                <div class="card-body">
                  <div>Vento</div>
                </div>
                <div class="card-footer" style="background-color: lightgreen">
                  <p>Nível ideal: </p>
                </div>
              </div>
            </div>

            <div class="card-container">
              <div class="card">
                <h2>Previsão - 'o3'</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Média</th>
                      <th>Máx</th>
                      <th>Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dados, index) in data.forecast.daily.o3" :key="index">
                      <td>{{ dados.day }}</td>
                      <td>{{ dados.avg }}</td>
                      <td>{{ dados.max }}</td>
                      <td>{{ dados.min }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card">
                <h2>PM 10</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Média</th>
                      <th>Máx</th>
                      <th>Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dados, index) in data.forecast.daily.pm10" :key="index">
                      <td>{{ dados.day }}</td>
                      <td>{{ dados.avg }}</td>
                      <td>{{ dados.max }}</td>
                      <td>{{ dados.min }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card">
                <h2>PM 25</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Média</th>
                      <th>Máx</th>
                      <th>Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dados, index) in data.forecast.daily.pm25" :key="index">
                      <td>{{ dados.day }}</td>
                      <td>{{ dados.avg }}</td>
                      <td>{{ dados.max }}</td>
                      <td>{{ dados.min }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>



          </div>
          <div class="card-container">
            <div class="">
              <h4>Atribuições</h4>
              <p><span class="strong">url:</span> {{ data.attributions[0].url }}</p>
              <p><span class="strong">nome:</span> {{ data.attributions[0].name }}</p>
              <p><span class="strong">url:</span> {{ data.attributions[1].url }}</p>
              <p><span class="strong">name:</span> {{ data.attributions[1].name }}</p>


              <div>Data do servidor da API (+9 horas)</div>
              <div>{{ data.debug.sync }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'PaginaInicial', pgInicio: undefined,

  data() {
    return {
      loading: true,
      error: false,
      data: null,
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
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.card-header {
  padding: 10px;
  border-radius: 5px 5px 0 0;
  color: white;
  text-align: center;
}

.card-body {
  padding: 10px;
  text-align: center;
  font-size: large;
}

.card-footer {
  padding: 10px;
  border-radius: 0 0 5px 5px;
  color: gray;
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid lightgray;
}

.table th {
  background-color: lightgray;
}

.strong {
  font-weight: 500;
  font-size: larger;
  color: black;
}

.animate-colors {
  animation: alternateColors 1s infinite;
}

@keyframes alternateColors {
  0% {
    background-color: rgb(165, 165, 165);
  }
  50% {
    background-color: rgb(165, 165, 165);
  }
  100% {
    background-color: rgb(121, 121, 121);
  }
}

</style>
