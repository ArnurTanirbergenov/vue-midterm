<template>
  <div class="scoreboard">
    <h2>🏆 Leaderboard</h2>
    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="!loading && !error && scores.length === 0" class="no-scores">
      <p>No scores yet! Be the first to play and set a record! 🎮</p>
    </div>
    <ul v-if="!loading && !error && scores.length > 0">
      <li v-for="(score, i) in scores" :key="score.id">
        {{ i + 1 }}. {{ score.player_name }} — {{ score.score }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ scores: Array, loading: Boolean, error: String })
</script>

<style scoped>
.scoreboard {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  color:green;
}
.error {
  color: red;
  font-weight: bold;
}
.no-scores {
  color: #666;
  font-style: italic;
}
</style>
