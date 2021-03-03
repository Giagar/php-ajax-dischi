<?php 

require_once __DIR__ . "/../database/database.php";

$albums = $musicCollection;

// var_dump($_GET);


header("Content-Type: applications/json");
echo json_encode($albums);
