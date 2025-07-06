<template>
    <div class="main-block login vw-100 vh-100 d-flex align-items-center justify-content-center">
        <div class="container d-flex h-100 align-items-center block-404 justify-content-center">
            <div class="d-flex flex-wrap align-items-center justify-content-center">
                <div class="me-md-5 me-0">
                    <h1 class="">Erro 404</h1>
                    <p class="">Pagina não encontrada.</p>
                </div>
                <img width="600" class="ms-0 ms-md-5" src="../assets/images/error.png" alt="">
            </div>
        </div>
    </div>
</template>



<style>

/* espa'camento global do site */
.NotFound .px-10 {
    padding-right: 10px;
    padding-left: 10px;
}

.NotFound .px-8 {
    padding-right: 8px;
    padding-left: 8px;
}

/* btn global do site */
.NotFound .main-btn {
    overflow: hidden;
    background-color: var(--main-color);
}

.NotFound .main-btn .btn-hover {
    transition: 0.4s ease-in all;
    position: absolute;
    width: 0;
    height: 100%;
    border-radius: 40px;
    background-color: transparent;
}

.NotFound .main-btn:hover .btn-hover {
    width: 140%;
    background-color: #37d7528f;
}

.NotFound .main-btn p {
    z-index: 10;
    color: white;
    font-weight: 700 !important;
}

/* Inicio CSS-Global */
.NotFound .pt-100 {
    padding-top: 100px;
}

.NotFound .py-100 {
    padding: 100px 0;
}

.NotFound .py-200 {
    padding: 200px 0;
}

.NotFound .pt-150 {
    padding-top: 150px !important;
}

.NotFound .mt-100 {
    margin-top: 100px;
}

.NotFound .mb-200 {
    margin-bottom: 200px;
}

.NotFound .mb-100 {
    margin-bottom: 100px;
}

.NotFound .mb-60 {
    margin-bottom: 60px;
}

.NotFound .shadow {
    box-shadow: 0 0 3px rgba(30, 41, 59, 0.15) !important;
}

.NotFound .shadow-lg {
    box-shadow: 0 10px 25px rgba(30, 41, 59, 0.15) !important;
}

.NotFound .shadow-md {
    box-shadow: 0 5px 13px rgba(30, 41, 59, 0.2) !important;
}

/* CSS Global */
.NotFound body {
    background-image: linear-gradient(45deg, var(--second-color), var(--main-color));
    overflow-x: hidden;
}

.NotFound p, .NotFound h1, .NotFound h2, .NotFound h3, .NotFound h4, .NotFound h5, .NotFound h6, .NotFound body{
    font-family: "Montserrat", sans-serif;
}

.NotFound .l-spacing-2{
    letter-spacing:0.28px;
}
.NotFound .line {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
}

.NotFound a { 
    color: #312f2f;
    font-size: 12px;
    font-weight: 800 ;
    margin-left: 4px;  
    transition: 0.2s ease-in-out all;
}

.NotFound a:hover { 
    color: var(--main-color);
}

/* Bloco Principal */
.NotFound .main-block {
    background-image: linear-gradient(45deg, var(--second-color), var(--main-color));
}

.NotFound .main-block.login {
    overflow-x: hidden;
    min-height: 532px;
}

/* Login-box */
.NotFound .login-box {
    background-color: white;
    width: 350px;
    height: fit-content;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.NotFound .login-box p {
    font-weight: 400;
    font-size: 14px;
}

.NotFound .login-box h4{
    font-weight: 600;
}

.NotFound .login-box input, .login-box button{
    height: 36px;
}

.NotFound .login-box input{
    color: #818181;
    background-color: #2d82d61c;
    box-shadow: 0px 0px 20px #f3f3f3;
    border: 0px;
    border-bottom: 2px solid var(--border-color);
}

.NotFound .login-box .subtitle{
    color: var(--subtitle-color);
    font-family: "Poppins", sans-serif;
}

.NotFound .login-box .info-subtitle{
    font-size: 12px;
    color: var(--subtitle-color);
    font-family: "Poppins", sans-serif;
}

.NotFound .login-box .info-link{
    font-size: 10px;
}

.NotFound .form-control:focus {
    color: #818181;
    background-color: #2d82d60f;
    border-color: var(--border-color);
    outline: 0;
    box-shadow: 0px 0px 20px #f3f3f3;
}

.NotFound .password-icon.fa-eye {
    position: absolute;
    right: 8px;
    bottom: 10px;
}

.NotFound .password-icon.fa-eye-slash {
    position: absolute;
    right: 7px;
    bottom: 10px;
}

/* Media-login-box */

@media screen and (max-width: 390px){
    .NotFound .login-box {
        width: calc(100vw - 40px);
    }
}

@media screen and (max-height: 550px){
    .NotFound .main-block.NotFound {
        overflow-x: hidden;
        min-height: 732px;
    }
    
}


/* Pag Erro 404 */

.NotFound .block-404 h1{
    font-weight: 800;
    font-size: 112px;
    color: white;
} 

.NotFound .block-404 p{
    font-weight: 250;
    font-size: 30px;
    color: white;
} 

@media screen and (max-width: 768px) {
    .NotFound .block-404 > div {

        display: flex;
        flex-direction: column;
        align-items: center; 
        text-align: center;
        min-height:532px;
    }

    .NotFound .block-404 h1 {
        font-weight: 800;
        font-size: calc(10vw + 10px); 
        color: white;
        margin-bottom: 10px;
    }

    .NotFound .block-404 p {
        font-size: calc(4vw + 5px); 
    }

    .NotFound .block-404 img {
        margin: 20px 0;
        width: calc(100vw - 40px);
        max-width: 500px; 
    }
}

@media screen and (max-height: 768px){


    .NotFound .block-404 h1 {
        font-weight: 800;
        font-size: 56px;
        color: white;
        margin-bottom: 50px;
    }

    .NotFound .block-404 p {
        font-size: 36px; 
    }

    .NotFound .block-404 img { 
        max-height: 428px;
        max-width: none;
        width: auto;
    }
}
</style>
