<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <link rel="stylesheet" href="dist/app.css">
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png" alt="">
            </div>
            <div class="genere-musicale">
                <select class="" name="">
                    <option value="">Tutti i generi</option>
                </select>
            </div>
        </header>
        <div class="container-dischi"></div>
        <script id="entry-template" type="text/x-handlebars-template">
            <div class="disco" data-genre="{{ genere }}">
                <img class="card-img" src="{{poster}}" alt="Card image cap">
                    <h5 class="card-title">{{titolo}}</h5>
                    <p class="card-text">{{autore}}</p>
                    <p class="card-text">{{genere}}</p>
                    <p class="card-text">{{anno}}</p>
            </div>
        </script>
        <script src="dist/app.js" charset="utf-8"></script>
    </body>
</html>
