// ============================================================
//  JAPAN TOUR 2026 — Firebase Config
//  Sostituisci i valori qui sotto con quelli del tuo progetto
//  Firebase Console → Impostazioni progetto → Le tue app → SDK
// ============================================================

export const firebaseConfig = {
  apiKey:            "INSERISCI_IL_TUO_API_KEY",
  authDomain:        "INSERISCI.firebaseapp.com",
  databaseURL:       "https://INSERISCI-default-rtdb.firebaseio.com",
  projectId:         "INSERISCI_IL_TUO_PROJECT_ID",
  storageBucket:     "INSERISCI.appspot.com",
  messagingSenderId: "INSERISCI_SENDER_ID",
  appId:             "INSERISCI_APP_ID"
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
