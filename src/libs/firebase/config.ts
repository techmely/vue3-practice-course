import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBn-jDe8B--PQcLcqkZybbDaQjzykr7EEc',
  authDomain: 'vue3-practice-course-test.firebaseapp.com',
  projectId: 'vue3-practice-course-test',
  storageBucket: 'vue3-practice-course-test.appspot.com',
  messagingSenderId: '543682134075',
  appId: '1:543682134075:web:0dd408945edacfd4f6dc1e'
}

export const firebaseApp = initializeApp(firebaseConfig)
