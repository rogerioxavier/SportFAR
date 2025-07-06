<template>
    <div class="main-block login vw-100 vh-100 d-flex align-items-center justify-content-center">
        <div class="bg-gradiant">
            <div class="login-box">
                <div class="p-4 login-img">
                    <img src="../assets/images/logo-login.png" alt="Logo">
                </div>
                <div class="p-4">
                    <div class="mb-2">
                        <input type="email" class="form-control" id="email" ref="email" placeholder="E-mail">
                    </div>
                    <div class="position-relative">
                        <i :class="['password-icon', 'fa-light', isPasswordVisible ? 'fa-eye-slash' : 'fa-eye']"
                            @click="togglePassword"></i>
                        <input :type="isPasswordVisible ? 'text' : 'password'" class="form-control" id="password"
                            ref="password" placeholder="Senha">
                    </div>
                    <div class="d-flex align-items-center justify-content-end">
                        <a class="p-link info-subtitle mb-0 mt-2 l-spacing-2" href="forgot-pass">Esqueci minha senha.</a>
                    </div>
                    <button type="button"
                        class="mt-4 position-relative d-flex align-items-center justify-content-center btn main-btn w-100"
                        @click="loginBtn">
                        <p class="mb-0">Entrar</p>
                    </button>
                    <div class="d-flex align-items-center justify-content-end mt-2">
                        <p class="p-link subtitle mb-0 l-spacing-2">Criar conta?</p> <a class="mb-0 " href="register">
                            Registre-se </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

/* ret-principal */


<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)

function togglePassword() {
    isPasswordVisible.value = !isPasswordVisible.value
}

import { instanceAuth } from '../../ConfigAxios.js'

const email = ref(null)
const password = ref(null)

function loginBtn() {
    const emailInfo = email.value.value
    const passInfo = password.value.value

    instanceAuth({
        method: "POST",
        url: "/auth/login",
        data: {
            email: emailInfo,
            password: passInfo
        }
    }).then(response => {

        if (response != null && response.data.accessToken) {
            localStorage.setItem('accesstoken', response.data.accessToken);

            window.location.href = "/dashboard";
        }

    }).catch(error => {
        console.error(error)
    })
}

</script>

<style scoped>
/* espacamento global do site */
.px-10 {
    padding-right: 10px;
    padding-left: 10px;
}

.px-8 {
    padding-right: 8px;
    padding-left: 8px;
}

/* btn global do site */
.main-btn {
    overflow: hidden;
    background-color: #ED7A33;
    border-radius: 16px;
}

/* ED7A33 */

.main-btn:hover {
    width: 140%;
    background-color: #FF6607 !important;
}

.main-btn p {
    z-index: 10;
    color: white;
    font-weight: 700 !important;
}

/* Inicio CSS-Global */
.pt-100 {
    padding-top: 100px;
}

.py-100 {
    padding: 100px 0;
}

.py-200 {
    padding: 200px 0;
}

.pt-150 {
    padding-top: 150px !important;
}

.mt-100 {
    margin-top: 100px;
}

.mb-200 {
    margin-bottom: 200px;
}

.mb-100 {
    margin-bottom: 100px;
}

.mb-60 {
    margin-bottom: 60px;
}

.shadow {
    box-shadow: 0 0 3px rgba(30, 41, 59, 0.15) !important;
}

.shadow-lg {
    box-shadow: 0 10px 25px rgba(30, 41, 59, 0.15) !important;
}

.shadow-md {
    box-shadow: 0 5px 13px rgba(30, 41, 59, 0.2) !important;
}

/* CSS Global */
body {
    background-image: white;
    overflow-x: hidden;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
body {
    font-family: "Montserrat", sans-serif;
}

.l-spacing-2 {
    letter-spacing: 0.28px;
}

.line {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
}

a {
    text-decoration: none;
    color: #312f2f;
    font-size: 12px;
    font-weight: 800;
    margin-left: 4px;
    transition: 0.2s ease-in-out all;
}

a:hover {
    color:  #FF6607;
}

/* Bloco Principal */

.bg-gradiant {
    padding: 2px;
    border-radius: 42px;
    background-image: linear-gradient(180deg, #1BE7FF, #6EEB83, #E4FF1A, #F1DB0D, #FF5714);
}

.main-block {
    background-image: white;
}

.main-block.login {
    overflow-x: hidden;
    min-height: 532px;
}

/* Login-box */
.login-box {
    background-color: white;
    width: 350px;
    height: fit-content;
    border-radius: 40px;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.login-img {
    text-align: center;
}

.login-box .login-box p {
    font-weight: 400;
    font-size: 14px;
}

.login-box h4 {
    font-weight: 600;
}

.login-box input,
.login-box button {
    height: 50px;
}

.login-box input {
    color: #818181;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 18px;
}

.login-box .subtitle {
    color: var(--subtitle-color);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
}

.login-box .info-subtitle {
    text-decoration: none;
    font-size: 12px;
    color: #030303;
    font-family: "Poppins", sans-serif;
}

.login-box .info-link {
    font-size: 10px;
}

.form-control:focus {
    color: #818181;
    background-color: #2d82d60f;
    border-color: var(--border-color);
    outline: 0;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.password-icon.fa-eye {
    position: absolute;
    right: 18px;
    bottom: 17px;
}

.password-icon.fa-eye-slash {
    position: absolute;
    right: 18px;
    bottom: 17px;
}

/* Media-login-box */

@media screen and (max-width: 390px) {
    .login-box {
        width: calc(100vw - 40px);
    }
}

@media screen and (max-height: 550px) {
    .main-block {
        overflow-x: hidden;
        min-height: 732px;
    }

}
</style>
