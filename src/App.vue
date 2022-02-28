<script setup>
</script>
<template>
  <router-view v-slot:component>
     <transition name="app">
       <component>
         
       </component>
     </transition>
  </router-view>
</template>

<style>
@import "./assets/css/main.scss";
</style>
