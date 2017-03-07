function manipulation() {
	
var	action = ['Scannez','Déplacez','Eteignez','Retournez','Découpez','Divisez','Changez','Appuyez sur'];
var objet = 
["l'écran","la télécommande","le bouton Reset","le cable Ethernet","le téléphone","le DSLAM", "le commutateur","l'interrupteur dans la cuisine","la 4G", "la 4K", "le setup dans le cloud","le voyant vert", "le bouton rond","le voyant qui clignote","la petite lumière jaune"];
var comment = ["sans électricité","5 fois de suite très vite","en remettant la box sans son carton d'origine","avec un fil bleu","sans toucher le fil rouge","en soudant un fil vert dessus","à l'aide de piles plates 3VCR1225","maintenant là tout de suite","sans trembler","en comptant jusqu'à 3","dans 5... 4... 3... 2... 1... Allez-y, appuyez"];
  
	var faites = action[Math.round(Math.random()*(action.length-1))];
	var donc = objet[Math.round(Math.random()*(objet.length-1))];
	var ceci = comment[Math.round(Math.random()*(comment.length-1))];
	
document.getElementById('manipulation').innerHTML = '<div>Allez-y -> ' + faites + ' ' + donc + ' ' + ceci + '.</div>'
}

function Excuse() {
	
	var myDog = ['chien', 'chat', 'théorie sur pythagore', 'version de Windows', 'iguane', 'navigateur pas vraiment à jour', 'avatar', 'voisin', 'complot autour de  Matrix','artefact', 'double maléfique', 'poisson rouge', 'historique dans Google'];
	var ate = ['avait écrasé', 'avait remplacé', 'avait effacé', 'avait maladroitement emdommagé', 'a détruit', 'a modifié irrémédiablement', 'avait inversé les données', 'a recyclé', 'avait inteverti deux paramètres dans', 'a recalculé', 'avait reparamétré', 'avait remis à jour', 'a abandonné', 'avait plagié', 'avait isolé', 'avait volé', 'avait trié aléatoirement', 'avait renversé de l\'eau sur', 'avait perdu', 'avait mal interprété', 'avait incinéré', 'avait fait du tri sélectif sur', 'avait caché', 'avait reparamétré', 'avait mis de côté', 'avait mis sur eBay', 'avait ajouté en favori sur Facebook', 'avait mis sur SnapChat', 'avait mis sur Youtube', 'a bu pendant que vous bossiez sur', 'n\'a pas liké', 'avait acheté sur Amazon'];
	var myHomework = ['projet', 'navigateur', 'travail', 'session', 'fichier Excel', 'document Word', 'fichier de démarrage', 'base de données', 'tentative de connexion', 'blog', 'dossier', 'carte mémoire', 'rêve d\'un monde meilleur', 'fichier dans le Cloud'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
  
  document.getElementById('excuses').innerHTML = '<div>En fait, c\'est votre ' + who + '<br>qui ' + did + '<br>votre ' + what + '.</div>'
	
}

