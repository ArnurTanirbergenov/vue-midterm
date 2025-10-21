<template>
  <AppHeader />
  <NavBar />
  <div class="home">
    <h2>Welcome!</h2>
    <p>Play the Memory Game and climb the leaderboard!</p>
    <router-link to="/game" class="play-btn">Start Playing 🎮</router-link>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
}
.play-btn {
  display: inline-block;
  margin-top: 1rem;
  background: #222;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
}
</style>
