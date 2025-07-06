<template>
    <div class="sub-header d-flex align-items-end w-100">
        <div class="opt-title w-100 d-flex align-items-center justify-content-between">
            <p class="mb-0">Formulário para criação de turmas</p>
            <a :href="backUrl" class="back-link rounded"><i class="fa-solid fa-arrow-left"></i>Voltar</a>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    const props = defineProps<{
        backUrl: string
    }>()
</script>

<style scoped>
.sub-header a{
    background-color: white;
    border: 1px solid #c3c3c3a2;
    text-decoration: none !important;
    padding: 6px 16px;
    font-size: 16px;
    color: #212529;
    font-weight: 600;
}

.sub-header a i{
    margin-right: 6px;
    font-size: 12px;
}

.sub-header {
    margin-top: 3px;
    height: 90px;
    padding:0 82px;
}

.sub-header .opt-title {
    position: relative;
    height: 56px;
}

.sub-header .opt-title p {
    height: fit-content;
    font-weight: 700;
}

@media screen and (max-height: 740px) {
    .sub-header {
        margin-top: 3px;
        height: 70px;
        padding-left: 82px;
    }
}
</style>