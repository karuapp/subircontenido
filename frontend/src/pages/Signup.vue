<template>
  <div class="container">
    <div class="login-section fixed-layout">
      <q-layout class="vertical-center full-width">
        <q-page-container>
          <q-page class="flex justify-center items-center">
            <q-ajax-bar position="top" color="primary" size="5px" />

            <div class="login-content">
              <q-img
                src="/logo.png"
                spinner-color="white"
                class="logo-image q-mb-lg q-px-md no-cover"
                style="max-width: 120%"
              />

              <q-separator spaced />
              <div class="text-primary">
                <div class="text-h6">{{ $t('signup.title') }}</div>

                <!-- Nombre Empresa -->
                <q-input
                  v-model="form.name"
                  label="Nombre de la empresa"
                  outlined
                  clearable
                  class="q-mb-md"
                  required
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-check-outline" color="primary" />
                  </template>
                </q-input>

                <!-- Email -->
                <q-input
                  v-model="form.email"
                  label="Correo electrónico"
                  type="email"
                  outlined
                  clearable
                  class="q-mb-md"
                  required
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-email-outline" color="primary" />
                  </template>
                </q-input>

                <!-- Usuario -->
                <q-input
                  v-model="form.userName"
                  label="Nombre de usuario"
                  outlined
                  clearable
                  class="q-mb-md"
                  required
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-outline" color="primary" />
                  </template>
                </q-input>

                <!-- Contraseña -->
                <q-input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  label="Contraseña"
                  outlined
                  clearable
                  class="q-mb-md"
                  required
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-shield-key-outline" color="primary" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="showPassword ? 'visibility' : 'visibility_off'"
                      class="cursor-pointer"
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </q-input>

                <!-- Plan -->
                <q-select
                  v-model="form.plan"
                  label="Selecciona un plan"
                  outlined
                  class="q-mb-md"
                  :options="planOptions"
                  option-label="label"
                  option-value="value"
                  emit-value
                  map-options
                  required
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-package-variant-closed" color="primary" />
                  </template>
                </q-select>

                <!-- Checkbox -->
                <q-checkbox
                  v-model="form.acceptTerms"
                  label="Acepto los términos y condiciones"
                  class="q-mb-md"
                  required
                />

                <!-- Botones -->
                <q-btn
                  color="primary"
                  @click="submitForm"
                  :loading="loading"
                  style="width: 150px"
                >
                  Registrarse
                </q-btn>

                <q-btn
                  class="bg-red text-white"
                  @click="goToLogin"
                  style="width: 150px"
                >
                  Ir al Login
                </q-btn>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>

    <!-- Video background -->
    <div class="video-container">
      <video
        autoplay
        muted
        loop
        style="width: 100%; height: auto; object-fit: cover;"
      >
        <source src="../assets/110694.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const router = useRouter();

const form = ref({
  name: "",
  identity: "",
  email: "",
  userName: "",
  password: "",
  acceptTerms: false,
  plan: "plan1", // valor por defecto
});

const planOptions = [
  { label: "💼 Plan Emprendedor 1 canal / 5 Agentes", value: "plan1" },
  { label: "🚀 Plan Profesional 3 canales / 15 usuarios", value: "plan2" },
  { label: "🚀 Plan Enterprise 5 canales / 50 usuarios", value: "plan3" },
];

const showPassword = ref(false);
const loading = ref(false);

const submitForm = async () => {
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.userName ||
    !form.value.password ||
    !form.value.acceptTerms ||
    !form.value.plan
  ) {
    $q.notify({
      type: "negative",
      message: "Por favor, completa todos los campos y acepta los términos.",
    });
    return;
  }

  loading.value = true;

  // Asignar valores según el plan seleccionado
  let maxUsers = 1;
  let maxConnections = 5;

  switch (form.value.plan) {
    case "plan2":
      maxUsers = 15;
      maxConnections = 3;
      break;
    case "plan3":
      maxUsers = 50;
      maxConnections = 5;
      break;
  }

  const payload = {
    status: "active",
    name: form.value.name,
    maxUsers,
    maxConnections,
    acceptTerms: true,
    email: form.value.email,
    password: form.value.password,
    userName: form.value.userName,
    profile: "admin",
    trial: "enabled",
    trialPeriod: 14,
  };

  try {
    const response = await fetch(
      "https://app2.sisnetel.com/tenantApiStoreTenant",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer sisnetel",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      let errorMsg = "Error en el registro";
      try {
        const errorData = await response.json();
        if (errorData.message) errorMsg = errorData.message;
      } catch {
        errorMsg = await response.text();
      }
      throw new Error(errorMsg);
    }

    $q.notify({
      type: "positive",
      message: "Registro exitoso",
    });

    resetForm();
    router.push("/login");
  } catch (error) {
    $q.notify({
      type: "negative",
      message: error.message,
    });
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  router.push("/login");
};

const resetForm = () => {
  form.value = {
    name: "",
    identity: "",
    email: "",
    userName: "",
    password: "",
    acceptTerms: false,
    plan: "plan1",
  };
  showPassword.value = false;
};
</script>
