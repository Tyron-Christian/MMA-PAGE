let table1 = [
    prima = {evento : "UFC 128", avversario : "SHOGUN RUA", metodo: "KO"},
    {evento : "UFC 135", avversario : "RAMPAGE JACKSON", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 140", avversario : "LYOTO MACHIDA", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 145", avversario : "RASHAD EVANS", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 152", avversario : "VITOR BELFORT", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 214", avversario : "DANIEL CORMIER", metodo: "TKO"},
    {evento : "UFC 232", avversario : "ALEXANDER GUSTAFSSON", metodo: "TKO"}
];

function loodtable(table1){ // aggiorna i parametri
    const tablebody = document.getElementById('data1');
    let datahtml = "";

     table1.forEach(element => {
        datahtml += `<tr><td>${element.evento}</td><td>${element.avversario}</td><td>${element.metodo}</td></tr>`;
     });
        // INSERIMENTO DEI VALORI NELLE TABELLE
        tablebody.innerHTML = datahtml; // aggiornare sempre il nome della var in cui si scrivono i dati!

       // indici colori if esito == vincente = lightgreen; if esito == perdente = lightcoral
    }


// SEZIONE CARICAMENTO FUNZIONE
loodtable(table1) // aggiorna i parametri
