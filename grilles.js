// ═══════════════════════════════════════════════════════════════
// GRILLES — Mots Croisés Immobilier Guy Hoquet Saint-Omer
// Pour ajouter une grille : copier le bloc et remplir les données
// (générées et validées via le skill Claude "mots-croises-immo")
// ═══════════════════════════════════════════════════════════════
const GRILLES = [
  {
    id: "immo-12x12-01",
    titre: "Spécial Immobilier",
    taille: 12,
    // Solution complète : "ligne-colonne": "LETTRE" (les autres cases = noires)
    solution: {
      "0-1":"M","0-8":"B",
      "1-1":"A","1-4":"C","1-8":"I",
      "2-1":"N","2-2":"O","2-3":"T","2-4":"A","2-5":"I","2-6":"R","2-7":"E","2-8":"S",
      "3-1":"D","3-4":"D","3-11":"P",
      "4-1":"A","4-3":"B","4-4":"A","4-5":"I","4-6":"L","4-11":"R",
      "5-0":"E","5-1":"T","5-2":"E","5-4":"S","5-7":"O","5-8":"F","5-9":"F","5-10":"R","5-11":"E",
      "6-4":"T","6-7":"U","6-11":"T",
      "7-4":"R","7-7":"V","7-10":"E",
      "8-0":"V","8-1":"I","8-2":"A","8-3":"G","8-4":"E","8-5":"R","8-7":"R","8-8":"E","8-9":"N","8-10":"T","8-11":"E",
      "9-0":"I","9-7":"E","9-10":"A",
      "10-0":"T","10-1":"A","10-2":"U","10-3":"X","10-8":"L","10-9":"O","10-10":"G","10-11":"E",
      "11-0":"E","11-10":"E"
    },
    nums: {"0-1":1,"0-8":2,"1-4":3,"2-1":4,"3-11":5,"4-3":6,"5-0":7,"5-7":8,"7-10":9,"8-0":10,"8-7":11,"10-0":12,"10-8":13},
    defsH: [
      {num:4,  txt:"Officiers publics qui authentifient les ventes", len:8},
      {num:6,  txt:"Contrat entre propriétaire et locataire", len:4},
      {num:7,  txt:"Saison préférée des déménagements", len:3},
      {num:8,  txt:"Proposition d'achat remise au vendeur", len:5},
      {num:10, txt:"Vente payée jusqu'au décès du vendeur", len:6},
      {num:11, txt:"Revenu versé à intervalles réguliers", len:5},
      {num:12, txt:"Il fait varier les mensualités du crédit", len:4},
      {num:13, txt:"Petit appartement du gardien d'immeuble", len:4}
    ],
    defsV: [
      {num:1,  txt:"Contrat qui confie la vente à une agence", len:6},
      {num:2,  txt:"Il complète parfois le numéro de la rue", len:3},
      {num:3,  txt:"Registre officiel des parcelles d'une commune", len:8},
      {num:5,  txt:"Somme avancée par la banque pour l'achat", len:4},
      {num:8,  txt:"Permettre l'accès à un lieu", len:5},
      {num:9,  txt:"Niveau desservi par l'escalier", len:5},
      {num:10, txt:"Comment partent les biens bien placés !", len:4}
    ],
    solutionsTexte: {
      h: "4. NOTAIRES · 6. BAIL · 7. ÉTÉ · 8. OFFRE · 10. VIAGER · 11. RENTE · 12. TAUX · 13. LOGE",
      v: "1. MANDAT · 2. BIS · 3. CADASTRE · 5. PRÊT · 8. OUVRE · 9. ÉTAGE · 10. VITE"
    }
  }
];
