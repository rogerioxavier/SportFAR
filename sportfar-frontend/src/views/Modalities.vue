<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl">Lista de Modalidades</h1>
      <button
          @click="edit()"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        ➕ Novo
      </button>
    </div>

    <table class="w-full border border-gray-300">
      <thead class="bg-gray-100">
      <tr>
        <th class="border px-4 py-2 text-left">ID</th>
        <th class="border px-4 py-2 text-left">Nome</th>
        <th class="border px-4 py-2 text-left">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="modalidade in modalidades" :key="modalidade.id" class="hover:bg-gray-50">
        <td class="border px-4 py-2">{{ modalidade.id }}</td>
        <td class="border px-4 py-2">{{ modalidade.name }}</td>
        <td class="border px-4 py-2 space-x-2">
          <button
              @click="edit(modalidade.id)"
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Editar
          </button>
          <button
              @click="remove(modalidade.id)" id="button"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Excluir
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

import { useModalitiesList} from "../scripts/modalities.js";
const { modalidades, edit, remove } = useModalitiesList();

</script>

<style>
  table {
    margin: 0 auto;
    width: 100%
  }
  tr{
    text-align: center;
  }
  #button{
    margin:10px;
  }



</style>
