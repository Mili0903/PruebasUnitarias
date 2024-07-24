<!-- src/components/Parent.vue -->
<template>
    <div>
      <p>Componente Padre</p>
      <Child />
    </div>
  </template>
  
  <script>
  import Child from './Child.vue'; // Importa el componente Child.vue
  
  export default {
    components: {
      Child // Registra el componente Child
    }
    // Props, methods, data, etc.
  };
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  
  
  
  