import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfd1K1LeIseducbmDUSRlJ02hpaYTRSRQ",
  authDomain: "memorygame-d1356.firebaseapp.com",
  projectId: "memorygame-d1356",
  storageBucket: "memorygame-d1356.firebasestorage.app",
  messagingSenderId: "47103330891",
  appId: "1:47103330891:web:485dbd1349f5b7a5a49bce",
  measurementId: "G-D4K11W4TF2"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)