

        const hamburger = document.querySelector('.hamburger');


        const navMenu = document.querySelector('nav ul');

        const body = document.body;
        // → On récupère le <body> (pour l'overlay)

        // const ul = document.querySelecto("ul");
        // console.log(ul)
        
        // --- ÉTAPE 2 : Écouter le clic sur le hamburger ---
        // addEventListener('click', fonction) = "quand on clique, exécute cette fonction"

        hamburger.addEventListener('click', function() {

            // classList.toggle('active') fonctionne comme un interrupteur :
            // → Si la classe 'active' N'EST PAS là : on l'AJOUTE
            // → Si la classe 'active' EST là : on la RETIRE
            // Résultat : chaque clic bascule entre ouvert et fermé

            hamburger.classList.toggle('active');
            // → Active l'animation hamburger → croix (ou l'inverse)

            navMenu.classList.toggle('open');
            // → Fait glisser le menu dans/hors de l'écran

            body.classList.toggle('menu-open');
            // → Affiche/cache l'overlay sombre derrière le menu

        });


        // --- ÉTAPE 3 : Fermer le menu quand on clique sur un lien ---
        // On sélectionne TOUS les liens avec querySelectorAll (retourne une liste)

        const navLinks = document.querySelectorAll('nav ul li a');

        // forEach = "pour chaque lien, fais ceci"
        navLinks.forEach(function(lien) {

            lien.addEventListener('click', function() {

                // On retire les classes pour fermer le menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
                body.classList.remove('menu-open');

            });

        });


        // --- ÉTAPE 4 : Fermer le menu quand on clique sur l'overlay ---
        // L'overlay est le pseudo-élément ::before du body.
        // Les pseudo-éléments ne sont pas cliquables directement,
        // donc on écoute le clic sur le body lui-même.

        body.addEventListener('click', function(event) {

            // event.target = l'élément exact sur lequel on a cliqué
            // On vérifie si le clic est sur le body (= l'overlay) ET que le menu est ouvert

            if (event.target === body && navMenu.classList.contains('open')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
                body.classList.remove('menu-open');
            }

        });


              /* formulaire */
      document.getElementById("perfumeForm").addEventListener("submit", function(e){
    e.preventDefault();

    let perfume = document.getElementById("perfume").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    let waNumber = "237690470203"; 

    let message =
        "> *Nouvelle demande parfum* %0A%0A" +
        "> Parfum choisi : " + perfume + "%0A" +
        "> Nom : " + name + "%0A" +
        "> Téléphone : " + phone;

    let url = "https://wa.me/" + waNumber + "?text=" + message;

    window.location.href = url;
});
