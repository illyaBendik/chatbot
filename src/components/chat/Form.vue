<template>
  <v-col cols="12" md="12" class="form">
    <v-form ref="form">
      <v-textarea
        name="input"
        v-model="input"
        :outlined="true"
        @focus="startChat()"
        :disabled="disabled"
        :rules="rules"
        placeholder="Type messages"
        :rows="1"
      ></v-textarea>
      <div class="text-right" v-if="isInitChat">
        <v-btn
          :disabled="disabled"
          @click="sendMessage"
          x-large
          color="primary"
          dark
          >Submit Message</v-btn
        >
      </div>
      <vue-typed-js
        :showCursor="false"
        :strings="['Please', 'Lets Chat']"
        v-else
        class="d-flex justify-end"
      >
        <v-btn
          @click="startChat"
          class="typing"
          x-large
          color="primary"
          dark
        ></v-btn>
      </vue-typed-js>
    </v-form>
  </v-col>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      requiered: true,
    },
  },
  data() {
    return {
      input: null,
      isInitChat: false,
      rules: [(v) => !!v || "Field is required"],
    };
  },
  methods: {
    startChat() {
      if (!this.isInitChat) {
        this.$emit("start-chat");
        this.isInitChat = true;
      }
    },
    sendMessage() {
      if (this.isValid()) {
        this.$emit("send-message", this.input);
        this.clearTextarea();
        this.resetValid();
        this.scrollUpdate();
      }
    },
    isValid() {
      return this.$refs.form.validate();
    },
    clearTextarea() {
      this.input = null;
    },
    resetValid() {
      this.$refs.form.resetValidation();
    },
    scrollUpdate() {
      setTimeout(() => {
        const messageWrap = document.querySelector(".messageWrap");
        messageWrap.scrollTop = messageWrap.scrollHeight;
      }, 0);
    },
  },
};
</script>
<style lang="sass" scoped>
.form
  display: flex
  flex-direction: column
  justify-content: center
</style>
