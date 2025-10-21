<template>
  <div class="card" :class="{ flipped: card.flipped }" @click="$emit('flip', card)">
    <div class="front">{{ card.symbol }}</div>
    <div class="back">❓</div>
  </div>
</template>

<script setup>
defineProps({ card: Object })
defineEmits(['flip'])
</script>

<style scoped>
.card {
  width: 80px;
  height: 100px;
  display: inline-block;
  margin: 5px;
  perspective: 1000px;
  cursor: pointer;
}
.card div {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100px;
  border-radius: 8px;
  transition: transform 0.6s;
  backface-visibility: hidden;
  font-size: 2rem;
}
.card .front {
  background: #fff;
  transform: rotateY(180deg);
}
.card .back {
  background: #ddd;
  position: absolute;
  top: 0;
}
.card.flipped .front {
  transform: rotateY(0);
}
.card.flipped .back {
  transform: rotateY(180deg);
}
</style>
