<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
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
        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
