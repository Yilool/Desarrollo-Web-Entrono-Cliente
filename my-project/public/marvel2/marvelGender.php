<?php
    $conn = NULL;
        try{

            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', 'root');

            $sql = "SELECT DISTINCT Gender FROM characters;

            $stm=$con->prepare($sql);

            $stm->execute();

            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }
?>


