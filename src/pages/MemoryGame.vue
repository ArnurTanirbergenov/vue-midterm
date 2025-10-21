<template>
  <AppHeader />
  <NavBar />

  <div class="game-container">
    <h2>Memory Game</h2>
    <p>Moves: {{ moves }} | Score: {{ score }}</p>

    <div class="cards">
      <GameCard v-for="card in cards" :key="card.id" :card="card" @flip="flipCard" />
    </div>

    <Modal :show="gameOver" @close="saveScore">
      <h3>🎉 You won!</h3>
      <p>Your Score: {{ score }}</p>
      <input v-model="playerName" placeholder="Enter your name" />
      <button @click="saveScore">Save Score</button>
    </Modal>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
import GameCard from '@/components/GameCard.vue'
import Modal from '@/components/Modal.vue'
import { useMemoryGame } from '@/composables/useMemoryGame'
import { useFirebaseLeaderboard } from '@/composables/useFirebaseLeaderboard' // Use this for Firebase
import { ref } from 'vue'

const { cards, moves, score, gameOver, initGame, flipCard } = useMemoryGame()
const { addScore } = useFirebaseLeaderboard() // Use this for Firebase
const playerName = ref('')

function saveScore() {
  if (playerName.value) {
    addScore(playerName.value, score.value)
    initGame()
    playerName.value = ''
  }
}

initGame()
</script>

<style scoped>
.game-container {
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
  margin: 1rem auto;
}
</style>
