
var produits = [
    { id: 1, prixUnitaire: 3699, quantite: 0 },
    { id: 2, prixUnitaire: 4699 ,quantite: 0 },
    { id: 3, prixUnitaire: 4099, quantite: 0 },
    { id: 4, prixUnitaire: 5849, quantite: 0 },
    { id: 5, prixUnitaire: 6200, quantite: 0 }
  
  ];

  function toggleCoeur(produitId) {
    var coeurElement = document.getElementById(`produit${produitId}`).querySelector('.coeur');
    coeurElement.classList.toggle("clicked");
    updateTotalAchats();
  }

  function incrementer(produitId) {
    var quantiteElement = document.getElementById(`quantiteProduit${produitId}`);
    quantiteElement.textContent = ++produits[produitId - 1].quantite;
    updateTotalAchats();
  }

  function decrementer(produitId) {
    var quantiteElement = document.getElementById(`quantiteProduit${produitId}`);
    var quantite = produits[produitId - 1].quantite;
    if (quantite > 0) {
      quantiteElement.textContent = --produits[produitId - 1].quantite;
      updateTotalAchats();
    }
  }

  function supprimerProduit(produitId) {
    var produitDiv = document.getElementById(`produit${produitId}`);
    produitDiv.parentNode.removeChild(produitDiv);
    updateTotalAchats();
  }

  function updateTotalAchats() {
    var totalAchatsElement = document.getElementById("totalAchatsValeur");
    var totalAchats = produits.reduce(function (total, produit) {
      var quantite = produit.quantite;
      var prixUnitaire = produit.prixUnitaire;
      var totalProduit = quantite * prixUnitaire;

      // Mettez à jour le total du produit dans l'interface
      document.getElementById(`totalProduit${produit.id}`).textContent = totalProduit;

      return total + totalProduit;
    }, 0);

    totalAchatsElement.textContent = totalAchats;
  }
 