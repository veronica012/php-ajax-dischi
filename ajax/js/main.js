$(document).ready(function(){
    //chiamata ajax per recuperare l'array di dischi dal file lista_dischi.php che si trova in database
    //l'array contiene 10 oggetti
    $.ajax({
        'url': 'database/lista_dischi.php',
        'method': 'GET',
        'success': function(dischi) {
            disegnaDisco(dischi);
            // console.log(dischi);
        } ,
        'error': function() {
            alert('Errore');
        }
    }); //fine chiamata ajax
    
//FUNZIONI
function disegnaDisco(array) {

    var template_html = $('#entry-template').html();
    var template_function = Handlebars.compile(template_html);
    var data = {
        'poster': '',
        'titolo': '',
        'autore': '',
        'genere': '',
        'anno':''
    }
    for (var i = 0; i < array.length; i++) {
        var elemento_corrente = array[i];
        data.poster = elemento_corrente.poster;
        data.titolo = elemento_corrente.title;
        data.genere = elemento_corrente.genre;
        data.anno = elemento_corrente.year;
        var html_finale = template_function(data);
        $('.container-dischi').append(html_finale);
    } //fine ciclo for

} //fine funzione

});
//esercizio svolto senza handlebars
// for (var i = 0; i < dischi.length; i++) {
// //recupero il disco corrente
//     var disco_corrente = dischi[i];
// //creo la card
// var disco = $('<div class="disco"></div>');
// //append dell'immagine
// disco.append('<img src="'+ disco_corrente.poster + '" alt="">');
// //append del titolo
// disco.append('<h5 class="titolo">' + disco_corrente.title +'</h5>');
// //append dell'autore
// disco.append('<p class="card-text">'+ disco_corrente.author +'</p>');
// //append del genere
// disco.append('<p class="card-text">'+ disco_corrente.genre +'</p>');
// //append dell'anno
// disco.append('<p class="card-text">'+ disco_corrente.year +'</p>');
// //di ogni disco recupero il valore delle chiavi con la dot notation
//     // var poster = disco_corrente.poster;
//     // // console.log(poster);
//     // var titolo = disco_corrente.title;
//     // console.log(titolo);
//     // var autore = disco_corrente.author;
//     // console.log(autore);
//     // var genere = disco_corrente.genre;
//     // console.log(genere);
//     // var anno = disco_corrente.year;
//     // console.log(anno);
//     $('.container-dischi').append(disco);
// }
