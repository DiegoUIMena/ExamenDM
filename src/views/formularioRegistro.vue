<template>
  <div class="container mt-4 text-center"> <!-- Clase para centrar el texto -->
    <form @submit.prevent="validarFormulario" class="mt-4">
      <!-- Campo para Nombre -->
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          v-model="nombre"
          class="form-control mx-auto"
          style="max-width: 500px;"
          required
        />
        <div v-if="errores.nombre" class="text-danger">{{ errores.nombre }}</div>
      </div>

      <!-- Campo para Correo -->
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input
          type="email"
          id="correo"
          v-model="correo"
          class="form-control mx-auto"
          style="max-width: 500px;"
          required
        />
        <div v-if="errores.correo" class="text-danger">{{ errores.correo }}</div>
      </div>

      <!-- Campo para Contraseña -->
      <div class="mb-3">
        <label for="contrasena" class="form-label">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          v-model="contrasena"
          class="form-control mx-auto"
          style="max-width: 500px;"
          required
        />
        <div v-if="errores.contrasena" class="text-danger">{{ errores.contrasena }}</div>
      </div>

      <!-- Campo para Repetir Contraseña -->
      <div class="mb-3">
        <label for="repetirContrasena" class="form-label">Repetir Contraseña</label>
        <input
          type="password"
          id="repetirContrasena"
          v-model="repetirContrasena"
          class="form-control mx-auto"
          style="max-width: 500px;"
          required
        />
        <div v-if="errores.repetirContrasena" class="text-danger">{{ errores.repetirContrasena }}</div>
      </div>

      <!-- Botón para Enviar -->
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
      errores: {
        nombre: null,
        correo: null,
        contrasena: null,
        repetirContrasena: null,
      },
    };
  },
  methods: {
    validarFormulario() {
      this.errores = {
        nombre: null,
        correo: null,
        contrasena: null,
        repetirContrasena: null,
      };

      let esValido = true;

      // Validar Nombre
      if (!this.nombre.trim()) {
        this.errores.nombre = 'El nombre es obligatorio.';
        esValido = false;
      }

      // Validar Correo
      if (!this.correo.trim()) {
        this.errores.correo = 'El correo es obligatorio.';
        esValido = false;
      } else if (!this.validarCorreo(this.correo)) {
        this.errores.correo = 'El formato del correo es incorrecto.';
        esValido = false;
      }

      // Validar Contraseña
      if (!this.contrasena) {
        this.errores.contrasena = 'La contraseña es obligatoria.';
        esValido = false;
      }

      // Validar Repetir Contraseña
      if (!this.repetirContrasena) {
        this.errores.repetirContrasena = 'Debe repetir la contraseña.';
        esValido = false;
      } else if (this.contrasena !== this.repetirContrasena) {
        this.errores.repetirContrasena = 'Las contraseñas no coinciden.';
        esValido = false;
      }

      // Si el formulario es válido, mostrar alert
      if (esValido) {
        alert('El registro se ha realizado correctamente');
        // Puedes agregar aquí lógica adicional para manejar el registro
      }
    },
    validarCorreo(correo) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(correo);
    },
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
