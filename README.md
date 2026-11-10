# Portfolio – Quentin Jofroix

Site statique (HTML, CSS, JavaScript), sans PHP ni base de données.

## Structure

```
index.html              Accueil
me-connaitre.html       Me connaître
projets.html            Mes projets
contact.html            Me contacter
mentions-legales.html   Mentions légales
confidentialite.html    Politique de confidentialité
projets/                Une page par projet (9 fichiers)
assets/css/style.css    Toute la mise en forme (couleurs et polices en haut du fichier)
assets/js/main.js       Animations au défilement et menu mobile
assets/fonts/           Climate Crisis et Outfit (hébergées sur le site)
assets/img/             Images (à ajouter)
assets/cv/              CV en PDF
vercel.json             Configuration Vercel (adresses sans « .html »)
```

## Modifier un texte

Ouvre le fichier HTML de la page et modifie directement le texte entre les balises.

## Ajouter une image

Les emplacements gris sont des balises comme celle-ci :

```html
<div class="media media--placeholder" role="img" aria-label="Photo de Quentin Jofroix" data-label="Photo de Quentin Jofroix"></div>
```

1. Place l'image dans `assets/img/` (format `.webp` ou `.jpg` de préférence).
2. Remplace la balise par :

```html
<div class="media"><img src="assets/img/photo.webp" alt="Photo de Quentin Jofroix" width="668" height="668" loading="lazy"></div>
```

Dans les pages du dossier `projets/`, écris `../assets/img/...`.
Pour une vidéo YouTube, mets l'iframe à la place de `<img>`.

## Remplacer le CV

Remplace `assets/cv/CV-Quentin-Jofroix.pdf` par la nouvelle version en gardant le même nom.

## Mettre en ligne sur Vercel

1. Crée un dépôt GitHub et envoie-y ce dossier.
2. Sur vercel.com : **Add New → Project**, importe le dépôt.
3. Framework Preset : **Other**. Aucune commande de build. Clique sur **Deploy**.

Chaque modification envoyée sur GitHub met le site à jour automatiquement.
