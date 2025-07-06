<script setup>
import Header from './components/Header.vue'
import SubHeader from './components/SubHeader.vue'
import CardModality from './components/CardModality.vue'
</script>


<template>
    <div id="class">
        <Header>
        </Header>
        <div class="d-flex h-100" style="margin-top: 20px;">
            <button class="btn-add rounded">
                <p class="mb-0">Criar Turma</p>
            </button>
            <div class="main-block h-100 w-100">
                <SubHeader backUrl="class-list"></SubHeader>
                <div class="d-flex submain-block  w-100 p-5 overflow-auto">
                    <div class="col-6 pe-3 d-flex flex-column justify-content-start form">
                        <div class=" d-flex justify-content-center">
                            <label for="modality" class="col-sm-2 col-form-label">Modalidade</label>
                            <select name="modality" class="form-select" >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="date" class="col-sm-2 col-form-label">Data de Realização</label>
                            <div class="double-input d-flex">
                                <input type="date" class="form-control" name="start_date">
                                <input type="date" class="form-control" name="final_date"> 
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="workload" class="col-sm-2 col-form-label">Carga Horária</label>
                            <input type="text" class="form-control" name="workload" v-model="workload" @input="filterNumbers('workload')" placeholder="4">
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="teacher" class="col-sm-2 col-form-label">Professor</label>
                            <input type="text" class="form-control" name="teacher" placeholder="Selecione o(s) professor(es)">
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="customRange1" class="form-label">Quant. Vagas</label>
                            <input v-model="vacant"  @input="printVacant" type="range" step="5" min="0" max="100" value="10" class="form-range" name="vacant">
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="teacher" class="col-sm-2 col-form-label">Status da Turma</label>
                            <div class="d-flex justify-content-start gap-2 form-block-input">
                                <button type="button" class="btn btn-primary">Aberta</button>
                                <button type="button" class="btn btn-secondary">Fechada</button>
                                <button type="button" class="btn btn-secondary">Inativa</button>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Dia da Semana</label>
                            <select class="form-select" name="weekday">
                                <option selected>Selecione o dia da semana</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Horário da Aula</label>
                            <div class="double-input d-flex">
                                <input type="time" class="form-control" name="start_time">
                                <input type="time" class="form-control" name="end_time"> 
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Faixa Etária</label>
                            <div class="double-input d-flex">
                                <input type="text" class="form-control" name="age_group_1" v-model="age_group_1" @input="filterNumbers('age_group_1')">
                                <input type="text" class="form-control" name="age_group_2" v-model="age_group_2" @input="filterNumbers('age_group_2')">  
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex flex-column align-items-center justify-content-start form">
                        <div class=" d-flex justify-content-center">
                            <label for="date" class="col-sm-2 col-form-label">Prazo de Inscrições</label>
                            <div class="d-flex flex-column" style="width: 240px;">
                                <div class="double-input d-flex" style="margin-bottom: 10px;">
                                    <input type="time" class="form-control" name="start_date">
                                    <input type="date" class="form-control" name="final_date"> 
                                </div>
                                <div class="double-input d-flex">
                                    <input type="time" class="form-control" name="start_date">
                                    <input type="date" class="form-control" name="final_date"> 
                                </div>
                            </div>
                        </div>
                        <div class="preview-card p-4 mt-5">
                            <p class="title-preview">Pré visualização</p>
                            <CardModality icon='<i class="fa-light fa-user-tie"></i>' title="Categoria Sub-15" day="Sábados" hour="Das 10:00 ás 12:30" professor="Mauricio" color="#FFC107" img="volei.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            workload: '',
            age_group_1: '',
            age_group_2: ''
        };
    },
    methods: {
        filterNumbers(field) {
            this[field] = this[field].replace(/\D/g, '');
        }
    }
};
</script>

<style scoped>
body, p, h1, h2, h3, h4, h5, h6, label, span {
    font-family: "Montserrat", sans-serifs;
}

/* espacamentos */
.p-6 {
    padding: 4rem;
}

.p-7 {
    padding: 5rem;
}

#class {
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
}

#class .btn-add {
    bottom: 20px;
    right: 82px;
    position: absolute;
    background-color: white;
    border: 1px solid #c3c3c3a2;
    padding: 12px 24px;
}

#class .btn-add p {
    font-size: 16px;
    font-weight: 700;
}

#class .submain-block {
    height: calc(100% - 203px);
    border-top: 3px solid #d9d9d9;
    border-left: 3px solid #d9d9d9;
}
#class .submain-block .form {
    padding-top: 30px;
    padding-bottom: 30px;
    border-right: 3px solid #d9d9d9;
}

#class .submain-block .form:last-child {
    border-right: 0px solid transparent;
}

#class .submain-block .form > div {
    margin-bottom: 10px;
}

#class .submain-block .form label {
    min-width: 170px;
}

#class .submain-block .form select, #class .submain-block .form .form-block-input, #class .submain-block .form input, #class .submain-block .form .double-input{
    width: 100%;
    max-width: 360px;
    margin: 0;
}

#class .submain-block .form button {
    width: calc(100% / 3);
}

@media screen and (max-height: 740px){
    #class .submain-block {
        height: calc(100% - 163px);
    }

    #class .submain-block .form {
        padding-top: 0;
        padding-bottom: 0;
    }

    #class .submain-block .form label {
        min-width: 132px;
        font-size: 12px;
    }

    #class .submain-block .form select, #class .submain-block .form .form-block-input, #class .submain-block .form input, #class .submain-block .form .double-input{
        height: 30px;
        max-width: 240px;
        font-size: 12px;
    }

    #class .submain-block .form button {
        height: 30px;
        line-height: 0 !important;
        font-size: 12px;
    }
}

#class .submain-block .form .double-input select, #class .submain-block .form .double-input input{
    width: 50%;
    max-width: 180px;
    margin: 0;
}

#class .submain-block .form .double-input input:last-child{
    border-left: 0px solid transparent;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
}

#class .submain-block .form .double-input input:first-child{
    border-top-right-radius:0;
    border-bottom-right-radius:0;
}

#class .submain-block .form .tickmarks-5 span{
    width: 0px;
    position: absolute;
    font-size: 12px;
    line-height: 70%;
}

#class .submain-block .form .tickmarks-5 span:last-child{
    left: 5.5px;
}

#class .submain-block .form .tickmarks-5 span::before {
  content: '';
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: white;
  border: 1px solid #0d6efd;
  border-radius: 50%;
  top: -23px;
  left: calc(50% - 5.5px);
}

#class .menu-modalities{
    transition: all ease-in-out 0.4s;
    width: 305px;
    height: calc(100vh - 200px);
    padding: 10px;
}

#class .main-search {
    padding: 10px;
    height: 90px;
}

#class .main-search .input-search {
    font-size: 16px;
    height: 36px;
    padding: 12px 30px;
}

#class .main-search .input-icon {
    font-size: 14px;
    top: calc(50% - 6.5px);
    left: 10px;
}


#class .menu-modalities .filters {
    border-bottom: 3px solid #d9d9d9;
    padding: 24px 32px;
}

#class .menu-modalities .filters:last-child {
    border-bottom: 0px solid transparent;
}

#class .menu-modalities .filters.search {
    height: calc(100% - 257px);
    overflow: hidden;
}

#class .menu-modalities .filters.search .results {
    border: 1px solid #d9d9d9;
    border-radius: 0.75rem;
    padding: 4px 12px;
    max-height: calc(100% - 87px);
    overflow: auto;
}

#class .input-search {
    color: #d9d9d9;
    padding: 4px 12px 4px 24px;
    border-radius: 0.75rem;
}

#class input[type=text] {
    color: #212529;
    font-size: 14px;
    border-color: #d9d9d9;
}

#class .input-icon {
    color: #d9d9d9;
    position: absolute;
    top: calc(50% - 5px);
    left: 8px;
    font-size: 12px;
}

#class .preview-card {
    width: 376px;
    border: 3px solid #d9d9d9;
    border-radius: 30px;
}

#class .preview-card .title-preview{
    font-weight: 600;
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

</style>
