<template>
  <AppHeader />
  <NavBar />
  <div class="leaderboard-page">
    <ScoreBoard :scores="scores" :loading="loading" :error="error" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
// import { useLeaderboard } from '@/composables/useLeaderboard' // For Supabase
import { useFirebaseLeaderboard } from '@/composables/useFirebaseLeaderboard' // For Firebase

// const { scores, loading, error } = useLeaderboard()
const { scores, loading, error } = useFirebaseLeaderboard() // Use this for Firebase
</script>

<style scoped>
.leaderboard-page {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>