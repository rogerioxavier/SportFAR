<template>
  <Header></Header>

  <div class="container-modalidade">
    <section class="container-modalidade-titulo">
      <h1>Gerenciar Modalidades</h1>
    </section>

    <div class="container-sections">
      <section class="container-dados-modalidades">
        <div class="form-dados">
          <label>Nome: <input type="text" v-model="modalitie.name" maxlength="100" /></label>
        </div>
      </section>
    </div>

    <div class="botoes">
      <button class="salvar" @click="save" :disabled="nameIsEmpty">Salvar alterações</button>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalitiesService from '../services/ModalitiesService.js';
import Header from './components/Header.vue';

const route = useRoute();
const router = useRouter();

const modalitie = ref({
  name: '',
  company_id: 1,
});

const nameIsEmpty = computed(() => {
  return !modalitie.value.name || modalitie.value.name.trim() === '';
});

async function getDados(id) {
  const response = await ModalitiesService.getById(id);
  if(response.success){
    modalitie.value = response.data;
  }
}

async function save() {
  const response = await ModalitiesService.create(modalitie.value);
  if (response.success) {
    await router.push({ name: 'ModalitiesList' });
  }
}

onMounted(() => {
  const id = route.params.id ?? null;
  if (id) {
    getDados(id);
  }
});

</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-hamburguer-dropdown li {
  text-decoration: none;
  list-style: none;
}

.container-modalidade {
  width: 100%;
  padding: 1.3rem 0;
  font-family: Arial, sans-serif;
}

.container-modalidade h1 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  margin-top: -20px;
  padding: 1rem 2rem;
  font-weight: 500;
}

.container-modalidade-titulo {
  background-color: #D9D9D9;
  width: 100%;;
}

.container-sections {
  width: 90%;
  margin: 0 auto;
}

.container-dados-modalidades {
  display: flex;
  gap: 60%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}


.form-dados {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1rem 0;
  width: 100%;
}

.form-dados label {
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  color: #333;
  width: 100%;
  max-width: 400px;
  align-items: center;
}

.form-dados input {
  margin-left: 1rem;
  padding: 4px 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 1rem;
  background-color: transparent;
  transition: border-color 0.3s;
  width: 100%;
  max-width: 500px;
}

.botoes {
  display: flex;
  justify-content: space-between;
  margin: 20px;

}

.salvar {
  background: #2e7d32;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  margin: 50px;
}

.salvar:disabled {
  background: gray;
}

@media (max-width: 1024px) {
  .container-dados-modalidades {
    flex-direction: column;
    gap: 20px;
  }

  .form-dados label {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-dados input {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .container-sections {
    width: 95%;
  }

  .container-dados-modalidades {
    flex-direction: column;
    gap: 15px;
  }

  .form-dados label {
    width: 100%;
  }

  .form-dados input {
    width: 100%;
    max-width: none;
  }

  .imagem-upload img {
    width: 80px;
    height: 80px;
    padding: 10px;
  }

  .imagem-upload button {
    width: 120px;
    font-size: 0.75rem;
  }

  .botoes {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .salvar {
    width: 80%;
    margin: 10px 0;
  }

  table {
    font-size: 0.8rem;
  }
}

</style>