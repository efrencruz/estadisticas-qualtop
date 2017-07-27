DROP DATABASE reportes;
CREATE DATABASE reportes;
USE reportes;

CREATE TABLE IF NOT EXISTS `Area` (
  `idArea` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idArea`)
);

INSERT INTO Area (nombre) VALUES ("Operaciones");
INSERT INTO Area (nombre) VALUES ("Testing");
INSERT INTO Area (nombre) VALUES ("Sye software");
INSERT INTO Area (nombre) VALUES ("Certificación de aplicaciones móviles");
INSERT INTO Area (nombre) VALUES ("Compartamos Banco");
INSERT INTO Area (nombre) VALUES ("FONACOT");
INSERT INTO Area (nombre) VALUES ("Business Analyst");
INSERT INTO Area (nombre) VALUES ("Investigador tecnológico");
INSERT INTO Area (nombre) VALUES ("Calidad");
INSERT INTO Area (nombre) VALUES ("Consultoría");
INSERT INTO Area (nombre) VALUES ("Bansefi");
INSERT INTO Area (nombre) VALUES ("Staffing en Finasist como analista senior");
INSERT INTO Area (nombre) VALUES ("Desarrollo");
INSERT INTO Area (nombre) VALUES ("QA");
INSERT INTO Area (nombre) VALUES ("QUALTOP TIJUANA");
INSERT INTO Area (nombre) VALUES ("Certificación de Aplicaciones");

CREATE TABLE IF NOT EXISTS `Persona` (
  `idPersona` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  `correoEmpresarial` varchar(150) DEFAULT NULL,
  `skype` varchar(50) DEFAULT NULL,
  `cargoInicial` varchar(150) DEFAULT NULL,
  `fechaIngreso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cargoActual` varchar(150) DEFAULT NULL,
  `responsabilidadesAdicionales` varchar(150) DEFAULT NULL,
  `idAreaAsignada` int,
  `idAreaActual` int,
  PRIMARY KEY (`idPersona`),
  FOREIGN KEY (`idAreaAsignada`) REFERENCES Area (`idArea`),
  FOREIGN KEY (`idAreaActual`) REFERENCES Area (`idArea`)
);

/* INSERT INTO Persona VALUES(
  "Héctor Hugo Ruvalcaba Jiménez",
  "hruvalcaba@qualtop.com",
  "hruvalcabah",
  "Responsable del área de Testing Qualtop Group",
  "2017-03-20",
  "Responsable del área de Testing Qualtop Group",
  "Si, acercar negocio en materia de Testing Software y coordinar la puesta en producción de TryForUs",
  1,1
);

INSERT INTO Persona VALUES(
  "Ricardo Alejandro Talavera Moya",
  "rtalaveram@qualtop.com",
  "alex.talavera.hs",
  "Operaciones",
  "2017-02-15",
  "Product Owner",
  "Apoyo a Q.Tools",
  1,1
);

INSERT INTO Persona VALUES(
  "RONALD ARMANDO GOMEZ CARDENAS",
  "RGOMEZ@QUALTOP.COM",
  "RXGOMEZ",
  "OPERACIONES",
  "2016-10-14"
  "PROJECT MANAGER",
  "DIRECTOR DE OPERACIONES",
  "NO",
  1,2
); */

CREATE TABLE IF NOT EXISTS `Idioma` (
  `idIdioma` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idIdioma`)
);

INSERT INTO Idioma (nombre) VALUES ("Inglés");
INSERT INTO Idioma (nombre) VALUES ("Frances");
INSERT INTO Idioma (nombre) VALUES ("Italiano");
INSERT INTO Idioma (nombre) VALUES ("Ruso");
INSERT INTO Idioma (nombre) VALUES ("Hebreo");
INSERT INTO Idioma (nombre) VALUES ("Aleman");
INSERT INTO Idioma (nombre) VALUES ("Japones");
INSERT INTO Idioma (nombre) VALUES ("Portugues");

CREATE TABLE IF NOT EXISTS `TrabajoAnterior` (
  `idTrabajo` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(100) DEFAULT NULL,
  `empresa` varchar(100) DEFAULT NULL,
  `aniosLaborados` varchar(50) DEFAULT NULL,
  `idPersona` int,
  PRIMARY KEY (`idTrabajo`),
  FOREIGN KEY (`idPersona`) REFERENCES Persona (`idPersona`)
); 

CREATE TABLE IF NOT EXISTS `Estudios` (
  `idEstudio` int NOT NULL AUTO_INCREMENT,
  `ultimo` varchar(150) DEFAULT NULL,
  `carrera` varchar(150) DEFAULT NULL,
  `institucionEducativa` varchar(150) DEFAULT NULL,
  `estudiosAdicioanles` varchar(255) DEFAULT NULL,
  `idPersona` int,
  PRIMARY KEY (`idEstudio`),
  FOREIGN KEY (`idPersona`) REFERENCES Persona (`idPersona`)
);

CREATE TABLE IF NOT EXISTS `Lenguaje` (
  `idLenguaje` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idLenguaje`)
);

INSERT INTO Lenguaje (nombre) VALUES ("Java");
INSERT INTO Lenguaje (nombre) VALUES ("C++");
INSERT INTO Lenguaje (nombre) VALUES ("PHP");
INSERT INTO Lenguaje (nombre) VALUES ("iOS");
INSERT INTO Lenguaje (nombre) VALUES ("C#");
INSERT INTO Lenguaje (nombre) VALUES ("Ruby");
INSERT INTO Lenguaje (nombre) VALUES ("SQL");
INSERT INTO Lenguaje (nombre) VALUES ("Android");
INSERT INTO Lenguaje (nombre) VALUES ("ASP .NET");
INSERT INTO Lenguaje (nombre) VALUES ("HTML");
INSERT INTO Lenguaje (nombre) VALUES ("Java Script");
INSERT INTO Lenguaje (nombre) VALUES ("Visual Basic");
INSERT INTO Lenguaje (nombre) VALUES ("Phyton");
INSERT INTO Lenguaje (nombre) VALUES ("SAP ABAP");
INSERT INTO Lenguaje (nombre) VALUES ("Oracle");
INSERT INTO Lenguaje (nombre) VALUES ("MySQL");
INSERT INTO Lenguaje (nombre) VALUES ("Postgre");
INSERT INTO Lenguaje (nombre) VALUES ("JSF 2.0");
INSERT INTO Lenguaje (nombre) VALUES ("ZK");
INSERT INTO Lenguaje (nombre) VALUES ("Big Data");
INSERT INTO Lenguaje (nombre) VALUES ("Hadoop");
INSERT INTO Lenguaje (nombre) VALUES ("SPARK");
INSERT INTO Lenguaje (nombre) VALUES ("Google Maps");
INSERT INTO Lenguaje (nombre) VALUES ("MapReduce");
INSERT INTO Lenguaje (nombre) VALUES ("Tomcat");
INSERT INTO Lenguaje (nombre) VALUES ("Weblogic");
INSERT INTO Lenguaje (nombre) VALUES ("ISS");
INSERT INTO Lenguaje (nombre) VALUES ("BlockChain");
INSERT INTO Lenguaje (nombre) VALUES ("Wordpress");
INSERT INTO Lenguaje (nombre) VALUES ("Joomla");
INSERT INTO Lenguaje (nombre) VALUES ("Sharepoint");
INSERT INTO Lenguaje (nombre) VALUES ("Hybernate");
INSERT INTO Lenguaje (nombre) VALUES ("Angular");
INSERT INTO Lenguaje (nombre) VALUES ("Ember");
INSERT INTO Lenguaje (nombre) VALUES ("JSON");
INSERT INTO Lenguaje (nombre) VALUES ("IONIC");
INSERT INTO Lenguaje (nombre) VALUES ("SPRING");
INSERT INTO Lenguaje (nombre) VALUES ("Google AD Words");
INSERT INTO Lenguaje (nombre) VALUES ("Google Analitics");

CREATE TABLE IF NOT EXISTS `Solucion` (
  `idSolucion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idSolucion`)
);

INSERT INTO Solucion (nombre) VALUES ("Amazon");
INSERT INTO Solucion (nombre) VALUES ("Azure");
INSERT INTO Solucion (nombre) VALUES ("Scrum Master");
INSERT INTO Solucion (nombre) VALUES ("Scrum Team Member");
INSERT INTO Solucion (nombre) VALUES ("Scrum Product Owner");
INSERT INTO Solucion (nombre) VALUES ("ITIL Fundamentos");
INSERT INTO Solucion (nombre) VALUES ("ITIL Intermedio");
INSERT INTO Solucion (nombre) VALUES ("ITIL Expert");
INSERT INTO Solucion (nombre) VALUES ("Six Sigma Black Belt");
INSERT INTO Solucion (nombre) VALUES ("PMP");
INSERT INTO Solucion (nombre) VALUES ("ISTQB");
INSERT INTO Solucion (nombre) VALUES ("CMMI Oficial");
INSERT INTO Solucion (nombre) VALUES ("Oracle Certified Profesional Java SE");
INSERT INTO Solucion (nombre) VALUES ("ISO 27000");
INSERT INTO Solucion (nombre) VALUES ("ISO 20000");
INSERT INTO Solucion (nombre) VALUES ("COBIT");
INSERT INTO Solucion (nombre) VALUES ("CRISC");
INSERT INTO Solucion (nombre) VALUES ("GRCP");
INSERT INTO Solucion (nombre) VALUES ("ISO 9000");
INSERT INTO Solucion (nombre) VALUES ("Prince");
INSERT INTO Solucion (nombre) VALUES ("COSO");
INSERT INTO Solucion (nombre) VALUES ("SOX");
INSERT INTO Solucion (nombre) VALUES ("BPM");

CREATE TABLE IF NOT EXISTS `Metodologia` (
  `idMetodologia` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idMetodologia`)
);

INSERT INTO Metodologia (nombre) VALUES ("ISTQB");
INSERT INTO Metodologia (nombre) VALUES ("Agile Testing");
INSERT INTO Metodologia (nombre) VALUES ("ISEB");
INSERT INTO Metodologia (nombre) VALUES ("CAST");
INSERT INTO Metodologia (nombre) VALUES ("CSTE");
INSERT INTO Metodologia (nombre) VALUES ("CSQA");
INSERT INTO Metodologia (nombre) VALUES ("TMap");
INSERT INTO Metodologia (nombre) VALUES ("TMMi");
INSERT INTO Metodologia (nombre) VALUES ("CMMi (PPQA: VER &VAL)");
INSERT INTO Metodologia (nombre) VALUES ("SCENT");
INSERT INTO Metodologia (nombre) VALUES ("AGEDIS");
INSERT INTO Metodologia (nombre) VALUES ("ITIL (QA)");

CREATE TABLE IF NOT EXISTS `OtraHerramienta` (
  `idOtraHerramienta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idOtraHerramienta`)
);

INSERT INTO OtraHerramienta (nombre) VALUES ("Bugzila Testopia");
INSERT INTO OtraHerramienta (nombre) VALUES ("FitNesse");
INSERT INTO OtraHerramienta (nombre) VALUES ("qaManager");
INSERT INTO OtraHerramienta (nombre) VALUES ("qaBook");
INSERT INTO OtraHerramienta (nombre) VALUES ("Salome-tmf");
INSERT INTO OtraHerramienta (nombre) VALUES ("Squash TM");
INSERT INTO OtraHerramienta (nombre) VALUES ("Test Environment Toolkit");
INSERT INTO OtraHerramienta (nombre) VALUES ("TestLink");
INSERT INTO OtraHerramienta (nombre) VALUES ("Testitool");
INSERT INTO OtraHerramienta (nombre) VALUES ("XQual Studio");
INSERT INTO OtraHerramienta (nombre) VALUES ("Radi-testdir");
INSERT INTO OtraHerramienta (nombre) VALUES ("Data Generator");
INSERT INTO OtraHerramienta (nombre) VALUES ("Mantis");
INSERT INTO OtraHerramienta (nombre) VALUES ("Selenium");
INSERT INTO OtraHerramienta (nombre) VALUES ("Apium");
INSERT INTO OtraHerramienta (nombre) VALUES ("Selendroid");
INSERT INTO OtraHerramienta (nombre) VALUES ("Soapui");
INSERT INTO OtraHerramienta (nombre) VALUES ("Watir (Pruebas de aplicaciones web en Ruby)");
INSERT INTO OtraHerramienta (nombre) VALUES ("Watin (Pruebas de aplicaciones web en .Net)");
INSERT INTO OtraHerramienta (nombre) VALUES ("Capedit");
INSERT INTO OtraHerramienta (nombre) VALUES ("Canoo WebTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("Solex");
INSERT INTO OtraHerramienta (nombre) VALUES ("Imprimatur");
INSERT INTO OtraHerramienta (nombre) VALUES ("SAMIE");
INSERT INTO OtraHerramienta (nombre) VALUES ("ITP");
INSERT INTO OtraHerramienta (nombre) VALUES ("WET");
INSERT INTO OtraHerramienta (nombre) VALUES ("Weblnject");
INSERT INTO OtraHerramienta (nombre) VALUES ("FunkLoad");
INSERT INTO OtraHerramienta (nombre) VALUES ("FWPTT load testing");
INSERT INTO OtraHerramienta (nombre) VALUES ("LoadUI");
INSERT INTO OtraHerramienta (nombre) VALUES ("JMeter");
INSERT INTO OtraHerramienta (nombre) VALUES ("HP Quality Center/ALM");
INSERT INTO OtraHerramienta (nombre) VALUES ("QA Complete");
INSERT INTO OtraHerramienta (nombre) VALUES ("T-Plan Professional");
INSERT INTO OtraHerramienta (nombre) VALUES ("SMARTS");
INSERT INTO OtraHerramienta (nombre) VALUES ("QAS. Test Case Studio");
INSERT INTO OtraHerramienta (nombre) VALUES ("PractiTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("SpiraTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("TestLog");
INSERT INTO OtraHerramienta (nombre) VALUES ("ApTest Manager");
INSERT INTO OtraHerramienta (nombre) VALUES ("Zephyr");
INSERT INTO OtraHerramienta (nombre) VALUES ("TestRail");
INSERT INTO OtraHerramienta (nombre) VALUES ("Jira");
INSERT INTO OtraHerramienta (nombre) VALUES ("QuickTest Pro");
INSERT INTO OtraHerramienta (nombre) VALUES ("SeeTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("Rational Robot");
INSERT INTO OtraHerramienta (nombre) VALUES ("Sahi");
INSERT INTO OtraHerramienta (nombre) VALUES ("SoapTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("Test Complete");
INSERT INTO OtraHerramienta (nombre) VALUES ("QA Wizard");
INSERT INTO OtraHerramienta (nombre) VALUES ("Squish");
INSERT INTO OtraHerramienta (nombre) VALUES ("vTest");
INSERT INTO OtraHerramienta (nombre) VALUES ("Internet Macros");
INSERT INTO OtraHerramienta (nombre) VALUES ("Testdroid");
INSERT INTO OtraHerramienta (nombre) VALUES ("HP LoadRunner");
INSERT INTO OtraHerramienta (nombre) VALUES ("LoadStorm");
INSERT INTO OtraHerramienta (nombre) VALUES ("NeoLoad");
INSERT INTO OtraHerramienta (nombre) VALUES ("WebLOAD Professional");
INSERT INTO OtraHerramienta (nombre) VALUES ("Forecast");
INSERT INTO OtraHerramienta (nombre) VALUES ("ANTIS - Advanced .NET Testing System]");
INSERT INTO OtraHerramienta (nombre) VALUES ("Webserver Stress Tool");
INSERT INTO OtraHerramienta (nombre) VALUES ("Load Impact");

CREATE TABLE IF NOT EXISTS `HerramientaTrabajo` (
  `idHerramienta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idHerramienta`)
);

INSERT INTO HerramientaTrabajo (nombre) VALUES ("Microsoft Office");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("JIRA");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Confluence");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Visual Studio");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Bamboo");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("JIRA Portafolio");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("ALM HP");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Android Studio");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Balsamiq Mockps");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Bitbucket");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Visio");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("PhotoShop");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Ilustrator");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Microsoft Project");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("SQL Server");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Sublime text");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Skype");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Team Viewer");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("GoTo Meeting");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("HipChat");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Appraisal Assistant");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Dreamweaver");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Net Beans");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Eclipse");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("ABAP Workbech");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("ARIS");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Opera");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Bizagi");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Microsoft Project");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Excel");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Power Point");
INSERT INTO HerramientaTrabajo (nombre) VALUES ("Word");

CREATE TABLE IF NOT EXISTS `Dominio` (
  `idDominio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idDominio`)
);

INSERT INTO Dominio (nombre) VALUES ("Ninguno");
INSERT INTO Dominio (nombre) VALUES ("Noción");
INSERT INTO Dominio (nombre) VALUES ("Básico");
INSERT INTO Dominio (nombre) VALUES ("Intermedio");
INSERT INTO Dominio (nombre) VALUES ("Avanzado");
INSERT INTO Dominio (nombre) VALUES ("Curso oficial sin certificación");
INSERT INTO Dominio (nombre) VALUES ("Certificación");

CREATE TABLE IF NOT EXISTS `Persona_has_Herramienta` (
  `idPersona` int,
  `idHerramienta` int,
  `idDominio` int,
  FOREIGN KEY (`idPersona`) REFERENCES Persona (`idPersona`),
  FOREIGN KEY (`idHerramienta`) REFERENCES HerramientaTrabajo (`idHerramienta`),
  FOREIGN KEY (`idDominio`) REFERENCES Dominio (`idDominio`)
);

CREATE TABLE IF NOT EXISTS `Persona_has_Idioma` (
  `idPersona` int,
  `idIdioma` int,
  `idDominio` int,
  FOREIGN KEY (`idPersona`) REFERENCES Persona (`idPersona`),
  FOREIGN KEY (`idIdioma`) REFERENCES Idioma (`idIdioma`),
  FOREIGN KEY (`idDominio`) REFERENCES Dominio (`idDominio`)
);

/* INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (1,1,4); 
INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (1,2,1);
INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (1,3,1);

INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (2,1,5); 
INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (2,2,1);
INSERT INTO Persona_has_Idioma (idPersona, idIdioma, idDominio) VALUES (2,3,1);
 */
