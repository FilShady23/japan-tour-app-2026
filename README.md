# 🌸 Japan Tour 2026 — Deploy Guide

## Struttura del progetto

```
japan-tour-2026/
├── public/
│   ├── index.html          ← App principale
│   ├── firebase-config.js  ← ⚠️  DA CONFIGURARE (vedi sotto)
│   ├── manifest.json       ← PWA manifest
│   ├── sw.js               ← Service worker (offline)
│   └── icons/              ← Icone app (tutti i formati)
│       ├── icon-192x192.png
│       ├── icon-512x512.png
│       ├── apple-touch-icon.png
│       └── ...
└── vercel.json             ← Configurazione Vercel
```

---

## 1️⃣  Configura Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com)
2. Crea un nuovo progetto (o usa uno esistente)
3. Attiva **Realtime Database** → "Inizia in modalità test"
4. Vai in **Impostazioni progetto → Le tue app → Aggiungi app → Web**
5. Copia il blocco `firebaseConfig` e incollalo in `public/firebase-config.js`

```js
// public/firebase-config.js
export const firebaseConfig = {
  apiKey:            "AIza...",
  authDomain:        "il-tuo-progetto.firebaseapp.com",
  databaseURL:       "https://il-tuo-progetto-default-rtdb.firebaseio.com",
  projectId:         "il-tuo-progetto",
  storageBucket:     "il-tuo-progetto.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

6. In Firebase Console → **Realtime Database → Regole**, incolla:
```json
{
  "rules": {
    "spese":     { ".read": true, ".write": true },
    "checklist": { ".read": true, ".write": true }
  }
}
```

---

## 2️⃣  Deploy su Vercel

### Opzione A — Vercel CLI (consigliata)
```bash
npm install -g vercel
cd japan-tour-2026
vercel
# segui le istruzioni → scegli il progetto → deploy!
```

### Opzione B — Vercel Dashboard (drag & drop)
1. Vai su [vercel.com](https://vercel.com)
2. "New Project" → "Upload" oppure connetti GitHub
3. Trascina la cartella `japan-tour-2026`
4. Vercel riconosce `vercel.json` automaticamente
5. Deploy → ottieni URL tipo `japan-tour-2026.vercel.app`

---

## 3️⃣  Aggiungi alla Home (PWA)

### iPhone/iPad (Safari)
1. Apri l'URL in Safari
2. Tap **Condividi** → **"Aggiungi alla schermata Home"**
3. L'app appare con l'icona 🌸 e si apre in fullscreen

### Android (Chrome)
1. Apri l'URL in Chrome
2. Tap **menu (⋮)** → **"Aggiungi alla schermata Home"**
   oppure attendi il banner automatico "Installa app"

---

## 🔒 Note sicurezza

Le regole Firebase sono aperte (chiunque con l'URL può leggere/scrivere).
Per un gruppo privato di amici con URL non pubblico va benissimo.
Se vuoi aggiungere autenticazione in seguito, è possibile con Firebase Auth.

---

## 🌐 Condividi l'URL

Una volta deployato, condividi l'URL Vercel nel gruppo — tutti e 6 vedranno
le spese e la checklist sincronizzate in tempo reale!
