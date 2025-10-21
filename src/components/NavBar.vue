<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/game">Play</router-link>
    <router-link to="/leaderboard">Leaderboard</router-link>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}
a {
  color: #333;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
