<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <vue-typed-js :showCursor="false"	:strings="['Hello', 'This is Chatbot']" >
        <h1 class="typing"></h1>
      </vue-typed-js>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
