<?php 
    require_once __DIR__ . "/database/database.php";

    $data = $musicCollection;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Collection</title>
</head>
<body>

    <div class="wrapper">
    
        <header></header>
        <main>
            <?php foreach($data as $album) { ?>
            <div class="album">
                <?php echo "<img src=\"{$album['cover']}\" alt=\"cover\" />"; ?>
                <div class="album-details">
                    <h3 class="album"><?php echo $album["album"]; ?></h3>
                    <div class="band"><?php echo $album["band"]; ?></div>
                    <div class="date"><?php echo $album["date"]; ?></div>
                </div>
            </div>
            <?php }; ?>

        </main>

    </div>

    

    
</body>
</html>