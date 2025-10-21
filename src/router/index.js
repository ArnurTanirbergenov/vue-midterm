import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import MemoryGame from '@/pages/MemoryGame.vue'
import Leaderboard from '@/pages/Leaderboard.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/game', name: 'game', component: MemoryGame },
  { path: '/leaderboard', name: 'leaderboard', component: Leaderboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
