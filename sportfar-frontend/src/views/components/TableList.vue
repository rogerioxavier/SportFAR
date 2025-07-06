<template>
    <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Deseja deletar o registro?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn cancel-btn" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn logout-btn" @click.prevent="confirmDelete" ref="deleteRegister" data-bs-dismiss="modal">Deletar</button>
                </div>
            </div>
        </div>
    </div>
    <table class="overflow-hidden">
		<thead>
			<tr class="bg-2">
				<th v-for="header in tableHeader" :key="header">
                    <h5 class="mb-0">{{ header }}</h5>
                </th>
				<th class="btn-actions-row">
                    <h5 class="mb-0" style="font-size: 16px;">Botões da ação</h5>
                </th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, index) in tableValues" :key="index" class="flex-container flex-nowrap td-reviews-page"  :class="{ 'bg-2': (index + 1) % 2 === 0 }">
                <td v-for="(header, i) in tableHeader" :key="i":class="['title-categ-list','flex-container',i === 0 ? 'flex-item flex-nowrap flex-align-left first-td' : 'td-center flex-align-left']">
                    <div>
                        <h5 class="mb-0" v-if="i < 2">{{ row[header] }}</h5>
                        <p v-else>{{ row[header] }}</p>
                    </div>
                </td>
                <td class="btn-actions-row">
                    <div class="d-flex w-100 h-100 align-items-center justify-content-center">
                        <a @click.prevent="onEdit(row.id)" class="btn-action d-flex align-items-center justify-content-center">
                            <i class="fa-light fa-pencil-alt"></i>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#deleteModal" ref="deleteReg" @click="deleteRegPopup" :data-id="row.id" class="btn-action d-flex align-items-center justify-content-center">
                            <i class="fa-light fa-trash-alt"></i>
                        </a>
                    </div>
                </td>
			</tr>
		</tbody>
    </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const deleteId = ref<string | number | null>(null);

const props = defineProps<{
  tableHeader: string[];
  tableValues: Array<Record<string, string | number>>;
  onEdit: Function,
  onDelete: Function
}>();

function deleteRegPopup(event: Event) {
  const target = event.currentTarget as HTMLElement;
  const id = target.getAttribute('data-id');
  deleteId.value = id;
}

function confirmDelete() {
  if (deleteId.value) {
    props.onDelete(deleteId.value);
    deleteId.value = null; 
  }
}
</script>

<style scoped>

/* tabulacao */
table {
    border-radius: 10px;
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    border: 3px solid #d9d9d9;
}

table thead {
    height: 70px;
    border-bottom: #ece9e9 1px solid;
}

table thead th {
    min-height: 70px;
    flex-grow: 1;
    padding: 15px;
    height: 100%;
    border-right: #ece9e9 3px solid;
}

table tr {
    height: 60px;
    border-bottom: #ece9e9 3px solid;
}

table tr.bg-2 {
    background-color: #eaeaea80;
}

table td {
    flex-grow: 1;
    padding: 15px;
    height: 100%;
    border-right: #ece9e9 3px solid;
}

table tr h5 {
    color: #414141;
    font-size: 19px;
    font-weight: 600;
}

table td:last-child, table thead th:last-child {
    border-right: #ece9e9 0px solid;
}

table .btn-actions-row {
    width: 149px;
    min-width: 149px;
}

table .btn-actions-row .form-check-input {
    height: 30px;
    width: 60px;
}

table td .btn-action {
    transition: all ease-in-out 0.2s;
    text-decoration: none !important;
    text-align: center;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid rgb(219 219 219);
    cursor: pointer;
}

table td .btn-action:hover {
    background-color: #eaeaea80;
}

table td .btn-action i {
    color: #414141;
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