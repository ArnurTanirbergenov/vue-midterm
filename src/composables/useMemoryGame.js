import { ref, computed } from 'vue'

export function useMemoryGame() {
  const symbols = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍑']
  const cards = ref([])
  const flipped = ref([])
  const matched = ref([])
  const moves = ref(0)
  const gameOver = ref(false)

  function initGame() {
    const doubled = [...symbols, ...symbols]
    cards.value = doubled
      .sort(() => Math.random() - 0.5)
      .map((symbol, id) => ({ id, symbol, flipped: false }))
    flipped.value = []
    matched.value = []
    moves.value = 0
    gameOver.value = false
  }

  function flipCard(card) {
    if (flipped.value.length >= 2 || card.flipped || matched.value.includes(card.id)) return
    card.flipped = true
    flipped.value.push(card)
    if (flipped.value.length === 2) {
      moves.value++
      checkMatch()
    }
  }

  function checkMatch() {
    const [a, b] = flipped.value
    if (a.symbol === b.symbol) {
      matched.value.push(a.id, b.id)
      flipped.value = []
      if (matched.value.length === cards.value.length) gameOver.value = true
    } else {
      setTimeout(() => {
        a.flipped = false
        b.flipped = false
        flipped.value = []
      }, 800)
    }
  }

  const score = computed(() => matched.value.length * 10 - moves.value)

  return { cards, flipped, matched, moves, gameOver, score, initGame, flipCard }
}
