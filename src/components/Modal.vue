<template>
  <transition name="fade">
    <div v-if="show" class="overlay">
      <div class="modal">
        <slot />
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({ show: Boolean })
defineEmits(['close'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  color:green;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
