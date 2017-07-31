<?php
  session_start();
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  header('Content-type: application/json');
  require_once('./conexion.php');  

  function obtenerIdiomas(){
    $conexion = connect();    
    $sql = "SELECT COUNT(Ingles) AS total from Datos WHERE Ingles = 'avanzado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ingles']['avanzado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Ingles) AS total from Datos WHERE Ingles = 'intermedio'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ingles']['intermedio'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Ingles) AS total from Datos WHERE Ingles = 'basico'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ingles']['basico'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Ingles) AS total from Datos WHERE Ingles = 'ninguno'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ingles']['ninguno'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Frances) AS total from Datos WHERE Frances = 'avanzado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['frances']['avanzado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Frances) AS total from Datos WHERE Frances = 'intermedio'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['frances']['intermedio'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Frances) AS total from Datos WHERE Frances = 'basico'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['frances']['basico'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Frances) AS total from Datos WHERE Frances = 'ninguno'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['frances']['ninguno'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Italiano) AS total from Datos WHERE Italiano = 'avanzado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['italiano']['avanzado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Italiano) AS total from Datos WHERE Italiano = 'intermedio'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['italiano']['intermedio'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Italiano) AS total from Datos WHERE Italiano = 'basico'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['italiano']['basico'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Italiano) AS total from Datos WHERE Italiano = 'ninguno'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['italiano']['ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerDatosGrafica($tipo, $cantidad, $datos){
    $conexion = connect();  
    $tipo_tmp = "";
    $datos_cambiados = [];
    $data = [];
    $nivel = ["Certificado","Curso oficial sin certificacion","Dominio (avanzado)","Dominio (intermedio)","Dominio (basico)","Dominio (nocion)","Dominio (ninguno)"];
    $nivel_label = ["Certificado","Curso","Avanzado","Intermedio","Basico","Nocion","Ninguno"];

    for($i=0; $i<sizeof($datos); $i++){
      if($datos[$i] == "C++"){ $datos[$i] = "C_plus_plus"; }
      if($datos[$i] == "C#"){ $datos[$i] = "C_Sharp"; }
      if($datos[$i] == "SQL"){ $datos[$i] = "SQL_1"; }
      if($datos[$i] == "ASP.NET"){ $datos[$i] = "ASP_NET"; }
      if($datos[$i] == "JSF 2.0") { $datos[$i] = "JSF_2_0"; }
      if($datos[$i] == "CMMI PPQA:VER&VAL"){ $datos[$i] = "CMMI_PPQA_VER_VAL"; }
      $datos_cambiados[$i] = str_replace(" ", "_", $datos[$i]);
    }

    if($tipo == "herramienta"){ $tipo_tmp = "Herramientas_de_trabajo_"; }
    if($tipo == "lenguaje"){ $tipo_tmp = ""; }
    if($tipo == "solucion"){ $tipo_tmp = "Soluciones_en_la_nube_"; }
    if($tipo == "certificacion"){ 
      $tipo_tmp = ""; 
      $nivel[1] = "Con curso oficial sin certificacion";
    }
    if($tipo == "metodologia"){ $tipo_tmp = "Metodologias_"; }
    
    for($i=0; $i<$cantidad; $i++){
      for($j=0; $j<sizeof($nivel); $j++){
        $dato = "";
        $sql = "";
        $res = "";
        $dato = $tipo_tmp.$datos_cambiados[$i];
        $sql = "SELECT COUNT('".$dato."') AS total from Datos WHERE ".$dato." = '".$nivel[$j]."'";
        $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
        
        $data[ $datos_cambiados[$i] ][ $nivel_label[$j] ] = mysqli_fetch_assoc($res);
      }
    }
    print json_encode($data);
    return $data;
  }

  function obtenerDatos($dato){
    $conexion = connect();
    $data = [];
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Ninguno'][] = $reg;
    } 
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Nocion'][] = $reg;
    }
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Basico'][] = $reg;
    }
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Intermedio'][] = $reg;
    }
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Avanzado'][] = $reg;
    }
    if($dato == "Soluciones_en_la_nube_Amazon" || $dato == "Soluciones_en_la_nube_Azure"){
      $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Con curso oficial sin certificacion'";
      $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
      while($reg = mysqli_fetch_assoc($res)){
          $data['Curso'][] = $reg;
      }
    } else {
      $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Con curso oficial sin certificacion'";
      $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
      while($reg = mysqli_fetch_assoc($res)){
          $data['Curso'][] = $reg;
      }
    }
    
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Certificado'][] = $reg;
    } 

    return $data;
  }

  if($_GET){
    $op = $_GET['op'];
    $data = $_GET;
  }else{
    $data = json_decode(file_get_contents('php://input'), true);
    $op = $data['op'];
  }

  if($op == 'obtenerDatos') { 
    $dato = $data['dato'];
    $resultado = obtenerDatos($dato);
    print json_encode($resultado);
  }

  if($op == 'obtenerDatosGrafica') {
    $tipo = $data['tipo'];
    $cantidad = $data['cantidad'];
    $datos = $data['datos'];
    $resultado = obtenerDatosGrafica($tipo, $cantidad, $datos);
    //print json_encode($resultado);
  }

  if($op == 'obtenerIdiomas') { 
    $resultado = obtenerIdiomas();
    print json_encode($resultado);
  }  
  
?>