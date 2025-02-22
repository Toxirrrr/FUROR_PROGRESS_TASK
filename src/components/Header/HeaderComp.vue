<script setup>
import { arr } from '..';
import './HeaderComp.scss'
function modal() {
    arr.createModal = true
}
</script>



<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <button class="header__btn" @click="modal">POST</button>
            </div>
        </div>
    </header>
</template>