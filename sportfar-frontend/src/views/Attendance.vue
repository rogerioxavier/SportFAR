<template>
  <Header></Header>

  <div class="container mt-5 mb-4">
    <CardTitlePage
      icon='<i class="fa-light fa-user-tie"></i>'
      title="Categoria Sub-15"
      subtitle="30/05/2025 às 13h"
      professor="Mauricio"
      color="#FF6607"
      :img="findImageInAssets('basquete-completo.png')"
    />

    <div class="content-wrapper">
      <div class="students">
        <div class="student-card py-3 px-4">
          <div class="d-flex align-items-center">
            <div class="icon"><i class="fa-solid fa-user"></i></div>
            <div class="info">
              <h5 class="mb-0">Aluno</h5>
              <p class="mb-0">
                Data de nascimento:
                <b>30/05/2025</b>
              </p>
            </div>
          </div>
          <div class="attendance-check">
            <input type="checkbox" checked />
          </div>
        </div>
        <div class="student-card py-3 px-4">
          <div class="d-flex align-items-center">
            <div class="icon"><i class="fa-solid fa-user"></i></div>
            <div class="info">
              <h5 class="mb-0">Aluno</h5>
              <p class="mb-0">
                Data de nascimento:
                <b>30/05/2025</b>
              </p>
            </div>
          </div>
          <div class="attendance-check">
            <input type="checkbox" checked />
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="save" title="Enviar presenças">
        Enviar presenças
      </button>
    </div>
  </div>
</template>

<script setup>
import CardTitlePage from "./components/CardTitlePage.vue";
import Header from "./components/Header.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import classService from "../services/classService.js";
import { findImageInAssets } from "../utils/fileUtils";

const route = useRoute();
const attendanceData = ref([]); // Aqui estão os dados que devem ser usados para dar update da UI;

async function getDados(id) {
  const response = await classService.getAbsencesByClassRoomId(id); //TODO: Ajustar a rota para o backend, está retornando dados errados;
  if (response.success) {
    if (Array.isArray(response.data)) {
      attendanceData.value = response.data;
    } else if (response.data && typeof response.data === "object") {
      console.log(response.data);
      attendanceData.value.push(response.data);
    }
    console.log(response.data);
  }
}

onMounted(() => {
  const id = route.params.id ?? null;
  if (id) {
    getDados(id);
  }
});

function save() {
  //Aqui seria o local da requisição em que enviaremos cada um dos faltantes!
  //Para isso o AbsenceService!!!!
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.text-danger {
  color: red;
  margin-top: 0.25rem;
}

.content-wrapper {
  border-left: 5px solid #d9d9d9;
  border-right: 5px solid #d9d9d9;
  border-bottom: 5px solid #d9d9d9;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 40px;
  margin-top: -15px;
}
.students {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}
.student-card {
  border: 2px solid #ff6607;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.icon {
  border: 2px solid #ff6607;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  font-size: 30px;
  margin-right: 20px;
}
.attendance-check {
  border-left: 2px solid #d9d9d9;
  height: 100%;
  display: flex;
  align-items: center;
}
.attendance-check input {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 40px;
}
button {
  display: block;
  background-color: #2f7345;
  border: none;
  justify-self: flex-end;
  padding: 8px 24px;
}
</style>
