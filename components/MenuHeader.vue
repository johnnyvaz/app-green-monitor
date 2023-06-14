<template>
    <header>
      <div class="mobile">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
          <div class="row" slot="content-header" slot-scope="{closeMenu}">
            <div class="col-12 collapse-close">
              <close-button @click="closeMenu"></close-button>
            </div>
          </div>
          <ul>
            Cursos
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="/pos-graduacao">
              <span class="nav-link-inner--text d-lg-none">Pós-Graduação</span>
            </a>
          </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/graduacao" >
                <span class="nav-link-inner--text d-lg-none">Graduação</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/tecnico" >
                <span class="nav-link-inner--text d-lg-none">Técnico</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/supletivo" >
                <span class="nav-link-inner--text d-lg-none">Supletivo</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon"
                 href="https://cursosdandaroeducacional.com.br" >
                <span class="nav-link-inner--text d-lg-none">Profissionalizante</span>
              </a>
            </li>
          </ul>
          <hr />
            <ul>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/" >
                <span class="nav-link-inner--text d-lg-none">Home</span>
              </a>
            </li>
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="/sobre-nos" >
                  <span class="nav-link-inner--text d-lg-none">Sobre nós</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="/estrutura" >
                  <span class="nav-link-inner--text d-lg-none">Estrutura</span>
                </a>
              </li>
            </ul>
          <hr />
          <ul>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="http://vtiger.dandaroeducacional.com.br/index.php" >
                <span class="nav-link-inner--text d-lg-none">Área Restrita</span>
              </a>
            </li>
          </ul>
        </base-nav>
      </div>
    </header>
</template>
<script>
import BaseNav from "~/components/BaseNav";
import CloseButton from "~/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style scoped>
.mobile {
  opacity: 0; /* Esconde no desktop. */
  height: 0;
}

@media only screen and (max-width: 990px) {
  .mobile {
    opacity: 1; /* Só aparece no mobile. */
    height: auto;
  }
}
</style>
