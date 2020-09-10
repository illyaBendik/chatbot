<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <v-row class="wrapper">
          <Chat />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Chat from "@/components/chat/Index.vue";
export default {
  name: "App",
  components: {
    Header,
    Chat,
  },
};
</script>
<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  height: 100vh
</style>
