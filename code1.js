function ouvrirLienProtege1(event, url) {
            event.preventDefault(); // Empêche l'ouverture automatique du lien

            const codeCorrect = "1234"; // Code secret à définir
            const saisie = prompt("Entrez le code pour accéder au lien :");

            if (saisie === null) {
                alert("Action annulée.");
                return;
            }

            if (saisie === codeCorrect) {
                window.open(url, "_blank"); // Ouvre dans un nouvel onglet
            } else {
                alert("Code incorrect. Accès refusé.");
            }
        }

function ouvrirLienProtege2(event, url) {
            event.preventDefault(); // Empêche l'ouverture automatique du lien

            const codeCorrect = "2345"; // Code secret à définir
            const saisie = prompt("Entrez le code pour accéder au lien :");

            if (saisie === null) {
                alert("Action annulée.");
                return;
            }

            if (saisie === codeCorrect) {
                window.open(url, "_blank"); // Ouvre dans un nouvel onglet
            } else {
                alert("Code incorrect. Accès refusé.");
            }
        }
