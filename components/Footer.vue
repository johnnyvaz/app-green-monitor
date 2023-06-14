<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          
          <a href="https://aqicn.org/city/brazil/sao-paulo/sao-jose-do-rio-preto/pt">
            <h3 class="text-primary font-weight-light mb-2">Fonte das Informações</h3>
          </a>
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
