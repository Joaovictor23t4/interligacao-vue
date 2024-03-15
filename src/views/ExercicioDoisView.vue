<template>
    <div class="container">
        <h1 class="titulo">Formulário</h1>
        <form class="formulario" @submit.prevent="registro">
            <div class="campos">
                <label for="inputNome" class="label">NOME</label>
                <input type="text" class="input" id="inputNome" placeholder="Nome" minlength="3" maxlength="20" v-model="nome">
            </div>
            <div class="campos">
                <label for="inputIdade" class="label">IDADE</label>
                <input type="number" class="input" id="inputIdade" placeholder="Idade" min="18" max="60" v-model="idade">
            </div>
            <div class="campos">
                <label for="inputEmail" class="label">EMAIL</label>
                <input type="email" class="input" id="inputEmail" placeholder="Email" v-model="email">
            </div>
            <div class="campos">
                <button type="submit" class="buttonSubmit">Fazer registro</button>
            </div>
        </form>

        <div v-show="mostrarMensagem" class="output">
            <h2>Confirmação de registro:</h2>

            <div class="container-registro">
                <p>Seus dados foram registrados!!!</p>

                <p>Nome: {{ nome }}</p>
                <p>Idade: {{ idade }}</p>
                <p>Email: {{ email }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const nome = ref('');
const idade = ref('');
const email = ref('');
const mostrarMensagem = ref(false);

function registro() {
    if (nome.value != '' && idade.value != '' && email.value != '') {
        mostrarMensagem.value = true
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.titulo {
    font-family: Arial, Helvetica, sans-serif;
}

.formulario {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 500px;
    border-radius: 8px;
    background: #f5f5f5;
}

.campos {
    padding: 50px 50px 0 50px;
}

.label {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
}

.input {
    width: 250px;
    height: 20px;
    font-size: 18px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ece7e7;
    outline: none;
}

.input::-webkit-outer-spin-button, .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input::placeholder {
    font-size: 14px;
}

.buttonSubmit {
    border: none;
    outline: none;
    border-radius: 5px;
    background: rgb(30, 236, 92);
    color: #fdfdfd;
    width: 150px;
    height: 35px;
    cursor: pointer;
}

.output {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.container-registro {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}
</style>