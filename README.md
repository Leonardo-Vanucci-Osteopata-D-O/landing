# Leonardo Vanucci — Osteopata | Landing page

Landing page in italiano per lo studio di osteopatia di Leonardo Vanucci, pronta per essere pubblicata con GitHub Pages.

## Contenuto della pagina

- Hero con invito a prenotare su WhatsApp
- Sezione "Chi sono"
- Sezione "Servizi"
- Galleria a carosello (illustrazioni segnaposto, vedi sotto)
- Mappa Google incorporata + link alla scheda Google
- Sezione contatti: WhatsApp, Instagram, LinkedIn, e-mail
- Pulsante WhatsApp flottante sempre visibile

## Struttura

```
index.html
css/style.css
js/main.js
```

## Anteprima in locale

Basta aprire `index.html` nel browser, oppure servire la cartella con un server statico, ad es.:

```bash
python3 -m http.server 8000
```

e visitare `http://localhost:8000`.

## Pubblicare con GitHub Pages

1. Fai push di questi file sul branch `master`.
2. Su GitHub vai in **Settings → Pages**.
3. In "Build and deployment" scegli **Deploy from a branch**, branch `master`, cartella `/ (root)`.
4. Salva: la pagina sarà disponibile all'indirizzo indicato da GitHub (in genere `https://<org>.github.io/<repo>/`).

## Da personalizzare

- **Immagini della galleria**: al momento sono illustrazioni SVG segnaposto (nessuna foto reale è stata fornita). Sostituiscile con foto vere dello studio in `images/` e aggiorna i tag `<figure>` in `index.html` (sezione "GALLERIA").
- **Testi dei servizi**: nella sezione "Servizi" i contenuti sono generici, da rivedere in base ai trattamenti realmente offerti.
- **Mappa**: la mappa incorporata usa una ricerca per nome studio; se disponi dell'indirizzo esatto, aggiorna il parametro `q=` nell'iframe in `index.html` (sezione "DOVE SIAMO") per centrare la mappa con precisione.
