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

  function obtenerHerramientas1(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Office) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Office = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Office']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA) AS total from Datos WHERE Herramientas_de_trabajo_JIRA = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Confluence) AS total from Datos WHERE Herramientas_de_trabajo_Confluence = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Confluence']['Nocion'] = mysqli_fetch_assoc($res);

    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visual_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Visual_Studio = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Studio']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bamboo) AS total from Datos WHERE Herramientas_de_trabajo_Bamboo = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bamboo']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_JIRA_Portafolio) AS total from Datos WHERE Herramientas_de_trabajo_JIRA_Portafolio = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JIRA_Portafolio']['Nocion'] = mysqli_fetch_assoc($res);


     $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ALM_HP) AS total from Datos WHERE Herramientas_de_trabajo_ALM_HP = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ALM_HP']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;

  }

  function obtenerHerramientas2(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Android_Studio) AS total from Datos WHERE Herramientas_de_trabajo_Android_Studio = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android_Studio']['Nocion'] = mysqli_fetch_assoc($res);
    
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Balsamiq_Mockps) AS total from Datos WHERE Herramientas_de_trabajo_Balsamiq_Mockps = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Balsamiq_Mockps']['Nocion'] = mysqli_fetch_assoc($res);
    

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bitbucket) AS total from Datos WHERE Herramientas_de_trabajo_Bitbucket = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bitbucket']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Visio) AS total from Datos WHERE Herramientas_de_trabajo_Visio = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visio']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_PhotoShop) AS total from Datos WHERE Herramientas_de_trabajo_PhotoShop = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PhotoShop']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Ilustrator) AS total from Datos WHERE Herramientas_de_trabajo_Ilustrator = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ilustrator']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerHerramientas3(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_SQL_Server) AS total from Datos WHERE Herramientas_de_trabajo_SQL_Server = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_Server']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Sublime_text) AS total from Datos WHERE Herramientas_de_trabajo_Sublime_text = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sublime_text']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Skype) AS total from Datos WHERE Herramientas_de_trabajo_Skype = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Skype']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Team_Viewer) AS total from Datos WHERE Herramientas_de_trabajo_Team_Viewer = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Team_Viewer']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_GoTo_Meeting) AS total from Datos WHERE Herramientas_de_trabajo_GoTo_Meeting = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GoTo_Meeting']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_HipChat) AS total from Datos WHERE Herramientas_de_trabajo_HipChat = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HipChat']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Appraisal_Assistant) AS total from Datos WHERE Herramientas_de_trabajo_Appraisal_Assistant = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Appraisal_Assistant']['Nocion'] = mysqli_fetch_assoc($res);
    
    return $data;
  }

  function obtenerHerramientas4(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Dreamweaver) AS total from Datos WHERE Herramientas_de_trabajo_Dreamweaver = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Dreamweaver']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Net_Beans) AS total from Datos WHERE Herramientas_de_trabajo_Net_Beans = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Net_Beans']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Eclipse) AS total from Datos WHERE Herramientas_de_trabajo_Eclipse = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Eclipse']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ABAP_Workbech) AS total from Datos WHERE Herramientas_de_trabajo_ABAP_Workbech = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ABAP_Workbech']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_ARIS) AS total from Datos WHERE Herramientas_de_trabajo_ARIS = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ARIS']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Opera) AS total from Datos WHERE Herramientas_de_trabajo_Opera = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Opera']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Bizagi) AS total from Datos WHERE Herramientas_de_trabajo_Bizagi = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Bizagi']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerHerramientas5(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Microsoft_Project_2) AS total from Datos WHERE Herramientas_de_trabajo_Microsoft_Project_2 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Microsoft_Project']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Excel) AS total from Datos WHERE Herramientas_de_trabajo_Excel = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Excel']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Power_Point) AS total from Datos WHERE Herramientas_de_trabajo_Power_Point = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Power_Point']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Herramientas_de_trabajo_Word) AS total from Datos WHERE Herramientas_de_trabajo_Word = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Word']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerLenguajes1(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java) AS total from Datos WHERE Java = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_plus_plus) AS total from Datos WHERE C_plus_plus = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_plus_plus']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PHP) AS total from Datos WHERE PHP = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PHP']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(iOS) AS total from Datos WHERE iOS = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['iOS']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(C_Sharp) AS total from Datos WHERE C_Sharp = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['C_Sharp']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ruby) AS total from Datos WHERE Ruby = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ruby']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SQL_1) AS total from Datos WHERE SQL_1 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SQL_1']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerLenguajes2(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Android) AS total from Datos WHERE Android = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Android']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ASP_NET) AS total from Datos WHERE ASP_NET = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ASP_NET']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(HTML) AS total from Datos WHERE HTML = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['HTML']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Java_Script) AS total from Datos WHERE Java_Script = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Java_Script']['Nocion'] = mysqli_fetch_assoc($res);



    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Visual_Basic) AS total from Datos WHERE Visual_Basic = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Visual_Basic']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Phyton) AS total from Datos WHERE Phyton = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Phyton']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SAP_ABAP) AS total from Datos WHERE SAP_ABAP = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SAP_ABAP']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerLenguajes3(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle) AS total from Datos WHERE Oracle = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MySQL) AS total from Datos WHERE MySQL = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MySQL']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Postgre) AS total from Datos WHERE Postgre = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Postgre']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSF_2_0) AS total from Datos WHERE JSF_2_0 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSF_2_0']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Big_Data) AS total from Datos WHERE Big_Data = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Big_Data']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hadoop) AS total from Datos WHERE Hadoop = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hadoop']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPARK) AS total from Datos WHERE SPARK = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPARK']['Nocion'] = mysqli_fetch_assoc($res);


    return $data;

  }

  function obtenerLenguajes4(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Maps) AS total from Datos WHERE Google_Maps = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Maps']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(MapReduce) AS total from Datos WHERE MapReduce = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['MapReduce']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Tomcat) AS total from Datos WHERE Tomcat = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Tomcat']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Weblogic) AS total from Datos WHERE Weblogic = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Weblogic']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISS) AS total from Datos WHERE ISS = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISS']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BlockChain) AS total from Datos WHERE BlockChain = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BlockChain']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Wordpress) AS total from Datos WHERE Wordpress = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Wordpress']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerLenguajes5(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Joomla) AS total from Datos WHERE Joomla = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Joomla']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Sharepoint) AS total from Datos WHERE Sharepoint = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Sharepoint']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Hybernate) AS total from Datos WHERE Hybernate = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Hybernate']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Angular) AS total from Datos WHERE Angular = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Angular']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Ember) AS total from Datos WHERE Ember = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Ember']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(JSON) AS total from Datos WHERE JSON = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['JSON']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(IONIC) AS total from Datos WHERE IONIC = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['IONIC']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerLenguajes6(){
    $conexion = connect();  

    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SPRING) AS total from Datos WHERE SPRING = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SPRING']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_AD_Words) AS total from Datos WHERE Google_AD_Words = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_AD_Words']['Nocion'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Google_Analitics) AS total from Datos WHERE Google_Analitics = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Google_Analitics']['Nocion'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerSoluciones(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Con curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Soluciones_en_la_nube_Amazon) AS total from Datos WHERE Soluciones_en_la_nube_Amazon = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Amazon']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Con curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Soluciones_en_la_nube_Azure) AS total from Datos WHERE Soluciones_en_la_nube_Azure = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Soluciones_en_la_nube_Azure']['Ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerCertificaciones1(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Master) AS total from Datos WHERE Scrum_Master = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Master']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Team_Member) AS total from Datos WHERE Scrum_Team_Member = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Team_Member']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Scrum_Product_Owner) AS total from Datos WHERE Scrum_Product_Owner = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Scrum_Product_Owner']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Fundamentos) AS total from Datos WHERE ITIL_Fundamentos = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Fundamentos']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Intermedio) AS total from Datos WHERE ITIL_Intermedio = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Intermedio']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ITIL_Expert) AS total from Datos WHERE ITIL_Expert = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ITIL_Expert']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Six_Sigma_Black_Belt) AS total from Datos WHERE Six_Sigma_Black_Belt = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Six_Sigma_Black_Belt']['Ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerCertificaciones2(){
    $conexion = connect();  

    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(PMP) AS total from Datos WHERE PMP = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['PMP']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISTQB) AS total from Datos WHERE ISTQB = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISTQB']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(CMMI_Oficial) AS total from Datos WHERE CMMI_Oficial = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CMMI_Oficial']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Oracle_Certified_Profesional_Java_SE) AS total from Datos WHERE Oracle_Certified_Profesional_Java_SE = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Oracle_Certified_Profesional_Java_SE']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_27000) AS total from Datos WHERE ISO_27000 = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_27000']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_20000) AS total from Datos WHERE ISO_20000 = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_20000']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(COBIT) AS total from Datos WHERE COBIT = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COBIT']['Ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerCertificaciones3(){
    $conexion = connect();  

    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(CRISC) AS total from Datos WHERE CRISC = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['CRISC']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(GRCP) AS total from Datos WHERE GRCP = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['GRCP']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(ISO_9000) AS total from Datos WHERE ISO_9000 = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['ISO_9000']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Prince) AS total from Datos WHERE Prince = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Prince']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(COSO) AS total from Datos WHERE COSO = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['COSO']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(SOX) AS total from Datos WHERE SOX = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['SOX']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(BPM) AS total from Datos WHERE BPM = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['BPM']['Ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerMetodologias1(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ISTQB) AS total from Datos WHERE Metodologias_ISTQB = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISTQB']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_Agile_Testing) AS total from Datos WHERE Metodologias_Agile_Testing = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_Agile_Testing']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ISEB) AS total from Datos WHERE Metodologias_ISEB = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ISEB']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CAST) AS total from Datos WHERE Metodologias_CAST = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CAST']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CSTE) AS total from Datos WHERE Metodologias_CSTE = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSTE']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CSQA) AS total from Datos WHERE Metodologias_CSQA = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CSQA']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_TMap) AS total from Datos WHERE Metodologias_TMap = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMap']['Ninguno'] = mysqli_fetch_assoc($res);

    return $data;
  }

  function obtenerMetodologias2(){
    $conexion = connect();  

    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_TMMi) AS total from Datos WHERE Metodologias_TMMi = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_TMMi']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_CMMI_PPQA_VER_VAL) AS total from Datos WHERE Metodologias_CMMI_PPQA_VER_VAL = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_CMMI_PPQA_VER_VAL']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_SCENT) AS total from Datos WHERE Metodologias_SCENT = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_SCENT']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_AGEDIS) AS total from Datos WHERE Metodologias_AGEDIS = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_AGEDIS']['Ninguno'] = mysqli_fetch_assoc($res);


    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Certificado'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Certificado'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Curso'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Dominio (avanzado)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Avanzado'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Dominio (intermedio)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Intermedio'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Dominio (basico)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Basico'] = mysqli_fetch_assoc($res);
    
    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Dominio (nocion)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Nocion'] = mysqli_fetch_assoc($res);

    $sql = "SELECT COUNT(Metodologias_ITIL_QA) AS total from Datos WHERE Metodologias_ITIL_QA = 'Dominio (ninguno)'";
    $res = mysqli_query($conexion, $sql) or die("Error: " + mysqli_error($conexion));
    $data['Metodologias_ITIL_QA']['Ninguno'] = mysqli_fetch_assoc($res);

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
    $sql = "SELECT Nombre, Cargo_actual FROM Datos WHERE ".$dato." = 'Curso oficial sin certificacion'";
    $res = mysqli_query($conexion, $sql) or die("ERROR: " + mysqli_error($conexion));
    while($reg = mysqli_fetch_assoc($res)){
        $data['Curso'][] = $reg;
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

  if($op == 'obtenerIdiomas') { 
    $resultado = obtenerIdiomas();
    print json_encode($resultado);
  }  

  if($op == 'obtenerHerramientas1') { 
    $resultado = obtenerHerramientas1();
    print json_encode($resultado);
  } 

  if($op == 'obtenerHerramientas2') { 
    $resultado = obtenerHerramientas2();
    print json_encode($resultado);
  } 

  if($op == 'obtenerHerramientas3') { 
    $resultado = obtenerHerramientas3();
    print json_encode($resultado);
  } 

  if($op == 'obtenerHerramientas4') { 
    $resultado = obtenerHerramientas4();
    print json_encode($resultado);
  }

  if($op == 'obtenerHerramientas5') { 
    $resultado = obtenerHerramientas5();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes1') { 
    $resultado = obtenerLenguajes1();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes2') { 
    $resultado = obtenerLenguajes2();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes3') { 
    $resultado = obtenerLenguajes3();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes4') { 
    $resultado = obtenerLenguajes4();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes5') { 
    $resultado = obtenerLenguajes5();
    print json_encode($resultado);
  }

  if($op == 'obtenerLenguajes6') { 
    $resultado = obtenerLenguajes6();
    print json_encode($resultado);
  }

  if($op == 'obtenerSoluciones') { 
    $resultado = obtenerSoluciones();
    print json_encode($resultado);
  }

  if($op == 'obtenerCertificaciones1') { 
    $resultado = obtenerCertificaciones1();
    print json_encode($resultado);
  }

  if($op == 'obtenerCertificaciones2') { 
    $resultado = obtenerCertificaciones2();
    print json_encode($resultado);
  }

  if($op == 'obtenerMetodologias1') { 
    $resultado = obtenerMetodologias1();
    print json_encode($resultado);
  }

  if($op == 'obtenerMetodologias2') { 
    $resultado = obtenerMetodologias2();
    print json_encode($resultado);
  }
  
?>