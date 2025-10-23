/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

/* Utilizzo libreria Axios */
for(let i = 0; i < 10; i++){
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((risposta) => {
    //stampo in console la risposta dell'endpoint
    console.log(risposta.data);
    }
  )
}