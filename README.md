# 🔤 Mots Croisés Immobilier — Guy Hoquet Saint-Omer

Application web de mots croisés sur le thème de l'immobilier, aux couleurs de l'agence.
100 % statique : aucun serveur, aucune dépendance — fonctionne directement sur GitHub Pages.

## ✨ Fonctionnalités

- 🎮 **Jouable à l'écran** : saisie clavier, navigation aux flèches, retour arrière intelligent
- 💾 **Progression sauvegardée** automatiquement (localStorage, par grille)
- ✔ **Vérification** : cases justes en vert, erreurs en rouge, score affiché
- 🎆 **Grille parfaite = feu d'artifice !** Dès la dernière case juste remplie, un écran
  « 🏆 BRAVO ! » apparaît avec un feu d'artifice animé (détection automatique, pas besoin
  de cliquer sur Vérifier). Pas de triche : le bouton 👁 Solution ne déclenche rien 😉
- 👁 **Révéler la solution** d'un clic
- 🖨 **Impression / PDF** : grille vierge en A4, solutions imprimées à l'envers en bas de page
- 📱 **Responsive** : la grille s'adapte automatiquement sur mobile
- 🗂 **Multi-grilles** : un sélecteur apparaît dès qu'il y a plusieurs grilles

## 🏷 Ajouter le logo Guy Hoquet

Déposez simplement votre fichier **`logo.png`** à la racine du dépôt (à côté de `index.html`).
Il remplacera automatiquement le texte « GUY HOQUET / L'IMMOBILIER » dans l'en-tête.
- Conseillé : logo **blanc sur fond transparent** (PNG), car l'en-tête est bleu marine
- Hauteur affichée : max 54 px (le fichier peut être plus grand, il sera redimensionné)
- Sans fichier `logo.png`, l'app affiche le texte — rien ne casse

## 🚀 Déploiement sur GitHub Pages

1. Créer un nouveau dépôt (ex. `mots-croises-immo`)
2. Y déposer les fichiers : `index.html`, `grilles.js`, `manifest.json`, `README.md` (+ `logo.png`)
3. Aller dans **Settings → Pages**
4. Source : **Deploy from a branch** → branche `main` → dossier `/ (root)` → **Save**
5. L'app sera en ligne sous : `https://VOTRE-PSEUDO.github.io/mots-croises-immo/`

## ➕ Ajouter une nouvelle grille

Les grilles vivent dans `grilles.js`, dans le tableau `GRILLES`. Chaque grille est un objet :

```js
{
  id: "identifiant-unique",
  titre: "Titre affiché",
  taille: 12,                       // 9, 12, 15… (grille N×N)
  solution: { "ligne-colonne": "LETTRE", ... },   // les cases absentes = noires
  nums: { "ligne-colonne": numéro, ... },          // numérotation des départs de mots
  defsH: [ { num: 4, txt: "Définition…", len: 8 }, ... ],
  defsV: [ ... ],
  solutionsTexte: { h: "4. MOT · 6. MOT…", v: "1. MOT…" }
}
```

⚠️ Une grille doit être **construite et validée** avant d'être ajoutée (intersections
vérifiées, aucune séquence parasite). Le plus simple : demander à Claude
*« fais-moi une nouvelle grille 9×9 spéciale location pour l'app GitHub »* — le skill
`mots-croises-immo` génère le bloc JS prêt à coller.

## 🎨 Personnalisation

Les couleurs sont des variables CSS en tête de `index.html` :

```css
:root {
  --bleu: #1A2E5A;       /* bleu marine (header, cases noires) */
  --bleu-ciel: #4A90D9;  /* bandeau titre, bloc Verticalement */
  --bleu-clair: #7BB8F0; /* accents */
  --fond: #EEF3FB;       /* fonds des blocs */
}
```

---

Réalisé avec Claude · Guy Hoquet l'Immobilier Saint-Omer
