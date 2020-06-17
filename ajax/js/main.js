$(document).ready(function(){
    //chiamata ajax per recuperare l'array di dischi dal file lista_dischi.php che si trova in database
    //l'array contiene 10 oggetti
    $.ajax({
        'url': 'database/lista_dischi.php',
        'method': 'GET',
        'success': function(dischi) {
            // console.log(dischi);
            for (var i = 0; i < dischi.length; i++) {
            //recupero il disco corrente
                var disco_corrente = dischi[i];
                // console.log(disco_corrente);
            //di ogni disco recupero il valore delle chiavi con la dot notation
                var poster = disco_corrente.poster;
                // console.log(poster);
                var titolo = disco_corrente.title;
                // console.log(titolo);
                var autore = disco_corrente.author;
                // console.log(autore);
                var genere = disco_corrente.genre;
                // console.log(genere);
                var anno = disco_corrente.year;
                // console.log(anno);
            }

        } ,
        'error': function() {
            alert('Errore');
        }

    }); //fine chiamata ajax

});
