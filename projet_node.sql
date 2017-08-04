CREATE DATABASE  IF NOT EXISTS `projet_node` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `projet_node`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: projet_node
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `budget`
--

DROP TABLE IF EXISTS `budget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `budget` (
  `idbudget` int(11) NOT NULL AUTO_INCREMENT,
  `personne` varchar(45) DEFAULT NULL,
  `origine` varchar(45) DEFAULT NULL,
  `montant` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`idbudget`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budget`
--

LOCK TABLES `budget` WRITE;
/*!40000 ALTER TABLE `budget` DISABLE KEYS */;
INSERT INTO `budget` VALUES (2,'aaa','15561515',3453.00);
/*!40000 ALTER TABLE `budget` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `depense`
--

DROP TABLE IF EXISTS `depense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `depense` (
  `iddepense` int(11) NOT NULL AUTO_INCREMENT,
  `personne` varchar(45) DEFAULT NULL,
  `poste` varchar(45) DEFAULT NULL,
  `montant` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`iddepense`),
  UNIQUE KEY `iddepense_UNIQUE` (`iddepense`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depense`
--

LOCK TABLES `depense` WRITE;
/*!40000 ALTER TABLE `depense` DISABLE KEYS */;
INSERT INTO `depense` VALUES (27,'18','569',9999.00),(26,'aaa','18',7354.00),(24,'aaa','a',78.00);
/*!40000 ALTER TABLE `depense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origine`
--

DROP TABLE IF EXISTS `origine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `origine` (
  `idorigine` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorigine`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origine`
--

LOCK TABLES `origine` WRITE;
/*!40000 ALTER TABLE `origine` DISABLE KEYS */;
INSERT INTO `origine` VALUES (1,'78952'),(2,'3512'),(3,'25'),(4,'15561515'),(5,'6156'),(6,'1961898');
/*!40000 ALTER TABLE `origine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poste`
--

DROP TABLE IF EXISTS `poste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `poste` (
  `idposte` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idposte`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poste`
--

LOCK TABLES `poste` WRITE;
/*!40000 ALTER TABLE `poste` DISABLE KEYS */;
INSERT INTO `poste` VALUES (1,'poste1'),(2,'poste56'),(3,'18'),(4,'a'),(5,'569'),(6,'56'),(7,'aaa'),(8,'aaaaaaa'),(9,'95124523');
/*!40000 ALTER TABLE `poste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentree`
--

DROP TABLE IF EXISTS `rentree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentree` (
  `idrentree` int(11) NOT NULL AUTO_INCREMENT,
  `personne` varchar(45) DEFAULT NULL,
  `origine` varchar(45) DEFAULT NULL,
  `montant` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`idrentree`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentree`
--

LOCK TABLES `rentree` WRITE;
/*!40000 ALTER TABLE `rentree` DISABLE KEYS */;
INSERT INTO `rentree` VALUES (5,'log1','15561515',67845.00);
/*!40000 ALTER TABLE `rentree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'enfant',
  PRIMARY KEY (`iduser`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'aaa','aaa','aaa','parent'),(2,'log1','pass1','email1','parent'),(3,'log2','pass2','email2','autre'),(4,'personne56',NULL,NULL,'manuel'),(5,'65',NULL,NULL,'manuel'),(6,'569',NULL,NULL,'manuel'),(7,'987',NULL,NULL,'manuel'),(8,'aaaaa',NULL,NULL,'manuel'),(9,'aaaaaaa',NULL,NULL,'manuel'),(10,'18',NULL,NULL,'manuel'),(11,'56132',NULL,NULL,'manuel'),(12,'15315353153',NULL,NULL,'manuel'),(13,'561',NULL,NULL,'manuel'),(14,'648891896',NULL,NULL,'manuel'),(15,'aze','aze',NULL,'enfant'),(16,'as','as',NULL,'enfant'),(17,'email1','email1',NULL,'enfant');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-13 16:28:33
