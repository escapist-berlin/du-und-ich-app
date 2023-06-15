<template>
  <div>
    <router-view name="home" />
    <router-view name="about" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
export default {
  name: "App",
  components: {
    AppFooter,
  },
}
</script>
