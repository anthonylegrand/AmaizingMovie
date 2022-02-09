# AmaizingMovie

En tant que jeune duo de l’entreprise ELitCorp (ELC), vous devez créer pour le client AmazingMovie une application mobile qui permettra de consulter les informations de différents films et la déployer sur le Google Play Store.
Vous devez proposer une navigation ergonomique et une bonne expérience utilisateur à travers l’application. 
Grâce à votre expertise vous devrez répondre au cahier des charges et proposer des axes d’amélioration futures pour cette application. 
Pour se faire trois pages seront demandés :

-	La première page permettra de souhaiter la bienvenue à l’utilisateur sur l’application. (Logo, message de bienvenue). 

-	La seconde page contiendra une liste de différents films. Chaque élément de cette liste donnera comme information le titre du film, l’image qui le représente et sa note. Cette page sera en infinite scroll. Et elle aura un filtre qui permettra de rechercher par titre.

-	La troisième page sera une page détail de chaque film. En cliquant sur un élément de la liste, on doit pouvoir récupérer les différentes informations concernant le film sélectionné. (Résumé, date de sortie etc…) 

Vous aurez toutes les données grâce à une API nommé OMDB accessible en suivant le lien suivant : https://developers.themoviedb.org/3/getting-started 

Les technologies attendues :
-	React Native

Pour les livrables, il est attendu un repo de Git pour avoir accès au code source et à votre application.

Bonus :
Ajouter au démarrage une page de connexion Login avec un formulaire comprenant l’e-mail et un mot de passe.
Enregistrer ces informations dans le Async Storage de votre application. Vérifier pour chaque entrée et sortie de page si l’utilisateur est bien connecté sinon bloquer l’accès des autres pages et redirigez-le vers la page Login.

Bonus version 2 :
Donner la possibilité de se connecter en scannant un QR code qui remplira les informations attendues. 
