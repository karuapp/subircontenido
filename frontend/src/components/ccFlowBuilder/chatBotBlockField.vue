<template>
  <div>
    <q-card flat
      class="q-pa-sm q-pb-md" style="min-height: 40px;">
      <q-card-section class="q-pa-none">
        <div class="flex flex-inline full-width items-center">
          <div class="flex flex-inline text-left"
            style="width: 40px">
          </div>
          <q-toggle
            ref="chatbotBlockToggle"
            style="flex: auto"
            :value="$attrs.element.data.chatbotBlocked"
            class="q-pa-sm bg-white"
            :label="$attrs.element.data.chatbotBlocked ? $t('nodeForm.chatbotBlock.chatbotBlocked') : $t('nodeForm.chatbotBlock.chatbotActive')"
            color="negative"
            @input="(v) => $attrs.element.data.chatbotBlocked = v"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ChatBotBlockField',
  data () {
    return {
      // No necesita datos externos, solo controla el interruptor.
    }
  },
  mounted() {
    // Inicializa el campo si no existe.
    if (this.$attrs.element.data.chatbotBlocked === undefined) {
      this.$attrs.element.data.chatbotBlocked = false;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
