# 🌸 Japan Tour 2026 — Deploy Guide

## Struttura del progetto

```
japan-tour-2026/
├── public/
│   ├── index.html          ← App principale
│   ├── firebase-config.js  ← ⚠️  DA CONFIGURARE (Firebase)
│   ├── maps-config.js      ← ⚠️  DA CONFIGURARE (Google Maps)
│   ├── manifest.json       ← PWA manifest
│   ├── sw.js               ← Service worker (offline)
│   └── icons/              ← Icone app (tutti i formati)
└── vercel.json             ← Configurazione Vercel
```

---

## 0️⃣  Google Maps API Key (per mappe embedded nelle tappe)

### Perché serve
Ogni giorno dell'itinerario ha una mappa interattiva embedded con i punti
di interesse. Richiede una API key gratuita di Google Maps.
**Senza key i link "Apri in Google Maps" funzionano comunque.**

### Come ottenerla (5 minuti)

1. Vai su [console.cloud.google.com](https://console.cloud.google.com)
2. Crea un nuovo progetto (es. "japan-tour-2026") o selezionane uno esistente
3. Nel menu a sinistra: **API e servizi → Libreria**
4. Cerca **"Maps Embed API"** → clicca → **Abilita**
5. Vai in **API e servizi → Credenziali → Crea credenziali → Chiave API**
6. Copia la chiave generata (inizia con `AIza...`)
7. (Consigliato) Clicca **Modifica chiave** → in "Restrizioni applicazione" scegli
   "Referrer HTTP" → aggiungi il tuo dominio Vercel (`*.vercel.app/*`)

### Inserisci la key nell'app

Apri `public/maps-config.js` e sostituisci il valore:

```js
const MAPS_API_KEY = "AIzaSy...la-tua-key...";
```

### Costo
La Maps Embed API è **gratuita** fino a 28.000 caricamenti/mese.
Per un gruppo di 6 persone è ampiamente sufficiente.

---

## 1️⃣  Configura Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com)
2. Crea un nuovo progetto o usa uno esistente
3. Attiva **Realtime Database** → "Inizia in modalità test"
4. Vai in **Impostazioni progetto → Le tue app → Aggiungi app → Web**
5. Copia il blocco `firebaseConfig` e incollalo in `public/firebase-config.js`

```js
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

6. In Firebase Console → **Realtime Database → Regole**, incolla e pubblica:
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

### Opzione A — Vercel CLI
```bash
npm install -g vercel
cd japan-tour-2026
vercel
```

### Opzione B — Dashboard drag & drop
1. Vai su [vercel.com](https://vercel.com) → New Project → Upload
2. Trascina la cartella `japan-tour-2026`
3. Deploy → ottieni URL tipo `japan-tour-2026.vercel.app`

---

## 3️⃣  Aggiungi alla Home (PWA)

### iPhone/iPad (Safari)
Condividi → "Aggiungi alla schermata Home"

### Android (Chrome)
Menu ⋮ → "Aggiungi alla schermata Home"

---

## 🔄 Aggiornamenti futuri

Ogni volta che modifichi il codice e vuoi forzare l'aggiornamento della
cache su tutti i dispositivi, incrementa il numero di versione in `sw.js`:

```js
const CACHE_NAME = 'japan-tour-2026-v5'; // v4 → v5 → v6...
```

---

## 💴 Tasso di cambio ¥/€

Il tasso viene aggiornato automaticamente all'apertura della sezione Spese
tramite l'API pubblica [Frankfurter](https://www.frankfurter.app) (no key,
gratuita). Se offline, usa il valore di fallback `1¥ = 0.0061€`.

---

## 📶 Funzionamento offline

- **Itinerario, checklist, consigli, info**: funzionano offline dopo il
  primo caricamento (service worker)
- **Spese condivise**: Firebase salva in locale e sincronizza quando
  torna la connessione (Android Chrome ✅ · iOS Safari parziale ⚠️)
- **Mappe**: richiedono connessione (Google Maps embedded)

---

## 🔒 Note sicurezza

Le regole Firebase sono aperte — va bene per un gruppo privato con URL
non pubblico. Se vuoi aggiungere autenticazione, chiedi e lo aggiungiamo.


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
