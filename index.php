<?php
include __DIR__ . "/database/database.php"; // ho dovuto mettere include invece di require_once per poterlo ripetere nella 2a milestone.

$data = $musicCollection;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Collection</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' />
    <link rel="stylesheet" href="./css/app.css">
</head>

<body>

    <div class="wrapper">

        <header>
            <nav>
                <div class="logo-container">
                    <i class="fab fa-spotify logo"></i>
                </div>
            </nav>
        </header>
        <div class="main-container">
            <main>
                <?php foreach ($data as $album) { ?>
                    <div class="album-container">
                        <?php echo "<img src=\"{$album['cover']}\" alt=\"cover\" />"; ?>
                        <div class="album-details">
                            <h3 class="album-title"><?php echo $album["album"]; ?></h3>
                            <div class="band"><?php echo $album["band"]; ?></div>
                            <div class="date"><?php echo $album["date"]; ?></div>
                        </div>
                    </div>
                <?php }; ?>

            </main>
        </div>

    </div>




</body>

</html>