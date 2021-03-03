<?php 

include __DIR__ . "/../database/database.php";

$albums = $musicCollection;
// $genre = $_GET["genre"];

function filterByGenre($albums, $chosenGenre) {
    $filteredCollection = [];

    if($chosenGenre === "all") {
        $filteredCollection = $albums;
    } else {
        foreach($albums as $album) {
            if($album["genre"] === $chosenGenre) {
                $filteredCollection[] = $album;
            }
        }
    }

    return $filteredCollection;
}

$selectedGenre = $_GET["genre"];

if(!empty($selectedGenre)) {
    $albums = filterByGenre($albums, $selectedGenre);
}


header("Content-Type: applications/json");
echo json_encode($albums);
