<template>
  <!-- Navegação -->
  <header
    class="position-fixed w-100 p-3 d-flex align-items-center justify-content-center"
    :class="{ 'hide-header': isMenuOpen }"
    style="z-index: 10"
  >
    <div class="navi-shadow w-100">
      <div class="navi-box w-100 h-100 d-flex align-items-center px-8">
        <div class="me-auto">
          <img src="../assets/images/logo.png" alt="" width="160" />
        </div>
        <div class="d-md-flex d-none gap-4">
          <a href="#home" class="black-link">
            <p class="mb-0">Início</p>
          </a>
          <a href="#about" class="black-link">
            <p class="mb-0">Sobre nós</p>
          </a>
          <a href="#services" class="black-link">
            <p class="mb-0">Recursos</p>
          </a>
          <a href="#contact" class="black-link">
            <p class="mb-0">Contato</p>
          </a>
        </div>
        <div
          class="d-md-flex d-none ms-auto align-items-center justify-content-center"
        >
          <a class="black-link me-2" href="register">
            <p class="mb-0">Cadastrar-se</p>
          </a>
          <div class="h-line me-2"></div>
          <a
            href="login"
            class="position-relative d-flex align-items-center justify-content-center btn main-btn"
            style="border-radius: 11px"
          >
            <div class="btn-hover"></div>
            <p class="mb-0">Login</p>
          </a>
        </div>
        <div class="d-flex d-md-none me-2 open-btn-menu" @click="openMenu">
          <i class="fa-regular fa-bars"></i>
        </div>
      </div>
    </div>
  </header>
  <!-- Navegação -->
  <header
    class="position-fixed w-100 p-3 d-flex align-items-center justify-content-center"
    :class="{ 'hide-header': isMenuOpen }"
    style="z-index: 10"
  >
    <div class="navi-shadow w-100">
      <div class="navi-box w-100 h-100 d-flex align-items-center px-8">
        <div class="me-auto">
          <img src="../assets/images/logo.png" alt="" width="160" />
        </div>
        <div class="d-md-flex d-none gap-4">
          <a href="#home" class="black-link">
            <p class="mb-0">Início</p>
          </a>
          <a href="#about" class="black-link">
            <p class="mb-0">Sobre nós</p>
          </a>
          <a href="#services" class="black-link">
            <p class="mb-0">Recursos</p>
          </a>
          <a href="#contact" class="black-link">
            <p class="mb-0">Contato</p>
          </a>
        </div>
        <div
          class="d-md-flex d-none ms-auto align-items-center justify-content-center"
        >
          <a class="black-link me-2" href="register">
            <p class="mb-0">Cadastrar-se</p>
          </a>
          <div class="h-line me-2"></div>
          <a
            href="login"
            class="position-relative d-flex align-items-center justify-content-center btn main-btn"
            style="border-radius: 11px"
          >
            <div class="btn-hover"></div>
            <p class="mb-0">Login</p>
          </a>
        </div>
        <div class="d-flex d-md-none me-2 open-btn-menu" @click="openMenu">
          <i class="fa-regular fa-bars"></i>
        </div>
      </div>
    </div>
  </header>

  <div
    class="menu p-3 position-fixed h-100"
    :class="{ 'show-menu': isMenuOpen }"
    style="z-index: 1030"
  >
    <div class="menu-shadow">
      <div class="menu-header p-3 position-relative">
        <div class="p-2 position-absolute close-btn-menu" @click="closeMenu">
          <i class="fa-regular fa-xmark"></i>
        </div>
        <div>
          <img src="../assets/images/logo.png" alt="" width="152" />
          <hr />
        </div>
        <div class="d-flex flex-column gap-3">
          <a href="#home" class="black-link">
            <p class="mb-0">Início</p>
          </a>
          <a href="#about" class="black-link">
            <p class="mb-0">Sobre nós</p>
          </a>
          <a href="#services" class="black-link">
            <p class="mb-0">Recursos</p>
          </a>
          <a href="#contact" class="black-link">
            <p class="mb-0">Contato</p>
          </a>
          <hr />
        </div>
        <div class="d-flex flex-column gap-3">
          <a class="black-link me-2" href="../assets/login.html">
            <p class="mb-0">Cadastrar-se</p>
          </a>
          <button
            type="button"
            class="position-relative d-flex align-items-center justify-content-center btn main-btn"
            style="border-radius: 11px"
          >
            <div class="btn-hover"></div>
            <p class="mb-0">Login</p>
          </button>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-half-170 d-table w-100 bg-soft-primary" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="title-heading me-lg-5">
            <h1 class="heading fw-bold text-dark mb-3">
              <span class="text-primary">IFRS</span> Farroupilha <br />Lorem
              Ipsum
            </h1>
            <p class="para-desc text-muted title-dark">
              É um fato conhecido de todos que um leitor se distrairá com o
              conteúdo de texto legível de uma página quando estiver examinando
              sua diagramação.
            </p>
            <div class="d-flex">
              <button
                type="button"
                class="mt-4 position-relative d-flex align-items-center justify-content-center btn main-btn"
              >
                <div class="btn-hover"></div>
                <p class="mb-0">Entrar</p>
              </button>
            </div>
          </div>
        </div>

        <div class="position-relative col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div class="about-right">
            <div class="position-relative shadow p-2 rounded bg-white img-one">
              <a
                href="../assets/images/phoenix-600x800.png"
                class="lightbox"
                title=""
              >
                <img
                  src="../assets/images/phoenix-600x800.png"
                  class="img-fluid rounded"
                  alt=""
                />
              </a>
              <div
                class="position-absolute top-0 end-0"
                style="z-index: -1; top: -50px !important"
              >
                <img
                  src="../assets/images/svg/dots.svg"
                  class="avatar avatar-xl-large"
                  alt=""
                />
              </div>
            </div>
            <div class="img-two">
              <div class="tiny-one-item">
                <div class="tiny-slide">
                  <div class="m-2">
                    <div class="shadow rounded-3 overflow-hidden p-2 bg-white">
                      <a
                        href="../assets/images/phoenix-1200x750.png"
                        class="lightbox"
                        title=""
                      >
                        <img
                          src="../assets/images/phoenix-1200x750.png"
                          class="img-fluid rounded-3"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/decoration.png"
      alt=""
      class="start-0 position-absolute opacity-50 w-100"
      style="top: 30%; z-index: -1"
    />
  </section>

  <section class="section py-100" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <div
            class="section-title mb-4 pb-2 d-flex flex-column align-items-center"
          >
            <h2
              class="title mb-3 text-center"
              style="max-width: 90%; font-size: 42px !important"
            >
              Subtitulo para chamar a atenção do leitor para a escrita abaixo
            </h2>
            <p
              class="text-muted para-desc mb-0 text-center"
              style="font-size: 20px"
            >
              Existem muitas variações disponíveis de passagens de Lorem Ipsum,
              mas a maioria sofreu algum tipo de alteração, seja por inserção de
              passagens com humor, ou palavras aleatórias que não parecem nem um
              pouco convincentes. Se você pretende usar uma passagem de Lorem
              Ipsum, precisa ter certeza de que não há algo embaraçoso escrito
              escondido no meio do texto. Todos os geradores de Lorem Ipsum na
              internet tendem a repetir pedaços predefinidos conforme
              necessário, fazendo deste o primeiro gerador de Lorem Ipsum
              autêntico da internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-200">
    <div class="brand-style-one-items">
      <div
        class="d-flex flex-column align-items-center justify-content-center h-100"
      >
        <div class="title-heading me-lg-5">
          <h1
            class="heading fw-bold text-white mb-3 font-montserrant text-center"
          >
            <span class="text-primary">IFRS </span> Farroupilha
          </h1>
          <p class="para-desc text-muted title-dark">
            Adicionar texto descritivo aqui para chamar a atenção do leitor
          </p>
        </div>
        <button
          type="button"
          class="position-relative d-flex align-items-center justify-content-center btn main-btn"
          style="border-radius: 11px"
        >
          <div class="btn-hover"></div>
          <p class="mb-0">Login</p>
        </button>
      </div>
    </div>
    <img
      src="../assets/images/15.png"
      alt=""
      width="200px"
      class="position-absolute end-0"
    />
  </section>

  <div
    id="services"
    class="py-200 default-padding bottom-less text-center software-style-one-area"
    style="
      background-image: url(./assets/images/17.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 mt-60 mt-xs-0">
          <div class="site-heading text-center">
            <h5 class="sub-heading">Services</h5>
            <h2 class="title">Features designed for you</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="services-more row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="item">
            <i class="fa-thin fa-chart-user"></i>
            <h4>HOA Management Company Consulting</h4>
            <p>
              We provide a strategic HOA game plan to efficiently address
              compliance requirements, complete projects, and fulfill homeowner
              requests with speed and precision.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="item">
            <i class="fa-thin fa-file-invoice"></i>
            <h4>HOA Accounting Company Services</h4>
            <p>
              Accurate financials are key to any HOA's success. Our expert
              accounting services cover balance sheets, P&amp;L statements,
              budget reports, cash flow, reconciliations, and accrued accounting
              based on service contracts.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="item">
            <i class="fa-thin fa-messages"></i>
            <h4>Legal HOA Community Management</h4>
            <p>
              We collaborate with top HOA attorneys in the San Jose area and
              have extensive experience handling insurance claims and
              submissions, ensuring your community is protected and
              well-represented.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="item">
            <i class="fa-thin fa-envelopes-bulk"></i>
            <h4>State-of-the-Art Communication Dashboard</h4>
            <p>
              We’re the first to offer an innovative way to connect with your
              community. Whether reaching one homeowner or the whole
              neighborhood, we make communication easy. Manage projects, handle
              compliance, and send newsletters—all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="mt-100">
    <div class="container mt-100 mt-60" id="portfolio">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title">
            <h6 class="text-primary fw-medium mb-2">Case Studies</h6>
            <h4 class="title mb-3">Texto alternativo. texto alternativo</h4>
            <p class="text-muted para-desc mb-0" style="text-indent: 2em">
              seja por inserção de passagens com humor, ou palavras aleatórias
              que não parecem nem um pouco convincentes. Se você pretende usar
              uma passagem de Lorem Ipsum, precisa ter certeza de que não há
              algo embaraçoso escrito escondido no meio do texto
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="row g-3 align-items-center">
            <div class="col-12">
              <img
                src="../assets/images/img-9.png"
                class="img-fluid rounded-3 custom-img"
                alt="work-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 50px">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-5">
          <div class="row g-3 align-items-center">
            <div class="col-12">
              <div
                class="position-relative p-2"
                style="border-radius: 1rem 5rem 1rem 3rem"
              >
                <img
                  src="../assets/images/img-8.png"
                  class="img-fluid"
                  alt=""
                  style="border-radius: 1rem 5rem 1rem 3rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ms-lg-5">
            <h4 class="title mb-3">IFRS - Texto alternativo</h4>
            <p class="text-muted para-desc mb-0" style="text-indent: 2em">
              seja por inserção de passagens com humor, ou palavras aleatórias
              que não parecem nem um pouco convincentes. Se você pretende usar
              uma passagem de Lorem Ipsum, precisa ter certeza de que não há
              algo embaraçoso escrito escondido no meio do texto.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title">
            <h4 class="title mb-3">IFRS - Texto alternativo</h4>
            <p class="text-muted para-desc mb-0" style="text-indent: 2em">
              seja por inserção de passagens com humor, ou palavras aleatórias
              que não parecem nem um pouco convincentes. Se você pretende usar
              uma passagem de Lorem Ipsum, precisa ter certeza de que não há
              algo embaraçoso escrito escondido no meio do texto
            </p>
            <div class="mt-4">
              <button
                type="button"
                class="mt-4 position-relative d-flex align-items-center justify-content-center btn main-btn"
              >
                <div class="btn-hover"></div>
                <p class="mb-0">Entrar</p>
              </button>
            </div>
            <br /><br />
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="row g-3 align-items-center">
            <div class="col-12 text-end">
              <img
                src="../assets/images/img-10.png"
                class="img-fluid rounded-3 custom-img"
                alt="work-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-footer mt-100">
    <div class="container">
      <div class="footer-py-60">
        <div class="row">
          <div class="col-lg-5 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="../assets/images/logo-white.png" alt="" width="300px" />
            </a>
            <hr />
            <p class="mt-4 text-white">
              IFRS - Adicionar texto para chamar a atenção do leitor para o tema
              abordado no topico
            </p>
            <button
              type="button"
              class="mt-4 position-relative d-flex align-items-center justify-content-center btn main-btn"
            >
              <div class="btn-hover"></div>
              <p class="mb-0">Entrar</p>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="footer-head font-montserrant text-white">IFRS</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li><a href="#home" class="text-white"> RS</a></li>
              <li><a href="#about" class="text-white"> IFRS</a></li>
              <li><a href="#services" class="text-white"> Farroupilha</a></li>
              <li><a href="#contact" class="text-white"> IFRS</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="footer-head font-montserrant text-white">
              IFRS - Texto alternativo
            </h5>
            <div class="d-flex mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-phone fea icon-sm text-white mt-1 me-3"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              <a href="tel:5102889412" class="text-white">NUMERO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-py-30 footer-bar">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="text-center">
              <p class="mb-0 text-white">IFRS - TEXTO ALTERNATIVO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function openMenu() {
  isMenuOpen.value = true;
}

function closeMenu() {
  console.log("teste");
  isMenuOpen.value = false;
}
</script>

<style>
/* espacamento global do site */
.LandingPage .px-10 {
  padding-right: 10px;
  padding-left: 10px;
}

.LandingPage .px-8 {
  padding-right: 8px;
  padding-left: 8px;
}

/* btn global do site */
.LandingPage .main-btn {
  overflow: hidden;
  background-color: var(--main-color);
}

.LandingPage .main-btn .btn-hover {
  transition: 0.4s ease-in all;
  position: absolute;
  width: 0;
  height: 100%;
  border-radius: 40px;
  background-color: transparent;
}

.LandingPage .main-btn:hover .btn-hover {
  width: 140%;
  background-color: #37d7528f;
}

.LandingPage .main-btn p {
  z-index: 10;
  color: white;
  font-weight: 700 !important;
}

/* Inicio CSS-Global */
.LandingPage .pt-100 {
  padding-top: 100px;
}

.LandingPage .py-100 {
  padding: 100px 0;
}

.LandingPage .py-200 {
  padding: 200px 0;
}

.LandingPage .pt-150 {
  padding-top: 150px !important;
}

.LandingPage .mt-100 {
  margin-top: 100px;
}

.LandingPage .mb-200 {
  margin-bottom: 200px;
}

.LandingPage .mb-100 {
  margin-bottom: 100px;
}

.LandingPage .mb-60 {
  margin-bottom: 60px;
}

.LandingPage .shadow {
  box-shadow: 0 0 3px rgba(30, 41, 59, 0.15) !important;
}

.LandingPage .shadow-lg {
  box-shadow: 0 10px 25px rgba(30, 41, 59, 0.15) !important;
}

.LandingPage .shadow-md {
  box-shadow: 0 5px 13px rgba(30, 41, 59, 0.2) !important;
}

/* Text */
.LandingPage .text-primary {
  color: var(--second-color) !important;
}

.LandingPage .text-muted {
  color: #94a3b8 !important;
}

.LandingPage a.text-muted:hover,
.LandingPage a.text-muted:focus {
  color: #8596ae !important;
}

.LandingPage .text-muted {
  color: #94a3b8 !important;
}

.LandingPage a.text-muted:hover,
.LandingPage a.text-muted:focus {
  color: #8596ae !important;
}

.LandingPage a {
  transition: ease-in-out 0.2s all;
}

.LandingPage a:hover {
  color: var(--main-color);
}

/* Final CSS-Global */

/* Inicio Background */

.LandingPage .bg-half-170 {
  padding: 170px 0;
  background-size: cover !important;
  align-self: center;
  position: relative;
  background-position: center center;
}

@media (max-width: 767px) {
  .LandingPage .bg-half-170 {
    padding: 120px 0;
    height: auto;
  }
}

.LandingPage .bg-soft-primary {
  background-color: rgba(56, 189, 248, 0.05) !important;
  color: var(--second-color) !important;
}

/* Final Background */

/* Inicio Nav */
.LandingPage header {
  top: 0px;
  transition: all ease-in-out 0.4s;
}

.LandingPage header.hide-header {
  top: -90px;
}

.LandingPage .navi-box {
  max-width: 1210px;
  height: 70px;
  border-radius: 15px;
  background-color: white;
}

.LandingPage .navi-shadow {
  padding: 8px;
  max-width: 1210px;
  height: 70px;
  border-radius: 22px;
  background-color: #eeefef96;
}

.LandingPage .black-link {
  font-size: 14px;
  color: #212529;
  font-weight: 600;
  text-decoration: none;
}

.LandingPage .h-line {
  height: 20px;
  width: 2px;
  background-color: #212529;
}

/* Final Nav */

/* inicio menu */
.LandingPage .menu {
  left: -280px;
  transition: all ease-in-out 0.4s;
}

.LandingPage .menu.show-menu {
  left: 0px;
}

.LandingPage .menu-shadow {
  padding: 8px;
  width: 260px;
  height: 100%;
  border-radius: 22px;
  background-color: #eeefef96;
}

.LandingPage .menu-header {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: white;
}

.LandingPage .menu-header .close-btn-menu {
  top: 10px;
  right: 10px;
}

/* final menu */

/* Inicio Title */

.LandingPage .title-heading {
  line-height: 26px;
}

.LandingPage .title-heading .heading {
  font-size: 48px !important;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .LandingPage .title-heading .heading {
    font-size: 40px !important;
  }
}

.LandingPage .title-heading .heading.sub-heading {
  font-size: 32px !important;
}

@media (max-width: 768px) {
  .LandingPage .title-heading .heading.sub-heading {
    font-size: 28px !important;
  }
}

.LandingPage .title-heading .letter-spacing {
  letter-spacing: 1px;
}

.LandingPage .title-heading .para-desc {
  font-size: 20px;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .LandingPage .title-heading .para-desc {
    font-size: 16px !important;
  }
}

/* Final Title */

/* Inicio Subtitle */

.LandingPage .about-right {
  display: flex;
  justify-content: end;
}

.LandingPage .about-right .img-one {
  max-width: 80%;
}

.LandingPage .about-right .img-one .cta-video {
  position: absolute;
  top: 5%;
  left: 5%;
}

.LandingPage .about-right .img-two {
  position: absolute;
  left: 0;
  bottom: 5%;
  max-width: 250px;
}

.LandingPage .about-left .img-one {
  max-width: 80%;
}

.LandingPage .about-left .img-one .cta-video {
  position: absolute;
  top: 5%;
  right: 5%;
}

.LandingPage .about-left .img-two {
  position: absolute;
  right: 0;
  bottom: 5%;
  max-width: 250px;
}

.LandingPage .about-right {
  display: flex;
  justify-content: end;
}

.LandingPage .about-right .img-one {
  max-width: 80%;
}

.LandingPage .about-right .img-one .cta-video {
  position: absolute;
  top: 5%;
  left: 5%;
}

.LandingPage .about-right .img-two {
  position: absolute;
  left: 0;
  bottom: 5%;
  max-width: 250px;
}

/* Final Subtitle */

/* Inicio Section */

.LandingPage .section-title {
  position: relative;
}

.LandingPage .section-title .title {
  letter-spacing: 0.5px;
  font-size: 30px !important;
}

@media (max-width: 768px) {
  .LandingPage .section-title .title {
    font-size: 26px !important;
  }
}

.LandingPage .services-more .item {
  padding: 50px 35px;
  border: 1px solid var(--main-color);
  margin-top: 15px;
  border-radius: 10px;
  position: relative;
}

.LandingPage .services-more .item i {
  display: inline-block;
  font-size: 40px;
  margin-bottom: 30px;
  background: var(--main-color);
  color: white;
  height: 70px;
  width: 70px;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
}

.LandingPage .sub-heading {
  text-transform: uppercase;
  color: var(--main-color);
  font-weight: 600;
  background: var(--main-color);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

/* Final Section */

/* Inicio Card */

.LandingPage .para-desc {
  max-width: 600px;
}

.LandingPage .card-integration {
  background: linear-gradient(
    154deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border-radius: 20px;
  box-shadow: inset 0 1px 1px #ffffff1a;
  height: 180px;
  width: 180px;
  overflow: hidden;
  position: relative;
}

.LandingPage .card-integration p {
  font-size: 17px;
  font-weight: 600;
  color: #363636;
}

.LandingPage .card-integration p.card-title {
  color: #ffffff;
  margin-bottom: 8px;
}

.LandingPage .card-integration p.card-subtitle {
  color: rgb(135, 135, 135);
  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
}

.LandingPage .card-integration p.card-description {
  color: rgb(89, 89, 89);
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 0;
}

/* Final Card */

/* line section */
.LandingPage .brand-style-one-items {
  background-image: url(../assets/images/13.png);
  height: 400px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-color: #10393b;
}

/* Inicio Footer */

.LandingPage a {
  position: relative;
  color: #adb5bd;
}

.LandingPage .bg-footer {
  background-color: #10393b !important;
}

.LandingPage .footer-py-60 {
  padding: 60px 0;
}

.LandingPage .footer-bar {
  border-top: 1px solid #353739;
}
.LandingPage .footer-py-30 {
  padding: 30px 0;
}

.LandingPage .footer-list li {
  margin-bottom: 10px;
}

.LandingPage .footer-list li a {
  transition: all 0.5s ease;
}

.LandingPage .footer-list li a:hover {
  color: #e6e8ea;
}

.LandingPage .footer-list li:last-child {
  margin-bottom: 0;
}

.LandingPage .footer-head {
  letter-spacing: 1px;
  font-weight: 500;
  color: #f8f9fc;
}

/* Final Footer */
</style>
