<template>
    <div id="modalities">
        <Header>
        </Header>
        <div class="d-flex" style="margin-top: 20px;">
            <div>
                <div class="main-search d-flex align-items-end">
                    <div class=" mb-3 position-relative w-100">
                        <input type="text" class="input-search form-control" placeholder="Digite o nome da turma">
                        <i class="input-icon fa-regular fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="menu-modalities d-flex flex-column">
                    <div class="filters">
                        <div>
                            <p class="title-filter">Status da Turma</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Aberta
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Fechado
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filters search">
                        <div>
                            <p class="title-filter">Buscar Professor</p>
                        </div>
                        <div class=" mb-3 position-relative">
                            <input type="text" class="input-search form-control"
                                placeholder="Digite o nome do professor">
                            <i class="input-icon fa-regular fa-magnifying-glass"></i>
                        </div>
                        <div class="results">
                            <div>
                                <p class="result-filter">Lorem ipsum</p>
                            </div>
                            <div>
                                <p class="result-filter">Lorem ipsum</p>
                            </div>
                            <div>
                                <p class="result-filter">Lorem ipsum</p>
                            </div>
                            <div>
                                <p class="result-filter">Lorem ipsum</p>
                            </div>
                            <div>
                                <p class="result-filter mb-0">Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div class="filters">
                        <div>
                            <p class="title-filter">Horários</p>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div class="form-check w-50">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Manhã
                                </label>
                            </div>
                            <div class="form-check w-50">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Tarde
                                </label>
                            </div>
                            <div class="form-check w-50">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Noite
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-block w-100">
                <div class="sub-header d-flex align-items-end w-100">
                    <div class="opt-modality d-flex align-items-center justify-content-center active">
                        <p class="mb-0">Dashboard</p>
                        <div class="curve-2">
                            <div></div>
                        </div>
                        <div class="curve-1">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div class="submain-block ">
                    <div v-if="1==1" class="card-space d-flex flex-wrap align-items-start justify-content-start">
                        <CardDashboard icon="fa-light fa-screen-users" title="Turmas" valor="2312" colorIcon="#20b3f68a"/>
                        <CardDashboard icon="fa-light fa-chalkboard-user" title="Professor" valor="1231" colorIcon="#54db18a1"/>
                        <CardDashboard icon="fa-light fa-futbol" title="Modalidades" :valor="modalitiesCount" colorIcon="#ffa9039c"/>
                    </div>
                    <div v-else class=" d-flex flex-column align-items-center justify-content-center h-100 w-100">
                        <p class="subtitle mt-0 mb-5">Ainda não foi registrado nenhuma turma</p>
                        <img src="../assets/images/caixa.png" alt="Caixa" width="120">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<script setup>
import { ref, onMounted } from 'vue';
import ModalitiesService from '../services/ModalitiesService.js';
import Header from './components/Header.vue';
import CardDashboard from './components/CardDashboard.vue';

const modalitiesCount = ref(0);

onMounted(async () => {
    const response = await ModalitiesService.getAll();
    if (response.success) {
        modalitiesCount.value = response.data.length;
    }
});
</script>


<style scoped>
body, p, h1, h2, h3, h4, h5, h6, label, span {
    font-family: "Montserrat", sans-serifs;
}

#modalities {
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
}

#modalities .btn-add {
    bottom: 20px;
    right: 40px;
    position: absolute;
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: #c3c3c3a2;
    text-decoration: none !important;
    padding: 12px 24px;
}

#modalities .btn-add p {
    color: #212529;
    font-size: 16px;
    font-weight: 700;
}


#modalities .submain-block {
    height: calc(100% - 93px);
    border-top: 3px solid #d9d9d9;
    border-left: 3px solid #d9d9d9;
    border-top-left-radius: 32px;
}

#modalities .submain-block .subtitle{
    font-size: 17px;
    font-weight: 600;
    color: #212529;
}

#modalities .sub-header {
    margin-top: 3px;
    height: 90px;
    padding-left: 100px;
}

#modalities .sub-header .opt-modality.active {
    position: relative;
    bottom: -3px;
    background-color: white;
    border-radius: 32px 32px 0 0;
    border-top: 3px solid #d9d9d9;
    border-left: 3px solid #d9d9d9;
    border-right: 3px solid #d9d9d9;
}

#modalities .sub-header .opt-modality {
    position: relative;
    width: 140px;
    height: 56px;
}

#modalities .sub-header .opt-modality p {
    height: fit-content;
    font-weight: 700;
}
#modalities .sub-header .curve-2 {
    position: absolute;
    background-color: white;
    right: -32px;
    top: 25px;
}

#modalities .sub-header .curve-2 div {
    width: 32px;
    height: 28px;
    border: 3px solid #d9d9d9;
    border-radius: 0 0 0 32px;
    background-color: #ffffff;
    border-right: 0;
    border-top: 0px solid;
}

#modalities .sub-header .curve-1 {
    position: absolute;
    background-color: white;
    left: -32px;
    top: 25px;
}

#modalities .sub-header .curve-1 div {
    width: 32px;
    height: 28px;
    border: 3px solid #d9d9d9;
    border-radius: 0 0 32px 0;
    background-color: #ffffff;
    border-left: 0;
    border-top: 0px solid;
}

#modalities .menu-modalities{
    transition: all ease-in-out 0.4s;
    width: 305px;
    height: calc(100vh - 200px);
    padding: 10px;
}

#modalities .main-search {
    padding: 10px;
    height: 90px;
}

#modalities .main-search .input-search {
    font-size: 16px;
    height: 36px;
    padding: 12px 30px;
}

#modalities .main-search .input-icon {
    font-size: 14px;
    top: calc(50% - 6.5px);
    left: 10px;
}


#modalities .menu-modalities .filters {
    border-bottom: 3px solid #d9d9d9;
    padding: 24px 32px;
}

#modalities .menu-modalities .filters:last-child {
    border-bottom: 0px solid transparent;
}

#modalities .menu-modalities .filters.search {
    height: calc(100% - 257px);
    overflow: hidden;
}

#modalities .menu-modalities .filters.search .results {
    border: 1px solid #d9d9d9;
    border-radius: 0.75rem;
    padding: 4px 12px;
    max-height: calc(100% - 87px);
    overflow: auto;
}

#modalities .input-search {
    color: #d9d9d9;
    padding: 4px 12px 4px 24px;
    border-radius: 0.75rem;
}

#modalities input[type=text] {
    color: #212529;
    font-size: 14px;
    border-color: #d9d9d9;
}

#modalities .input-icon {
    color: #d9d9d9;
    position: absolute;
    top: calc(50% - 5px);
    left: 8px;
    font-size: 12px;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #ffffff00;
}

::-webkit-scrollbar-thumb {
    background: #d9d9d9;
}

::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
}

.card-space {
    margin: 40px 40px 0 40px;
    gap: 16px;
}

@media screen and (max-width:665px) {
    .card-box {
        width: calc(100% - 12px);
        height: 180px;
    }
}

@media screen and (min-width:665px){
    .card-box {
        width: calc(50% - 12px);
        height: 180px;
    }
}

@media screen and (min-width:878px){
    .card-box {
        width: calc(33% - 12px);
        height: 180px;
    }
}

@media screen and (min-width:1440px) {
    .card-box {
        width: calc(25% - 12px);
        height: 180px;
    }
}



</style>
