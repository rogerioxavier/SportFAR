<template>
  <div class="pagina">
    <Header></Header>

    <div class="container-principal">
      <aside class="filtros">
        <h2>Filtros</h2>

        <label for="nome">Nome:</label>
        <input id="nome" type="text" v-model="buscaNome" placeholder="Filtrar por nome" />

        <label for="email">Email:</label>
        <input id="email" type="text" v-model="buscaEmail" placeholder="Filtrar por email" />

        <label for="telefone">Telefone:</label>
        <input id="telefone" type="text" v-model="buscaTelefone" placeholder="Filtrar por telefone" />
      </aside>

      <section class="conteudo-professores">
        <div class="topo-professores">
          <h1 class="titulo">LISTA PROFESSORES</h1>
          <button @click="abrirModal = true">Novo Professor</button>
        </div>

        <div class="lista-cards">
          <CardBoxTeacher
            v-for="prof in professoresFiltrados"
            :key="prof.email"
            :name="prof.name"
            :email="prof.email"
            :phone="prof.phone"
            :photo="prof.photo"
            :cor="prof.cor"
            @deletar="desativarProfessor"
          />
        </div>

      </section>
    </div>

  <div v-if="abrirModal" class="modal-overlay">
    <div class="modal-content">
      <!-- Botão de fechar -->
      <button class="fechar-modal" @click="abrirModal = false">×</button>

      <h2>Cadastrar Professor</h2>

      <div class="modal-grid">
        <!-- Criar novo usuário -->
        <section class="modal-section">
          <h3>Criar novo usuário</h3>
          <input v-model="novoUsuario.full_name" placeholder="Nome completo" />
          <input v-model="novoUsuario.cpf" placeholder="CPF" />
          <input v-model="novoUsuario.birth_date" type="date" placeholder="Data de nascimento" />
          <input v-model="novoUsuario.email" placeholder="Email" />
          <input v-model="novoUsuario.address" placeholder="Endereço" />
          <input v-model="novoUsuario.city" placeholder="Cidade" />
          <input v-model="novoUsuario.cep" placeholder="CEP" />
          <input v-model="novoUsuario.phone" placeholder="Telefone (opcional)" />
          <input v-model="novoUsuario.password" placeholder="Senha" />

          <button @click="criarNovoUsuario">Criar</button>
        </section>

        <!-- Relacionar com usuário existente -->
        <section class="modal-section">
          <h3>Relacionar usuário existente</h3>
          <input v-model="filtroEmail" placeholder="Filtrar por email" />

          <ul class="usuarios-lista">
            <li v-for="user in usuariosFiltrados" :key="user.email" class="usuario-item">
              <span>{{ user.nome }} ({{ user.email }})</span>
              <button @click="relacionarUsuarioExistente(user)">Relacionar</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from './components/Header.vue'
import CardBoxTeacher from './components/CardBoxTeacher.vue'
// import { getProfessores } from './services/professor.js'
import { getUsers } from '../services/userType.ts'

const professores = ref([])

const buscaNome = ref('')
const buscaEmail = ref('')
const buscaTelefone = ref('')

const coresDisponiveis = [
  '#0D6EFD', // futsal
  '#FF6607', // basquete
  '#2F7345', // handbal
  '#FFC107', // vôlei
  '#607D8B'  // default
]

function corAleatoria() {
  const index = Math.floor(Math.random() * coresDisponiveis.length)
  return coresDisponiveis[index]
}

// Dados mock para teste
const professoresMock = [
  {
    fullName: "Lucas Silva",
    email: "lucas.silva@example.com",
    phone: "(54) 99179-1247",
    photo: "foto1.jpg",
  },
  {
    fullName: "Ana Pereira",
    email: "ana.pereira@example.com",
    phone: "(11) 12345-6789",
    photo: "foto2.jpg",
  },
  {
    fullName: "Carlos Souza",
    email: "carlos.souza@example.com",
    phone: "(21) 98765-4321",
    photo: "foto3.jpg",
  }
]

// Função para usar a api, remover o mock
async function carregarProfessores() {
  /*
  try {
    const dados = await getProfessores()
    professores.value = dados.map(p => ({
      name: p.fullName,
      email: p.email,
      phone: p.phone,
      photo: p.photo,
      cor: corAleatoria()
    }))
  } catch (error) {
    console.error('Erro ao carregar professores:', error)
  }
  */

  // Usando dados mock para teste:
  professores.value = professoresMock.map(p => ({
    name: p.fullName,
    email: p.email,
    phone: p.phone,
    photo: p.photo,
    cor: corAleatoria()
  }))
}

onMounted(() => {
  carregarProfessores()
  loadUsers()
})

function limparTexto(texto) {
  return texto
    .toLowerCase()
    .replace(/\s/g, '')       // remove espaços
    .replace(/[\(\)\-\.\@]/g, '') // remove parênteses, traços, pontos e arrobas
}

// Filtra os professores
const professoresFiltrados = computed(() => {
  return professores.value.filter(prof => {
    const nomeMatch = prof.name.toLowerCase().startsWith(buscaNome.value.trim().toLowerCase())
    const emailMatch = prof.email.toLowerCase().startsWith(buscaEmail.value.trim().toLowerCase())

    const telefoneLimpo = limparTexto(prof.phone)
    const buscaTelefoneLimpo = limparTexto(buscaTelefone.value)

    const telefoneMatch = telefoneLimpo.startsWith(buscaTelefoneLimpo)

    return nomeMatch && emailMatch && telefoneMatch
  })
})


// SEÇÃO PARA DESATIVAR UM PROFESSOR

function desativarProfessor(email) {
  // 1. Encontrar o professor a ser desativado
  const professor = professores.value.find(p => p.email === email)
  if (!professor) return

  // 2. Chamar API se necessário
  console.log('Desativando professor:', professor)
  // await apiDesativarProfessor(email)

  // 3. Remover da lista de professores
  professores.value = professores.value.filter(p => p.email !== email)

  // 4. Adicionar na lista de usuários
  usuariosExistentes.value.push({
    nome: professor.name,
    email: professor.email,
    telefone: professor.phone,
    photo: professor.photo || '..assets/images/user_icon.png'
  })
}



// SEÇÃO PARA CRIAR UM PROFESSOR NOVO - DOIS MODELOS

const filtroEmail = ref('')
const abrirModal = ref(false)

const novoUsuario = ref({
  full_name: '',
  cpf: '',
  birth_date: '',
  email: '',
  password: '',
  address: '',
  city: '',
  cep: '',
  phone: '',
})

// SUBSTITUIR POR API
const usuariosExistentes = ref([
  { nome: 'João Lima', email: 'joao@example.com' },
  { nome: 'Maria Costa', email: 'maria@example.com' }
])

async function loadUsers() {
  
  try {
    const dados = await getUsers()
    usuariosExistentes.value = dados.map(p => ({
      nome: p.fullName,
      email: p.email,
      photo: p.photo || '/src/assets/images/user_icon.png'
    }))
  } catch (error) {
    console.error('Erro ao carregar professores:', error)
  }
}

const usuariosFiltrados = computed(() => {
  return usuariosExistentes.value.filter(user =>
    user.email.toLowerCase().includes(filtroEmail.value.toLowerCase())
  )
})


// MODELO 1: CRIANDO USUARIO DO ZERO
function criarNovoUsuario() {

  const camposObrigatorios = [
    'full_name', 'cpf', 'birth_date', 'email',
    'address', 'city', 'cep', 'password'
  ]

  const labels = {
    full_name: 'Nome completo',
    cpf: 'CPF',
    birth_date: 'Data de nascimento',
    email: 'Email',
    password: 'Senha',
    address: 'Endereço',
    city: 'Cidade',
    cep: 'CEP'
  }

  const faltando = camposObrigatorios.filter(
    campo => !novoUsuario.value[campo]?.toString().trim()
  )

  if (faltando.length > 0) {
    const faltandoLabel = faltando.map(campo => labels[campo] || campo)
    alert(`Preencha todos os campos obrigatórios:\n- ${faltandoLabel.join('\n- ')}`)
    return
  }

  try {
    // Simulação de chamada à API — substitua por sua função real
    // await apiCriarUsuario(novoUsuario.value)
    console.log('Usuário criado:', novoUsuario.value)

    // Adiciona à lista de professores
    professores.value.push({
      name: novoUsuario.value.full_name,
      email: novoUsuario.value.email,
      phone: novoUsuario.value.phone || '',
      photo: novoUsuario.value.photo || 'foto1.jpg', // substitua por real se aplicável
      cor: corAleatoria()
    })

    // Remove da lista de usuários (caso esteja lá por algum motivo)
    usuariosExistentes.value = usuariosExistentes.value.filter(
      u => u.email !== novoUsuario.value.email
    )

    // Limpa o formulário
    Object.keys(novoUsuario.value).forEach(key => {
      novoUsuario.value[key] = ''
    })

    // Fecha o modal
    abrirModal.value = false
  } catch (error) {
    console.error('Erro ao criar usuário:', error)
    alert('Erro ao criar o usuário. Tente novamente.')
  }
}

// MODELO 2: RELACIONAR UM USUÁRIO ANTIGO
function relacionarUsuarioExistente(usuario) {
  // Chamar API aqui, se necessário
  console.log('Relacionando usuário:', usuario)
  // await apiRelacionarUsuario(usuario)

  // 1. Remove o usuário da lista de disponíveis

  usuariosExistentes.value = usuariosExistentes.value.filter(
    u => u.email !== usuario.email
  )

  // 2. Adiciona na lista de professores
  professores.value.push({
    name: usuario.nome,
    email: usuario.email,
    phone: usuario.telefone || '',
    photo: usuario.photo || 'foto1.jpg', // Se tiver
    cor: corAleatoria()
  })

  // 3. Fecha o modal
  abrirModal.value = false
}

</script>

<style scoped>
.pagina {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container-principal {
  flex: 1;
  display: flex;
  padding: 20px;
  gap: 20px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  flex-wrap: nowrap;
}

.filtros {
  width: 20%;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filtros label {
  font-weight: 600;
  margin-top: 10px;
}

.filtros input {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.conteudo-professores {
  width: 75%;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.titulo {
  font-size: 24px;
  margin-bottom: 16px;
}

.lista-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;
}

@media (max-width: 1024px) {
  .container-principal {
    flex-wrap: wrap;
  }

  .filtros,
  .conteudo-professores {
    width: 100%;
  }

  .conteudo-professores {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .titulo {
    font-size: 20px;
  }

  .filtros label,
  .filtros input {
    font-size: 13px;
  }

  .lista-cards {
    justify-content: center;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 95%;
  max-width: 900px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.fechar-modal {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.modal-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.modal-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.usuarios-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 50vh;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
}

.usuario-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.usuario-item:last-child {
  border-bottom: none;
}


.topo-professores {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.topo-professores .titulo {
  margin: 0;
}

.topo-professores button {
  padding: 8px 16px;
  border: none;
  background-color: #0d6efd;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.topo-professores button:hover {
  background-color: #0b5ed7;
}

</style>
