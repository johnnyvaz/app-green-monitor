<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">Siga em nossas redes sociais!</h3>
          <h4 class="mb-0 font-weight-light">E fique por dentro das novidades.</h4>
        </div>
        
      </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            versão : {{ version }}
          </div>
        </div>
        <div class="col-md-6">

        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import packagejson from "../package.json"


export default {
  name: 'FooterBase',
  data() {
    return {
      year: new Date().getFullYear(),
      version: packagejson.version
    }
  }
};
</script>
<style>
</style>
