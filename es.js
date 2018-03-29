var inv1 = {
  'nome': 'Fabio',
  'tavolo': 45,
}
var inv2 = {
  'nome': 'Ervin',
  'tavolo': 45,
}
var inv3 = {
  'nome': 'Loana',
  'tavolo': 4,
}
var inv4 = {
  'nome': 'Ale',
  'tavolo': 23,
}

var invitati = [inv1,inv2,inv3,inv4]//array lista del DB
var lista = document.getElementById('lista-invitati')// variabile lista che è uguale all'elemento ID 'lista invitati'
for (var i = 0; i < invitati.length; i++) {
  lista.innerHTML+="<li class='invitato'>"+invitati[i].nome + ' tavolo ' + invitati[i].tavolo+'</li>' //lista.innerHTML+= (lista.innerHTML = lista.innerHTML+)
}

var cerca = document.getElementById('cerca');
cerca.addEventListener('click', findInvitato);//addEventListener('click') = succede qualcosa al click
function findInvitato() {
  var ricercato = document.getElementById('input').value;
  var lis = document.getElementById('lista-invitati').childNodes; //.childNodes = i figli di lista invitati
  for (var i = 0; i < lis.length; i++) {
    lis[i].className="" //in questo modo quando riparte il ciclo si toglie lo sfondo verde
    var ris = lis[i].innerHTML.toLowerCase().search(ricercato); //search controlla che ci sia il valore che andrà inserito; toLowerCase porta tutto a minuscolo
    if (ris>=0) {
      lis[i].className= 'admitted' //aggiunto la classe css admitted che mette lo sfondo verdino

    }

  }

}
