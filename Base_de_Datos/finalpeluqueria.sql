-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: peluqueria
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `idCita` int NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NULL DEFAULT NULL,
  `idServicio` int DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `idUsuario` int DEFAULT NULL,
  `idDescuento` int DEFAULT NULL,
  PRIMARY KEY (`idCita`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
INSERT INTO `citas` VALUES (1,'2024-06-20 06:56:00',2,_binary '\0',8,2),(2,'2024-06-28 11:18:00',5,_binary '\0',82,4),(3,'2024-05-01 07:50:00',NULL,_binary '',NULL,NULL),(4,'2024-05-01 07:50:00',7,_binary '',82,1),(5,'2024-06-08 02:59:00',1,_binary '',35,4),(6,'2024-06-08 02:59:00',6,_binary '',86,5),(7,'2024-06-08 03:00:00',1,_binary '',50,1),(8,'2024-06-08 03:00:00',1,_binary '',51,1),(9,'2024-06-08 03:00:00',1,_binary '',82,1),(10,'2024-06-08 03:00:00',11,_binary '',82,6),(11,'2024-06-05 07:28:00',1,_binary '',1,1),(13,'2024-06-08 03:00:00',2,_binary '',34,7),(14,'2024-06-08 03:01:00',2,_binary '',8,2),(15,'2024-04-29 04:40:00',3,_binary '\0',37,1),(16,'2024-04-29 04:40:00',4,_binary '\0',12,5),(17,'2024-04-29 04:40:00',4,_binary '\0',12,5),(18,'2024-04-29 04:40:00',4,_binary '\0',12,5),(19,'2024-04-29 04:40:00',4,_binary '\0',12,5),(23,NULL,16,_binary '\0',34,1),(25,'2024-06-04 20:00:00',6,_binary '\0',34,1),(26,'2024-06-04 20:00:00',5,_binary '\0',36,2),(27,'2024-06-04 21:00:00',16,_binary '\0',33,4),(32,'2024-04-29 04:40:00',4,_binary '\0',12,5),(33,'2024-04-29 04:40:00',4,_binary '\0',12,5),(34,'2024-04-29 04:40:00',4,_binary '\0',12,5),(35,'2024-04-29 04:40:00',4,_binary '\0',12,5),(36,'2024-04-29 04:40:00',6,_binary '\0',41,5),(42,'2024-06-04 22:00:00',5,_binary '\0',41,1),(44,'2024-06-05 16:00:00',15,_binary '\0',34,0),(45,'2024-06-05 22:00:00',7,_binary '\0',82,5),(49,'2024-06-05 14:00:00',4,_binary '\0',41,1);
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descuentos`
--

DROP TABLE IF EXISTS `descuentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descuentos` (
  `idDescuento` int NOT NULL,
  `Descuento` decimal(5,2) DEFAULT NULL,
  `descripcion` varchar(70) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idDescuento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descuentos`
--

LOCK TABLES `descuentos` WRITE;
/*!40000 ALTER TABLE `descuentos` DISABLE KEYS */;
INSERT INTO `descuentos` VALUES (1,5.00,'cortesia',_binary ''),(2,5.00,'cortesia',_binary ''),(3,5.00,'cortesia',_binary ''),(4,5.00,'cortesia',_binary ''),(5,5.00,'cortesia',_binary ''),(6,5.00,'cortesia',_binary ''),(7,5.00,'cortesia',_binary ''),(123456,5.00,'cortesia',_binary ''),(29290079,5.00,'cortesia',_binary '');
/*!40000 ALTER TABLE `descuentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idServicio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) DEFAULT NULL,
  `precio` decimal(5,2) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `imagenes` varchar(100) DEFAULT NULL,
  `idTipoServicio` int DEFAULT NULL,
  PRIMARY KEY (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'Corte varón',30.00,'Corte para caballeros que quieran verse a la moda',_binary '','../../img/cortehombre1.jpeg',1),(2,'Corte dama',30.00,'Corte para mujeres que quieran verse a la moda',_binary '','../../img/corteMujer1.jpeg',1),(3,'Corte niños',30.00,'Corte para los engreídos de la casa',_binary '','../../img/corteNiño1.jpg',1),(4,'Limpieza facial',60.00,'Dejamos limpia su cutis',_binary '',NULL,2),(5,'Mascarillas faciales',40.00,'Utilizamos las mascarillas para rejuvenecer su piel',_binary '',NULL,2),(6,'Masajes',90.00,'Relajamos su cuerpo con masajistas profesionales',_binary '',NULL,2),(7,'Manicura',40.00,'Servicio completo para las uñas de los manos',_binary '',NULL,2),(10,'Tratamiento de Keratina',100.00,'Fuerza, vitalidad y brillo para su cabello',_binary '',NULL,3),(11,'Extensiones de pestaña',20.00,'Ofrecemos extensiones de calidad para las pestañas',_binary '',NULL,3),(12,'Asesoramiento de imagen',15.00,'Asesoramiento completo a buen precio',_binary '','../../img1231.jpg',3),(21,'a',1.00,'a',_binary '','a',1),(22,'a',1.00,'a',_binary '','a',1);
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoperfil`
--

DROP TABLE IF EXISTS `tipoperfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoperfil` (
  `idTipoPerfil` int NOT NULL AUTO_INCREMENT,
  `cDescripcion` varchar(45) DEFAULT NULL,
  `lEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idTipoPerfil`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoperfil`
--

LOCK TABLES `tipoperfil` WRITE;
/*!40000 ALTER TABLE `tipoperfil` DISABLE KEYS */;
INSERT INTO `tipoperfil` VALUES (1,'Administrador',_binary ''),(2,'Usuario',_binary '\0'),(3,'No-cliente',_binary '');
/*!40000 ALTER TABLE `tipoperfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiposervicio`
--

DROP TABLE IF EXISTS `tiposervicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiposervicio` (
  `idTipoServicio` int NOT NULL AUTO_INCREMENT,
  `cDescripcion` varchar(45) DEFAULT NULL,
  `lEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idTipoServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiposervicio`
--

LOCK TABLES `tiposervicio` WRITE;
/*!40000 ALTER TABLE `tiposervicio` DISABLE KEYS */;
INSERT INTO `tiposervicio` VALUES (1,'Corte cabello',_binary ''),(2,'SPA',_binary ''),(3,'Otro Servicio',_binary '');
/*!40000 ALTER TABLE `tiposervicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `cUsuario` varchar(45) DEFAULT NULL,
  `cClave` varchar(45) DEFAULT NULL,
  `idTipoPerfil` int DEFAULT NULL,
  `lEstado` bit(1) DEFAULT NULL,
  `ntoken` int DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'dmerino','123456',1,_binary '',NULL),(8,'Sage','sage',2,_binary '',NULL),(10,'theman','123',3,_binary '',NULL),(12,'capi','123',2,_binary '',32),(33,'diego','123',3,_binary '',NULL),(34,'diego','123',2,_binary '',32),(35,'alonso','123',2,_binary '',32),(36,'ninja','123',2,_binary '',75),(37,'ninja','123',2,_binary '',75),(38,'carlazos','123',2,_binary '',44),(39,'logocito','12345',2,_binary '',62),(41,'lolo','123456',2,_binary '',55),(50,'nuevo','123',3,_binary '',NULL),(51,'kimono','123',3,_binary '',NULL),(55,'COLOCOLO','123',3,_binary '',NULL),(82,'mayroluwu','mayroluwu_',2,_binary '',15),(83,'nickname','123456',2,_binary '',35),(84,'yo','12345_',2,_binary '',32),(85,'ingresado','12345_',3,_binary '',62),(86,'hola','asd ',3,_binary '',NULL),(87,'asdasd','123',3,_binary '',NULL),(88,'diego1','diego123',3,_binary '',NULL),(89,'slash','smash',3,_binary '',NULL),(90,'karonte','caronte',3,_binary '',NULL),(91,'a','minos123',3,_binary '',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variables`
--

DROP TABLE IF EXISTS `variables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variables` (
  `idvariable` int NOT NULL AUTO_INCREMENT,
  `cNombre` varchar(100) DEFAULT NULL,
  `cValor` varchar(1000) DEFAULT NULL,
  `lEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idvariable`),
  UNIQUE KEY `cNombre_UNIQUE` (`cNombre`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variables`
--

LOCK TABLES `variables` WRITE;
/*!40000 ALTER TABLE `variables` DISABLE KEYS */;
INSERT INTO `variables` VALUES (1,'tituloAplicacion','Thaiz SPA',_binary ''),(2,'anoAplicacion','2024',_binary ''),(3,'tituloDiseno','SPA',_binary ''),(4,'textoDiseno','Tenemos varios tipos de SPA que podrían rejuvenecer su piel.',_binary ''),(5,'imgDiseno','/img/img1.jpg',_binary ''),(6,'tituloJavaScript','MANICURA',_binary ''),(7,'textoJavaScript','Hacemos unas manicuras increíbles',_binary ''),(8,'imgJavaScript','/img/img2.jpg',_binary ''),(9,'tituloPHP','PELUQUERIA',_binary ''),(10,'textoPhp','Te dejamos el cabello bien bonito',_binary ''),(11,'imgPhp','/img/img3.jpg',_binary ''),(50,'nuevo1','nuevo1',_binary ''),(62,'hola1','hola1',_binary ''),(68,'otrocarga1','otrocarga1',_binary '');
/*!40000 ALTER TABLE `variables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'peluqueria'
--

--
-- Dumping routines for database 'peluqueria'
--
/*!50003 DROP PROCEDURE IF EXISTS `actualizarServicio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarServicio`(_idServicio int, _nombre VARCHAR(70), _precio decimal(5,1), _descripcion VARCHAR(100), _imagenes VARCHAR(100),_idTipoServicio INT)
BEGIN
UPDATE servicios SET nombre=_nombre,precio=_precio,descripcion=_descripcion,imagenes=_imagenes, idTipoServicio=_idTipoServicio  WHERE idServicio=_idServicio;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ActualizarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarUsuario`(idUsuario_ INT, cUsuario_ VARCHAR(45),cClave_ VARCHAR(45),  idTipoPerfil_ INT)
BEGIN
UPDATE usuarios SET idTipoPerfil=idTipoPerfil_, cUsuario=cUsuario_,cClave=cClave_ WHERE usuarios.idUsuario=idUsuario_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `actualizarVariable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarVariable`(idvariable_ INT, cValor_ VARCHAR(1000))
BEGIN
UPDATE variables SET cValor=cValor_ WHERE idvariable=idvariable_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cambiarCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cambiarCliente`(idUsuario_ int, ntoken_ int)
BEGIN
-- declaro una variable verificadora
DECLARE rowCount INT;
    SELECT COUNT(*) INTO rowCount 
    FROM usuarios 
    WHERE idUsuario = idUsuario_ AND ntoken = ntoken_;
-- verificamos el rowcount
    IF rowCount > 0 THEN
-- actualizamos
        UPDATE usuarios 
        SET idTipoPerfil = 2 
        WHERE idUsuario = idUsuario_ AND ntoken = ntoken_;
        SELECT 'Usuario actualizado correctamente.' AS mensaje;
    ELSE
-- si falla
        SELECT 'Error: Usuario o token no válidos.' AS mensaje;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `crearCitaUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crearCitaUsuario`(_idCita INT, _idUsuario int, _idServicio int, _idDescuento INT, _fecha timestamp)
BEGIN
DECLARE descuentoExistente INT;
SELECT COUNT(*) INTO descuentoExistente FROM descuentos WHERE idDescuento=_idDescuento;
IF descuentoExistente > 0 OR _idDescuento=0 or _idDescuento is null THEN
		IF _idCita = 0 THEN
            -- AGREGANDO
            INSERT INTO citas(idUsuario,idServicio, idDescuento, fecha, estado) VALUES(_idUsuario, _idServicio, _idDescuento, _fecha, 0);
            SELECT 'Cita insertada correctamente' AS mensaje;
        END IF;
ELSE
    SELECT 'El descuento no existe' AS mensaje;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EliminarCita` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarCita`(_idCita INT)
BEGIN
delete from citas where citas.idCita=_idCita;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarServicio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarServicio`(_idServicio INT)
BEGIN
delete from servicios where servicios.idServicio=_idServicio;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EliminarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarUsuario`(idUsuario_ int)
BEGIN
delete from usuarios where usuarios.idUsuario=idUsuario_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EliminarVariable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarVariable`(idvariable_ int)
BEGIN
delete from variables where variables.idvariable=idvariable_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GuardarCitaAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GuardarCitaAdmin`(_idCita INT, _idUsuario int, _idServicio int, _idDescuento INT, _fecha timestamp, _estado int)
BEGIN
    DECLARE descuentoExistente INT;

    -- VERIFICO SI EXISTE EL USUARIO
    
    SELECT COUNT(*) INTO descuentoExistente FROM descuentos WHERE idDescuento=_idDescuento;

    IF descuentoExistente > 0 OR _idDescuento=0 or _idDescuento is null THEN
		IF _idCita = 0 THEN
            -- AGREGANDO
            INSERT INTO citas(idUsuario,idServicio, idDescuento, fecha, estado) VALUES(_idUsuario, _idServicio, _idDescuento, _fecha, 0);
            SELECT 'Cita insertada correctamente' AS mensaje;
        ELSE
            -- O ACTUALIZAMOS
            UPDATE citas SET idUsuario = _idUsuario, idServicio = _idServicio, idDescuento = _idDescuento, fecha = _fecha, estado= _estado WHERE idCita = _idCita;
            SELECT 'Cita actualizada correctamente' AS mensaje;
        END IF;
    ELSE
    SELECT 'El descuento no existe' AS mensaje;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GuardarServicio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GuardarServicio`(_idServicio int, _nombre VARCHAR(70), _precio decimal(5,1), _descripcion VARCHAR(100), _imagenes VARCHAR(100),_idTipoServicio INT)
BEGIN
if _idServicio=0
THEN
insert into servicios
(nombre,precio,descripcion,estado,imagenes,idTipoServicio)
values
(_nombre, _precio , _descripcion,1 , _imagenes, _idTipoServicio);
ELSE
update servicios
set
nombre=_nombre,
precio=_precio,
descripcion=_descripcion,
estado=1,
imagenes=_imagenes,
idTipoServicio=_idTipoServicio
where idServicio=_idServicio;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GuardarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GuardarUsuario`(_idUsuario INT, _cUsuario VARCHAR(45), _cClave VARCHAR(45), _idTipoPerfil INT)
BEGIN
    DECLARE usuarioExistente INT;
    
    -- VERIFICO SI EXISTE EL USUARIO
    SELECT COUNT(*) INTO usuarioExistente FROM Usuarios WHERE cUsuario = _cUsuario;
    
    -- SI EXISTE, ERROR
    IF usuarioExistente > 0 THEN
        SELECT 'El nombre de usuario ya existe' AS mensaje;
    ELSE
        -- SI NO EXISTE, SE AGREGA
        IF _idUsuario = 0 THEN
            -- AGREGANDO
            INSERT INTO Usuarios(cUsuario, cClave, idTipoPerfil, lEstado) VALUES(_cUsuario, _cClave, _idTipoPerfil, 1);
            SELECT 'Usuario insertado correctamente' AS mensaje;
        ELSE
            -- O ACTUALIZAMOS
            UPDATE Usuarios SET cUsuario = _cUsuario, cClave = _cClave, idTipoPerfil = _idTipoPerfil WHERE idUsuario = _idUsuario;
            SELECT 'Usuario actualizado correctamente' AS mensaje;
        END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GuardarUsuarioTemp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GuardarUsuarioTemp`(_idUsuario INT,_cUsuario VARCHAR(45),_cClave VARCHAR(45), _idTipoPerfil INT,_ntoken int)
BEGIN
if _idUsuario =0
then
insert INTO Usuarios(cUsuario, cClave, idTipoPerfil, lEstado,ntoken)
values(_cUsuario, _cClave, _idTipoPerfil, 1,_ntoken);
else
update Usuarios
set
cUsuario=_cUsuario,
cClave=_cClave,
idTipoPerfil=_idTipoPerfil,
ntoken=_ntoken
where idUsuario=_idUsuario;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GuardarVariable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GuardarVariable`(_idvariable int, cNombre VARCHAR(100), cValor VARCHAR(1000))
BEGIN
if _idvariable=0
THEN
insert into Variables
(cNombre,cValor,lEstado)
values
(cNombre,cValor,1);
ELSE
update Variables
set
cNombre=cNombre,
cValor=cValor
where idvariable=_idvariable;

end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `IdAlto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `IdAlto`()
BEGIN
    DECLARE max_id INT;
    SELECT MAX(idUsuario) INTO max_id FROM usuarios;
    SELECT max_id AS 'ID más alto';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ListarCitasAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListarCitasAdmin`()
BEGIN
SELECT 
    idcita,
    u.cusuario,
    s.nombre,
    s.precio,
    d.iddescuento,
    d.descuento,
    d.descripcion,
    fecha,
    c.estado
FROM
    citas AS c
        INNER JOIN
    usuarios AS u ON u.idUsuario = c.idusuario
        INNER JOIN
    servicios AS s ON s.idservicio = c.idservicio
        LEFT JOIN
    descuentos AS d ON d.idDescuento = c.idDescuento;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ListarCitasUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListarCitasUsuario`()
BEGIN
SELECT 
    c.idUsuario,
    s.nombre,
    s.precio,
    d.iddescuento,
    d.descuento,
    d.descripcion,
    fecha,
    c.estado
FROM
    citas AS c
        INNER JOIN
    usuarios AS u ON u.idUsuario = c.idusuario
        INNER JOIN
    servicios AS s ON s.idservicio = c.idservicio
        LEFT JOIN
    descuentos AS d ON d.idDescuento = c.idDescuento;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ListarServicios` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListarServicios`()
BEGIN
select * from servicios where estado=1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ListarUsuarios` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListarUsuarios`()
BEGIN
select
idUsuario,
cUsuario,
cClave,
tipoperfil.idTipoPerfil,
usuarios.lEstado,
tipoperfil.cdescripcion
from usuarios
inner join tipoperfil
on usuarios.idtipoperfil=tipoperfil.idtipoperfil;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ListarVariables` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListarVariables`()
BEGIN
select idVariable,cNombre,cValor from Variables where lEstado=1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ValidarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ValidarUsuario`(cUsuario_ VARCHAR(45),cClave_ VARCHAR(45))
BEGIN
SELECT
Usuarios.idUsuario,
Usuarios.cUsuario,
Usuarios.idTipoPerfil,
TipoPerfil.cDescripcion
FROM Usuarios
inner join TipoPerfil on Usuarios.idTipoPerfil=TipoPerfil.idTipoPerfil WHERE Usuarios.lEstado=1 
and Usuarios.cUsuario=cUsuario_
-- and lower(Usuarios.cUsuario)=lower(cUsuario_)
and Usuarios.cClave=cClave_
;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-18 17:09:12
