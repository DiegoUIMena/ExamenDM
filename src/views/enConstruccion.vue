<template>
  <div class="container mt-5 text-center">
    <!-- Título de la página -->
     <h1 class="mensaje">Esta sección se encuentra en etapa de desarrollo, disculpe las molestias...</h1>

    <!-- Imagen en el centro -->
    <img src="../assets/enconstruccion.png" alt="imagen" class="img-fluid mt-4" />
    
    <!-- Botones para volver a las otras secciones -->
    <div class="mt-4">
      <button @click="irAcalculoCalificacion" class="btn btn-primary me-3">Volver a Cálculo de Calificación</button>
      <button @click="irAformularioRegistro" class="btn btn-secondary">Volver a Formulario de Registro</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    irAcalculoCalificacion() {
      this.$router.push({ path: '/' });
    },
    irAformularioRegistro() {
      this.$router.push({ path: '/formularioRegistro' });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px; /* Limitar el ancho del contenedor */
  margin: 0 auto; /* Centrar el contenedor */
}

.mensaje {
  color: #acb6bf; /* Gris suave */
}

.img-fluid {
  max-width: 100%; /* Ajustar el tamaño de la imagen al contenedor */
  height: auto; /* Mantener la proporción de la imagen */
}
</style>
