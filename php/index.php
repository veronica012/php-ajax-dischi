<?php include 'database/lista_dischi.php' ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
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
