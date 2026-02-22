<template>
  <v-app>
    <v-main>
      <nuxt-page />
    </v-main>

    <v-btn
      icon="mdi-theme-light-dark"
      position="absolute"
      class="top-3 right-3"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
