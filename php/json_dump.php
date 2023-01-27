<?php

require_once 'config.php';

const KEY = 'CEHuue8JpRIlU2XlHvVb';

if(empty($_GET['key']) || $_GET['key'] != KEY) {
    exit();
}

// $username = 'semos';
// $password = '!SemosEdukacija123$';
// $db = new PDO('mysql:host=127.0.0.1;dbname=semos25', $username, $password);
// $db->query("SET NAMES utf8");
// $db = new PDO('mysql:host=127.0.0.1;port=3307;dbname=semos25', 'root', 'root');

$sql = "SELECT * FROM registrations";
if($stmt = $pdo->prepare($sql)) {
    if($stmt->execute()) {
        // echo 'read from base';
        $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
// $query = $db->query($sql);


header('Content-Type: application/json; charset=utf-8');
echo json_encode($res, JSON_UNESCAPED_UNICODE);

?>