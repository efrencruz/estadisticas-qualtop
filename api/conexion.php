<?php
  function connect(){
    $host='localhost';
    $user='root';
    $pass='sistemas';
    $base='Datos';
    $conexion = mysqli_connect($host,$user,$pass,$base);
      if (!isset($conexion)) {
        printf("Conexión fallida: %s\n", mysqli_connect_error());
        exit();
      }
    mysqli_query($conexion,"SET NAMES 'utf8'");
    return $conexion;
  }

  function connectPOO(){
    $host='localhost';
    $user='root';
    $pass='Datos';
    $base='reportes';
    $db = new mysqli($host,$user,$pass,$base);

      if(mysqli_connect_errno()){
        echo mysqli_connect_error();
      }

    $db->query("SET NAMES 'utf8'");

    return $db;
  }
?>
