<template>
  <div id="app">
    <Contador />
  </div>
</template>

<script>
import Contador from './components/Contador.vue';

export default {
  components: {
    Contador
  }
};
</script>

<style>
/* Estilos globales si es necesario */
#app {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

