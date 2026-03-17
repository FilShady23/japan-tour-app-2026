// ============================================================
//  JAPAN TOUR 2026 — Firebase Config
//  Sostituisci i valori qui sotto con quelli del tuo progetto
//  Firebase Console → Impostazioni progetto → Le tue app → SDK
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDdKDqKioyTVCpgcYIYHyLGUNOh6sJCjNE",
  authDomain: "japan-tour-app-2026.firebaseapp.com",
  databaseURL: "https://japan-tour-app-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "japan-tour-app-2026",
  storageBucket: "japan-tour-app-2026.firebasestorage.app",
  messagingSenderId: "74829941825",
  appId: "1:74829941825:web:7631fe0dfa271c2177cac0",
  measurementId: "G-SGDJKL8VFX"
};

// ============================================================
//  Regole Realtime Database consigliate (Firebase Console →
//  Realtime Database → Regole):
//
//  {
//    "rules": {
//      "spese": {
//        ".read":  true,
//        ".write": true
//      },
//      "checklist": {
//        ".read":  true,
//        ".write": true
//      }
//    }
//  }
//
//  ⚠️  Queste regole sono aperte — va bene per un gruppo di
//  amici con URL privato. Se vuoi aggiungere autenticazione
//  in seguito, chiedi e aggiungiamo Firebase Auth.
// ============================================================
