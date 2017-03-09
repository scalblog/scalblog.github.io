function excuse() {
  
  var fautif = ['chien', 'chat', 'théorie sur pythagore', 'version de Windows', 'iguane', 'navigateur pas vraiment à jour', 'avatar', 'voisin', 'complot autour de  Matrix','artefact', 'double maléfique', 'poisson rouge', 'historique dans Google'];
	var commet = ['a écrasé', 'a remplacé', 'a effacé', 'a altéré', 'a détruit', 'a modifié irrémédiablement', 'a inversé', 'a recyclé', 'a tweeté sur ', 'a recalculé', 'a reparamétré', 'a remis à jour', 'a abandonné', 'a plagié', 'a isolé', 'a volé', 'a trié aléatoirement', 'a renversé de l\'eau sur', 'a perdu', 'a mal interprété', 'a incinéré', 'a fait du tri sélectif sur', 'a caché', 'a reparamétré', 'a mis de côté', 'a mis sur eBay', 'n\'avait pas ajouté en favori sur Facebook', 'n\'a pas aimé sur SnapChat', 'n\'a pas aimé sur Youtube', 'a bu pendant que vous bossiez sur', 'n\'a pas liké', 'a acheté sur Amazon', 'a mal lu'];
	var faute = ['projet', 'navigateur', 'travail', 'session', 'fichier Excel', 'document Word', 'papier', 'contrat', 'tentative de connexion', 'blog', 'article', 'carte mémoire', 'aide en ligne', 'rêve d\'un monde meilleur', 'memento', 'compte-rendu', 'fichier dans le Cloud', 'portfolio', 'commentaire'];

var qui = fautif[Math.round(Math.random()*(fautif.length-1))];
var fait = commet[Math.round(Math.random()*(commet.length-1))];
var quoi = faute[Math.round(Math.random()*(faute.length-1))];

 document.getElementById('excuse').innerHTML = '<p>En fait... c\'est votre ' + qui + ' qui ' + fait + '<br> votre ' + quoi + '.</p>';
}

document.getElementById('generator').addEventListener('click',excuse);
