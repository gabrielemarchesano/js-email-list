/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

/* Utilizzo libreria Axios */

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((risposta) => {
    //stampo in console la risposta dell'endpoint
    console.log(risposta);        
  })