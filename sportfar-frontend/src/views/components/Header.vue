<template>
    <header class="w-100 d-flex align-items-center justify-content-center" id="header">
        <div class="w-100 position-relative">
            <div class="w-100 h-100 d-flex align-items-center">
                <div class="logo-header">
                    <img src="../../assets/images/logo.png" alt="Logo" width="160" />
                </div>
                <div class="ms-auto links-header d-flex gap-2 align-items-center pe-0">
                    <router-link to="/dashboard" :class="{ active: $route.path.includes('calendario') }">
                        <p :class="{ active: $route.path.includes('dashboard') }" class="mb-0">Dashboard</p>
                    </router-link>
                    <router-link to="/modalities-list">
                        <p :class="{ active: $route.path.includes('modalities') }" class="mb-0">Modalidades</p>
                    </router-link>
                    <router-link to="/class-list">
                        <p :class="{ active: $route.path.includes('class') }" class="mb-0">Turmas</p>
                    </router-link>
                    <router-link to="/teachers">
                        <p :class="{ active: $route.path.includes('teachers') }" class="mb-0">Professores</p>
                    </router-link>
                    <router-link to="/calendario">
                        <p :class="{ active: $route.path.includes('calendario') }" class="mb-0">Calendário</p>
                    </router-link>
                    <div class="position-relative">  
                        <p class="my-profile mb-0" @click="myProfilePopup">Meu perfil</p>
                        <div ref="myProfilePopupRef" class="my-profile-popup d-flex flex-column align-items-center justify-content-center position-absolute disabled">
                            <div class="w-100">
                                <a class="w-100">
                                    <p class="px-0 logout mb-0 text-center">Meu perfil</p>
                                </a>
                            </div class="w-100">
                            <div class="w-100" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                <p class=" px-0 logout mb-0 w-100 text-center">Sair</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line-header"></div>
        </div>
        <div class="modal fade" id="logoutModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Deseja sair do sistema?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn cancel-btn" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn logout-btn" @click="logoutBtn">Sair</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const myProfilePopupRef = ref(null);

function logoutBtn() {
    const token = sessionStorage.getItem('accesstoken');
    if (token) {
        sessionStorage.removeItem('accesstoken');
        window.location.href = "/login";
    }
}

function myProfilePopup() {
    const el = myProfilePopupRef.value;
    if (el.classList.contains('disabled')) {
        el.classList.remove('disabled');
    } else {
        el.classList.add('disabled');
    }
}

function handleClickOutside(event) {
  const popup = myProfilePopupRef.value;
  // Verifica se clicou fora
  if (popup && !popup.contains(event.target) && !event.target.closest('.my-profile')) {
    popup.classList.add('disabled');
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>


<style scoped> 


#header {
    height: 90px;
    padding: 16px 40px;
    background-color: white;
}

@media screen and (max-height: 740px){
    #header {
        height: 70px;
    }
}

#header .logo-header {
    margin-right: 60px;
}

#header .links-header {
    border-radius: 8px;
    padding: 0px 30px;
    height: 50px;
}

#header .links-header a {
    text-decoration: none;
}

#header .links-header p {
    border-radius: 14px;
    padding: 8px 12px;
    transition: all ease-in-out 0.2s;
    color: #929293;
    font-family: "Montserrat", sans-serif;
}

#header .links-header > div p {
    padding-right: 0 !important;
}

#header .links-header p.active {
    background-color: #9292931c;
    color: #191919;
}

#header .links-header a:hover p{
    color: #191919;
}

#header .logout:hover  {
  color: #191919;
  cursor: pointer;
}

#header .my-profile:hover  {
  color: #191919;
  cursor: pointer;
}

#header .my-profile-popup  {
    transition: 0.2s all ease-in;
    left: calc(50% - 70px);
    z-index: 10;
    border-radius: 12px;
    width: 140px;
    background-color: white;
    border:1px solid #c3c3c3a2;
}

#header .my-profile-popup > div {
    border-radius: 12px 12px 0 0;
}

#header .my-profile-popup > div:last-child {
    border-radius: 0 0 12px 12px;
}

#header .my-profile-popup > div:hover {
    background-color: #9292931c;
	cursor: pointer;
}

#header .disabled {
    z-index: -1;
    opacity: 0;
}

#header .line-header {
    width: calc(100% + 164px);
    height: 6px;
    position: absolute;
    bottom: -20px;
    left: -82px;
    background-image: linear-gradient(90deg, #1BE7FF 0%, #6EEB83 25%, #E4FF1A 50%, #FFB800 75%, #FF5714 100%);
}

.modal-content  {
    max-width: 350px;
    margin: 0 auto;
    border: 1px solid #c3c3c3a2;
}

.modal-header {
    border-bottom: 0px solid transparent;
}

.modal-header h5 {
    font-size: 18px;
}

.modal-footer {
    border-top: 0px solid transparent;
}

.btn-close {
    font-size: 10px;
}

.logout-btn {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: #c3c3c3a2;
    text-decoration: none !important;
    padding: 6px 24px;
    font-weight: 600;
}

.logout-btn:hover {
    border-color: #c3c3c3a2;
}

.cancel-btn {
    background-color: rgb(196, 79, 79);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(196, 79, 79);
    text-decoration: none !important;
    padding: 6px 24px;
    font-weight: 600;
    color: white;
}

.cancel-btn:hover {
    background-color: rgb(196, 79, 79);
    border-color: rgb(196, 79, 79);
    color: white;
}
</style>
