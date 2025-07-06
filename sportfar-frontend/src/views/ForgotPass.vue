<template>
    <div class="main-block login vw-100 vh-100 d-flex align-items-center justify-content-center">
        <div class="rounded login-box">
            <div class="p-4">
                <h4 class="text-center mb-2">Recuperar Senha</h4>
                <p class="text-center mb-0 subtitle">Digite o código enviado em seu e-mail para trocar a senha.</p>
            </div>
            <div class="line"></div>
            <div class="p-4">
                <div >
                    <label for="email" class="form-label"><p class="mb-0">Código</p></label>
                    <input type="email" class="form-control" id="email">
                </div>
                <button type="button" class="mt-4 position-relative d-flex align-items-center justify-content-center btn main-btn w-100">
                    <div class="btn-hover"></div>
                    <p class="mb-0">Confirmar</p>
                </button> 
            </div>
        </div>
    </div>
</template>



<style>

/* espa'camento global do site */
.ForgotPass .px-10 {
    padding-right: 10px;
    padding-left: 10px;
}

.ForgotPass .px-8 {
    padding-right: 8px;
    padding-left: 8px;
}

/* btn global do site */
.ForgotPass .main-btn {
    overflow: hidden;
    background-color: var(--main-color);
}

.ForgotPass .main-btn .btn-hover {
    transition: 0.4s ease-in all;
    position: absolute;
    width: 0;
    height: 100%;
    border-radius: 40px;
    background-color: transparent;
}

.ForgotPass .main-btn:hover .btn-hover {
    width: 140%;
    background-color: #37d7528f;
}

.ForgotPass .main-btn p {
    z-index: 10;
    color: white;
    font-weight: 700 !important;
}

/* Inicio CSS-Global */
.ForgotPass .pt-100 {
    padding-top: 100px;
}

.ForgotPass .py-100 {
    padding: 100px 0;
}

.ForgotPass .py-200 {
    padding: 200px 0;
}

.ForgotPass .pt-150 {
    padding-top: 150px !important;
}

.ForgotPass .mt-100 {
    margin-top: 100px;
}

.ForgotPass .mb-200 {
    margin-bottom: 200px;
}

.ForgotPass .mb-100 {
    margin-bottom: 100px;
}

.ForgotPass .mb-60 {
    margin-bottom: 60px;
}

.ForgotPass .shadow {
    box-shadow: 0 0 3px rgba(30, 41, 59, 0.15) !important;
}

.ForgotPass .shadow-lg {
    box-shadow: 0 10px 25px rgba(30, 41, 59, 0.15) !important;
}

.ForgotPass .shadow-md {
    box-shadow: 0 5px 13px rgba(30, 41, 59, 0.2) !important;
}

/* CSS Global */
.ForgotPass body {
    background-image: linear-gradient(45deg, var(--second-color), var(--main-color));
    overflow-x: hidden;
}

.ForgotPass p, .ForgotPass h1, .ForgotPass h2, .ForgotPass h3, .ForgotPass h4, .ForgotPass h5, .ForgotPass h6, .ForgotPass body{
    font-family: "Montserrat", sans-serif;
}

.ForgotPass .l-spacing-2{
    letter-spacing:0.28px;
}
.ForgotPass .line {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
}

.ForgotPass a { 
    color: #312f2f;
    font-size: 12px;
    font-weight: 800 ;
    margin-left: 4px;  
    transition: 0.2s ease-in-out all;
}

.ForgotPass a:hover { 
    color: var(--main-color);
}

/* Bloco Principal */
.ForgotPass .main-block {
    background-image: linear-gradient(45deg, var(--second-color), var(--main-color));
}

.ForgotPass .main-block.login {
    overflow-x: hidden;
    min-height: 532px;
}

/* Login-box */
.ForgotPass .login-box {
    background-color: white;
    width: 350px;
    height: fit-content;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.ForgotPass .login-box p {
    font-weight: 400;
    font-size: 14px;
}

.ForgotPass .login-box h4{
    font-weight: 600;
}

.ForgotPass .login-box input, .login-box button{
    height: 36px;
}

.ForgotPass .login-box input{
    color: #818181;
    background-color: #2d82d61c;
    box-shadow: 0px 0px 20px #f3f3f3;
    border: 0px;
    border-bottom: 2px solid var(--border-color);
}

.ForgotPass .login-box .subtitle{
    color: var(--subtitle-color);
    font-family: "Poppins", sans-serif;
}

.ForgotPass .login-box .info-subtitle{
    font-size: 12px;
    color: var(--subtitle-color);
    font-family: "Poppins", sans-serif;
}

.ForgotPass .login-box .info-link{
    font-size: 10px;
}

.ForgotPass .form-control:focus {
    color: #818181;
    background-color: #2d82d60f;
    border-color: var(--border-color);
    outline: 0;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.ForgotPass .password-icon.fa-eye {
    position: absolute;
    right: 8px;
    bottom: 10px;
}

.ForgotPass .password-icon.fa-eye-slash {
    position: absolute;
    right: 7px;
    bottom: 10px;
}

/* Media-login-box */

@media screen and (max-width: 390px){
    .ForgotPass .login-box {
        width: calc(100vw - 40px);
    }
}

@media screen and (max-height: 550px){
    .ForgotPass .main-block.ForgotPass {
        overflow-x: hidden;
        min-height: 732px;
    }
    
}
</style>