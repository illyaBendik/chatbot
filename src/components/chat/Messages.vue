<template>
  <v-col cols="12" md="12" class="messageWrap">
    <transition-group name="fade">
      <div
        class="message"
        v-for="(message, index) in messages.slice(0, next)"
        :key="index  + 1"
        :class="{ 'text-right': message.owner != 'him' }"
      >
        <div class="message--text" :class="message.owner">
          {{ message.text }}
        </div>
      </div>
    </transition-group>
  </v-col>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
    next: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.messageWrap
  overflow: auto
  height: 62vh
.message
  margin: 20px
  &--text
    padding: 8px 25px
    font-size: 20px
    border-radius: 30px
    display: inline-block
    font-family: Helvetica, Arial, sans-serif
.him
  background: #eee
.me
  background: #3576d2
  color: #fff

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
