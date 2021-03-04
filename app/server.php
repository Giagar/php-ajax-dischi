<?php 

require_once __DIR__ . "/../database/database.php";

$albums = $musicCollection;

function filterByGenre($albums, $chosenGenre) {
    $filteredCollection = [];

    foreach($albums as $album) {
        if($album["genre"] === $chosenGenre) {
            $filteredCollection[] = $album;
        }
    }
    
    return $filteredCollection;
}

$selectedGenre = $_GET["genre"];

// bonus2: gestione errori
function checkGenre($genre, $albumsCollection) {
    // se genre esiste ma non ha un valore
    if(array_key_exists("genre", $_GET) && strlen($genre) < 1) {
        http_response_code(400);
        return;
    } else {
        // se genre esite, ha un valore, ma non è presente all'interno del database di album
        if(array_key_exists("genre", $_GET)) {
            $found = false;
            foreach($albumsCollection as $album) {
                if($album["genre"] === $genre) {
                    $found = true;
                }
            }
            
            if($found === false) {
                http_response_code(404);
                return;
            } else {
                $GLOBALS["albums"] = filterByGenre($albumsCollection, $genre);
            }
        }
    }
};

// se genre esiste
if(!empty($selectedGenre)) {
    
    // bonus2: gestione errori
    checkGenre($selectedGenre, $albums);
};


header("Content-Type: applications/json");
echo json_encode($albums);
