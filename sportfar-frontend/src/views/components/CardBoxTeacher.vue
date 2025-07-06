<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  email: String,
  phone: String,
  photo: String,
  cor: String, 
})

const modalidadeCor = computed(() => {
  return props.cor || '#607D8B'
})

defineEmits(['deletar'])

</script>

<template>
  <div class="card" :style="{ borderColor: modalidadeCor }">
    <div class="card-header" :style="{ backgroundColor: modalidadeCor }">
      <img v-if="photo" :src="photo" alt="Foto do professor" class="professor-img" />
      <div class="nome-e-botao">
        <h2 class="professor-nome" :title="name">{{ name }}</h2>
      </div>
    </div>

    <div class="card-body">
      <p><strong>Telefone:</strong> {{ phone }}</p>
      <p><strong>Email:</strong> <a :href="'mailto:' + email">{{ email }}</a></p>
      <button class="botao-deletar" @click="$emit('deletar', email)" title="Deletar professor">
        Desativar
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
    width: 240px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid;
    transition: border-color 0.3s ease;
    font-family: 'Segoe UI', sans-serif;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  color: white;
  user-select: none;
  gap: 6px;
  transition: background-color 0.3s ease;
}

.professor-img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    margin-bottom: 0.5rem;
}

.nome-e-botao {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.professor-nome {
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}


.botao-deletar {
  background: none;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s;
}

.botao-deletar:hover {
  transform: scale(1.2);
  color: #ff4d4f;
}
</style>