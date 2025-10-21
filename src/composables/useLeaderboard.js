import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

export function useLeaderboard() {
  const scores = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchScores() {
    loading.value = true
    error.value = null
    
    // Check if Supabase is configured
    if (supabase.supabaseUrl.includes('YOUR_PROJECT_ID')) {
      error.value = 'Supabase not configured. Please update src/lib/supabase.js with your credentials.'
      loading.value = false
      return
    }

    try {
      const { data, error: err } = await supabase
        .from('leaderboard')
        .select('*')
        .order('score', { ascending: false })
        .limit(10)
      
      if (err) {
        error.value = err.message
      } else {
        scores.value = data || []
      }
    } catch (err) {
      error.value = 'Failed to connect to Supabase. Please check your configuration.'
    }
    
    loading.value = false
  }

  async function addScore(playerName, score) {
    // Check if Supabase is configured
    if (supabase.supabaseUrl.includes('YOUR_PROJECT_ID')) {
      error.value = 'Supabase not configured. Score not saved.'
      return
    }

    try {
      const { error: err } = await supabase
        .from('leaderboard')
        .insert([{ player_name: playerName, score }])
      
      if (err) {
        error.value = err.message
      } else {
        await fetchScores()
      }
    } catch (err) {
      error.value = 'Failed to save score. Please check your configuration.'
    }
  }

  onMounted(fetchScores)

  return { scores, loading, error, addScore, fetchScores }
}
