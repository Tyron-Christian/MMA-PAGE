let table1 = [
    prima = {evento : "UFC 128", avversario : "SHOGUN RUA", metodo: "KO"},
    {evento : "UFC 135", avversario : "RAMPAGE JACKSON", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 140", avversario : "LYOTO MACHIDA", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 145", avversario : "RASHAD EVANS", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 152", avversario : "VITOR BELFORT", metodo: "SOTTOMISSIONE"},
    {evento : "UFC 214", avversario : "DANIEL CORMIER", metodo: "TKO"},
    {evento : "UFC 232", avversario : "ALEXANDER GUSTAFSSON", metodo: "TKO"}
];

let table2 = [
    prima = {evento : "UFC 235", avversario : "TYRON WOODLEY", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 245", avversario : "COLBY COVINGTON", metodo: "TKO "},
    {evento : "UFC 258", avversario : "GILBERT BURNS", metodo: "TKO "},
    {evento : "UFC 261", avversario : "JORGE MASVIDAL", metodo: "KO"},
];

let table3 = [
    prima = {evento : "UFC 236", avversario : "KEVIN GASTELUM", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 243", avversario : "ROBERT WHITTAKER", metodo: "TKO"},
    {evento : "UFC 248", avversario : "YOEL ROMERO  ", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 253", avversario : "PAULO COSTA", metodo: "TKO"},
    {evento : "UFC 263", avversario : "MARVIN VETTORI", metodo: "DECISIONE UNANIME"},
];

let table4 = [
    prima = {evento : "UFC 237", avversario : "JOSE ALDO", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 245", avversario : "MAX HOLLOWAY", metodo: "DECISIONE UNANIME"},
    {evento : "UFC 251", avversario : "MAX HOLLOWAY", metodo: "DECISIONE NON UNANIME"},
    {evento : "UFC 266", avversario : "BRIAN ORTEGA", metodo: "DECISIONE UNANIME"},
];

let table5 = [
    prima = {evento : "UFC 218", avversario : "ALISTAIR OVEREEM", metodo: "KO"},
    {evento : "UFC NIGHT", avversario : "CURTIS BLAYDES", metodo: "TKO"},
    {evento : "UFC NIGHT", avversario : "CAIN VELAZQUEZ", metodo: "KO"},
    {evento : "UFC 260", avversario : "STIPE MIOCIC 2 ", metodo: "KO"},
];


function loodtable(table1,table2,table3,table4,table5){ // aggiorna i parametri
    const tablebody = document.getElementById('data1');
    const tabellanumero2 = document.getElementById('data2');
    const tabellanumero3 = document.getElementById('data3');
    const tabellanumero4 = document.getElementById('data4');
    const tabellanumero5 = document.getElementById('data5');
    let datahtml = "";
    let scrivikamaru = "";
    let scriviizzy = "";
    let scrivialex = "";
    let scrivinga = "";

     table1.forEach(element => {
        datahtml += `<tr><td>${element.evento}</td><td>${element.avversario}</td><td>${element.metodo}</td></tr>`;
     });

     table2.forEach(lol => {
        scrivikamaru += `<tr><td>${lol.evento}</td><td>${lol.avversario}</td><td>${lol.metodo}</td></tr>`;
     });

     table3.forEach(izzy => {
        scriviizzy += `<tr><td>${izzy.evento}</td><td>${izzy.avversario}</td><td>${izzy.metodo}</td></tr>`;
     });

     table4.forEach(alex => {
        scrivialex += `<tr><td>${alex.evento}</td><td>${alex.avversario}</td><td>${alex.metodo}</td></tr>`;
     });

     table5.forEach(nga => {
        scrivinga += `<tr><td>${nga.evento}</td><td>${nga.avversario}</td><td>${nga.metodo}</td></tr>`;
     });
        // INSERIMENTO DEI VALORI NELLE TABELLE
        tablebody.innerHTML = datahtml; // aggiornare sempre il nome della var in cui si scrivono i dati!
        tabellanumero2.innerHTML = scrivikamaru;
        tabellanumero3.innerHTML = scriviizzy;
        tabellanumero4.innerHTML= scrivialex;
        tabellanumero5.innerHTML = scrivinga;
       // indici colori if esito == vincente = lightgreen; if esito == perdente = lightcoral
    }


// SEZIONE CARICAMENTO FUNZIONE
loodtable(table1,table2,table3,table4,table5) // aggiorna i parametri
