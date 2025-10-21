import { ref, onMounted } from 'vue'
import { collection, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export function useFirebaseLeaderboard() {
  const scores = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchScores() {
    loading.value = true
    error.value = null

    try {
      const scoresRef = collection(db, 'leaderboard')
      const q = query(scoresRef, orderBy('score', 'desc'), limit(10))
      const querySnapshot = await getDocs(q)
      
      scores.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = 'Failed to fetch scores: ' + err.message
    }
    
    loading.value = false
  }

  async function addScore(playerName, score) {
    try {
      const scoresRef = collection(db, 'leaderboard')
      await addDoc(scoresRef, {
        player_name: playerName,
        score: score,
        created_at: new Date()
      })
      await fetchScores()
    } catch (err) {
      error.value = 'Failed to save score: ' + err.message
    }
  }

  onMounted(fetchScores)

  return { scores, loading, error, addScore, fetchScores }
}
