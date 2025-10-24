/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// seleziono l'elemento della DOM
const listElement = document.getElementById("mail-list");
const buttonElement = document.getElementById("reset-list");

// creo una variabile vuota
let items = "";

// ciclo per 10 volte così da generare 10 risposte
for(let i = 0; i < 10; i++){
// Utilizzo libreria Axios per
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((risposta) => {
    const object = risposta.data;
    //stampo in console la risposta dell'endpoint, il tipo per controllare se funziona
    console.log("Prova:", typeof object, object);
    // concateno i list items
    items += `<li>${object.response}</li>`;
    // modifico il markup con i list items
    listElement.innerHTML = items;
  }
  )
}

buttonElement.addEventListener("click", () => {
  listElement.innerHTML = "";
  for(let i = 0; i < 10; i++){
  // Utilizzo libreria Axios per
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((risposta) => {
      const object = risposta.data;
      //stampo in console la risposta dell'endpoint, il tipo per controllare se funziona
      console.log("Prova:", typeof object, object);
      // concateno i list items
      items = `<li>${object.response}</li>`;
      // modifico il markup con i list items
      listElement.innerHTML += items;
    }
    )
  }
})