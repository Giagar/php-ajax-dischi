<?php 

require_once __DIR__ . "/../database/database.php";

$albums = $musicCollection;

// var_dump($albums);

header("Content-Type: applications/json");
echo json_encode($albums);
