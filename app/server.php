<?php 

include __DIR__ . "/../database/database.php";

$albums = $musicCollection;

header("Content-Type: application/json");
json_encode($albums);
