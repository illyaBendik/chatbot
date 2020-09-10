<template>
  <v-col cols="12" md="8" class="chat">
    <Messages :messages="messages" :next="next" />
    <Form
      :disabled="lastMessage"
      @send-message="sendMessage($event)"
      @start-chat="nextQuestion"
    />
  </v-col>
</template>
<script>
import Messages from "@/components/chat/Messages.vue";
import Form from "@/components/chat/Form.vue";
import MessagesService from "@/services/MessagesService";
export default {
  name: "Chat",
  components: {
    Messages,
    Form,
  },
  data: () => ({
    infoUser: {
      name: null,
      age: 0,
      location: null,
      feeling: null,
      hobby: null,
    },
    next: 0,
    messages: [],
    disabledBtn: true,
  }),
  async created() {
    await this.getMessages();
  },
  computed: {
    lastMessage() {
      return typeof this.messages[this.next] == "undefined";
    },
  },
  methods: {
    async getMessages() {
      try {
        const res = await MessagesService.get();
        this.messages = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    nextQuestion() {
      if (!this.lastMessage && !this.messages[this.next].ask) {
        this.next++;
        this.nextQuestion();
      } else {
        this.next++;
      }
    },
    sendMessage(input) {
      this.setUserInfo(input);
      this.addMessages(input);
      this.nextQuestion();
    },
    setUserInfo(input) {
      const key = this.messages[this.next - 1].ask;
      this.infoUser[key] = input;
    },
    addMessages(input) {
      this.messages.splice(this.next, 0, {
        text: input,
        owner: "me",
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.chat
  box-shadow: 0px 2px 4px #00000029
</style>
