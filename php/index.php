<?php include 'database/lista_dischi.php' ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png" alt="">
            </div>
            <div class="scegli-autore">
                <select class="autori" name="">
                    <option value="">Tutti gli artisti</option>
                    <?php
                    foreach ($dischi as $disco) { ?>
                    <option value=""> <?php echo $disco['author'] ?></option>
                    <?php
                } ?>
                </select>
            </div>
        </header>
        <div class="container-dischi">
            <?php
            foreach ($dischi as $disco) {?>
                <div class="disco">
                    <img src="<?php echo $disco['poster']?>" alt="">
                    <h5 class="titolo"><?php echo $disco['title']?></h5>
                    <p class="card-text"><?php echo $disco['author']?></p>
                    <p class="card-text"><?php echo $disco['genre']?></p>
                    <p class="card-text"><?php echo $disco['year']?></p>
                </div>
                    <?php
            }?>
        </div>
    </body>
</html>
