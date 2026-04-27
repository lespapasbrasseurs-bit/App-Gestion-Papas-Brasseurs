// Trimmed real data from the existing app
window.BREWERY_DATA = {
  user: { name: "Gabriel", initials: "GP" },
  today: { date: "27 avril 2026", weekday: "Lundi" },
  // KPIs
  kpis: {
    volumeMois: 8420,        // L brassés ce mois
    brassinsActifs: 4,
    stockAlerts: 7,
    locationsSemaine: 12,
  },
  // Hero: brassin en cours
  hero: {
    recette: "L'Impèrtinente",
    style: "APA",
    statut: "Fermentation",
    fermenteur: "FV-02",
    jour: 6,
    jourTotal: 14,
    abv: 6.0,
    ibu: 35,
    og: 1.049,
    fg: 1.012,
    volume: 1629,
    nextAction: "Dry hop J+8",
    color: "#E8A020",
  },
  // Brassins en cours (compact)
  brassins: [
    { id: 30, recette: "L'Impèrtinente", style: "APA", statut: "fermentation", fermenteur: "FV-02", jour: 6, jourTotal: 14, color: "#E8A020" },
    { id: 31, recette: "Comère", style: "Session", statut: "fermentation", fermenteur: "FV-03", jour: 4, jourTotal: 12, color: "#C8820A" },
    { id: 32, recette: "La Supère", style: "Triple", statut: "garde", fermenteur: "FV-04", jour: 9, jourTotal: 21, color: "#B8862A" },
    { id: 33, recette: "La Pèrilleuse", style: "Ambrée", statut: "fermentation", fermenteur: "FV-05", jour: 11, jourTotal: 14, color: "#A03828" },
    { id: 34, recette: "La Blonde des Papas", style: "Blonde", statut: "brassage", fermenteur: "FV-01", jour: 0, jourTotal: 14, color: "#E8A020" },
  ],
  // Recettes featured
  recettes: [
    { id: 1, nom: "L'Impèrtinente", style: "APA", abv: 6.0, ibu: 35, srm: 5,  prix33: 1.80, color: "#E8A020", tag: "Rockstar" },
    { id: 2, nom: "La Pèrchée",     style: "Blanche", abv: 4.5, ibu: 15, srm: 3,  prix33: 1.80, color: "#F2E8D5", tag: "Lunaire" },
    { id: 3, nom: "La Pèrilleuse",  style: "Ambrée", abv: 6.0, ibu: 28, srm: 18, prix33: 1.80, color: "#A03828", tag: "Caramel" },
    { id: 4, nom: "La Pèrlimpinpin",style: "IPA", abv: 6.5, ibu: 60, srm: 7,  prix33: 1.80, color: "#D89018", tag: "Alchimie" },
    { id: 5, nom: "La Supère",      style: "Triple", abv: 8.5, ibu: 22, srm: 6,  prix33: 1.80, color: "#C8AA40", tag: "Puissante" },
    { id: 6, nom: "La Blonde des Papas", style: "Blonde", abv: 5.0, ibu: 25, srm: 7, prix33: 1.80, color: "#F0C040", tag: "Limpide" },
    { id: 7, nom: "La Mèrveilleuse",style: "NEIPA", abv: 6.0, ibu: 45, srm: 5,  prix33: 1.96, color: "#FFD060", tag: "Tropical" },
    { id: 9, nom: "La Mary'Stout",  style: "Brune", abv: 6.0, ibu: 45, srm: 45, prix33: 1.96, color: "#2A1810", tag: "Torréfié" },
  ],
  // Stock — pivot par catégorie
  stockCategories: [
    { cat: "Malt", count: 14, totalKg: 3023, alerts: 2, color: "#C8820A" },
    { cat: "Houblon", count: 19, totalKg: 268, alerts: 3, color: "#4A6741" },
    { cat: "Levure", count: 15, totalKg: 31, alerts: 1, color: "#8B3A2A" },
    { cat: "Épice", count: 4, totalKg: 13, alerts: 0, color: "#7A8B3C" },
    { cat: "Sucre", count: 1, totalKg: 411, alerts: 0, color: "#9B8B6E" },
  ],
  stockItems: [
    { nom: "Pilsen",        cat: "Malt",    qte: -177.5, u: "kg",   seuil: 80, level: "error" },
    { nom: "Pale",          cat: "Malt",    qte: 1362.5, u: "kg",   seuil: 100, level: "ok" },
    { nom: "Blé",           cat: "Malt",    qte: -150.0, u: "kg",   seuil: 50, level: "error" },
    { nom: "Cara 240",      cat: "Malt",    qte: 151.5,  u: "kg",   seuil: 20, level: "ok" },
    { nom: "Mosaic",        cat: "Houblon", qte: 56.05,  u: "kg",   seuil: 5,  level: "ok" },
    { nom: "Cascade",       cat: "Houblon", qte: 30.9,   u: "kg",   seuil: 5,  level: "ok" },
    { nom: "Citra",         cat: "Houblon", qte: 35.35,  u: "kg",   seuil: 5,  level: "ok" },
    { nom: "Simcoe",        cat: "Houblon", qte: 0.0,    u: "kg",   seuil: 2,  level: "critical" },
    { nom: "Barbe rouge",   cat: "Houblon", qte: -0.1,   u: "kg",   seuil: 1,  level: "error" },
    { nom: "Nottingham",    cat: "Levure",  qte: 9.5,    u: "sach", seuil: 4,  level: "ok" },
    { nom: "Best coast hazy",cat:"Levure",  qte: 0.0,    u: "sach", seuil: 1,  level: "critical" },
    { nom: "Coriandre",     cat: "Épice",   qte: 2.8,    u: "kg",   seuil: 0.5,level: "ok" },
    { nom: "Sucre",         cat: "Sucre",   qte: 411.07, u: "kg",   seuil: 20, level: "ok" },
  ],
  // Planning brassage (semaine)
  planning: [
    { date: "27/04", jour: "Lun", recette: "La Blonde des Papas", cuve: "C1",  type: "Brassage" },
    { date: "30/04", jour: "Jeu", recette: "COLLAB26",            cuve: "C2",  type: "Embouteillage" },
    { date: "04/05", jour: "Lun", recette: "La Pèrlimpinpin",     cuve: "C2",  type: "Brassage" },
    { date: "06/05", jour: "Mer", recette: "La Blonde des Papas", cuve: "??",  type: "Brassage" },
    { date: "07/05", jour: "Jeu", recette: "La Blonde des Papas", cuve: "C3",  type: "Enfutage" },
    { date: "11/05", jour: "Lun", recette: "La Habemouss Papa",   cuve: "C3",  type: "Brassage" },
    { date: "12/05", jour: "Mar", recette: "La Queen Bee",        cuve: "C5",  type: "Embouteillage" },
  ],
  // Locations tireuses
  tireuses: [
    { id: 1, nom: "1BEC 1", label: "1 Bec",  becs: 1, type: "petite",     color: "#D4920E" },
    { id: 2, nom: "1BEC 2", label: "1 Bec",  becs: 1, type: "petite",     color: "#D4920E" },
    { id: 3, nom: "1BEC 3", label: "1 Bec",  becs: 1, type: "petite",     color: "#D4920E" },
    { id: 4, nom: "2BEC 1", label: "2 Becs", becs: 2, type: "petite",     color: "#3A6830" },
    { id: 5, nom: "2BEC 2", label: "2 Becs", becs: 2, type: "petite",     color: "#3A6830" },
    { id: 6, nom: "2BARI",  label: "2 Bari", becs: 2, type: "barillet",   color: "#5A6E28" },
    { id: 7, nom: "2BCF",   label: "2 BCF",  becs: 2, type: "banc_glace", color: "#2A5A80" },
    { id: 8, nom: "2BCG",   label: "2 BCG",  becs: 2, type: "banc_glace", color: "#7A3A6A" },
  ],
  locations: [
    { client: "MALLET Clement",       date: "29/04 → 06/05", tireuse: "2BEC 1",    futs: 2, statut: "confirmée" },
    { client: "Julien Audreno",       date: "30/04 → 04/05", tireuse: "1BEC 1",    futs: 2, statut: "confirmée" },
    { client: "BOSSIS Antoine",       date: "30/04 → 04/05", tireuse: "2BCF",      futs: 0, statut: "confirmée" },
    { client: "APE Pré vert Baptiste",date: "30/04 → 04/05", tireuse: "1BEC 2",    futs: 0, statut: "confirmée" },
    { client: "FRATTI Stéphane",      date: "30/04 → 04/05", tireuse: "1BEC 3",    futs: 1, statut: "confirmée" },
    { client: "Lanohé Martin",        date: "30/04 → 04/05", tireuse: "2BCG",      futs: 3, statut: "en attente" },
    { client: "Yann Picool",          date: "30/04 → 04/05", tireuse: "2BARI",     futs: 2, statut: "confirmée" },
    { client: "1BEC CO2 BOUILLON",    date: "07/05 → 11/05", tireuse: "Multiple",  futs: 51,statut: "confirmée" },
    { client: "HERVY Odile",          date: "07/05 → 11/05", tireuse: "2BEC 2",    futs: 2, statut: "confirmée" },
  ],
};
