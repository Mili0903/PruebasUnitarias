<template>
  <div>
    <h2>Contador</h2>
    <p>Contador: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      if (this.contador > 0) {
        this.contador--;
      }
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales para el componente */
h2 {
  font-size: 1.5rem;
  color: #333;
}

button {
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 1rem;
}
</style>






  