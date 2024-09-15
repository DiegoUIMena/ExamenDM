<template>
  <div class="container mt-4 text-center">
    <form @submit.prevent="calcularResultado" class="mt-4">
      <!-- Campo para Nota 1 -->
      <div class="mb-3">
        <label for="nota1" class="form-label">Nota 1</label>
        <input
          type="number"
          id="nota1"
          v-model.number="nota1"
          class="form-control mx-auto"
          style="max-width: 500px;"
          min="10"
          max="70"
          required
        />
      </div>
      
      <!-- Campo para Nota 2 -->
      <div class="mb-3">
        <label for="nota2" class="form-label">Nota 2</label>
        <input
          type="number"
          id="nota2"
          v-model.number="nota2"
          class="form-control mx-auto"
          style="max-width: 500px;"
          min="10"
          max="70"
          required
        />
      </div>

      <!-- Campo para Nota 3 -->
      <div class="mb-3">
        <label for="nota3" class="form-label">Nota 3</label>
        <input
          type="number"
          id="nota3"
          v-model.number="nota3"
          class="form-control mx-auto"
          style="max-width: 500px;"
          min="10"
          max="70"
          required
        />
      </div>

      <!-- Campo para Asistencia -->
      <div class="mb-3">
        <label for="asistencia" class="form-label">Asistencia</label>
        <input
          type="number"
          id="asistencia"
          v-model.number="asistencia"
          class="form-control mx-auto"
          style="max-width: 500px;"
          min="0"
          max="100"
          required
        />
      </div>

      <!-- Botón para Calcular -->
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>

    <!-- Mostrar el Resultado -->
    <div v-if="resultado !== null" class="mt-4">
      <h2>El promedio es: {{ resultado }}</h2>
      <p :class="{ 'text-success': aprobado, 'text-danger': !aprobado }">
        {{ mensaje }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: null,
      mensaje: '',
      aprobado: false,
    };
  },
  methods: {
    calcularResultado() {
      // Validar los valores ingresados
      if (
        this.nota1 < 10 || this.nota1 > 70 ||
        this.nota2 < 10 || this.nota2 > 70 ||
        this.nota3 < 10 || this.nota3 > 70 ||
        this.asistencia < 0 || this.asistencia > 100
      ) {
        this.mensaje = 'Por favor, ingrese valores válidos en los campos.';
        this.aprobado = false;
        this.resultado = null;
        return;
      }

      // Calcular el promedio ponderado
      const promedioPonderado = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);

      // Determinar si se aprueba o reprueba
      if (promedioPonderado >= 40 && this.asistencia >= 80) {
        this.resultado = promedioPonderado.toFixed(2);
        this.mensaje = 'Tu estado es: APROBADO';
        this.aprobado = true;
      } else {
        this.resultado = promedioPonderado.toFixed(2);
        this.mensaje = 'Tu estado es: REPROBADO';
        this.aprobado = false;
      }
    },
  },
};
</script>

<style scoped>
.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
