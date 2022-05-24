<template>
  <div>
    <h1>Admin space</h1>
    <span>{{ API_CONTENT_PATH }}</span>
  </div>
</template>

<script>
export default {
  setup() {
    const API_CONTENT_PATH = ref('');
    const ctx = useNuxtApp();
    onMounted(init);

    // app config
    // ctx.payload.config.app

    function init() {
      if (!process.client) {
        return;
      }

      console.log(ctx);
      API_CONTENT_PATH.value = ctx.payload.config.app.API_CONTENT_PATH;
    }

    return{
      API_CONTENT_PATH
    }
  },
};
</script>
