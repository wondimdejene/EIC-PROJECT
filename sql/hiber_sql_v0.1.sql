/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.1.36-MariaDB : Database - hiber_v1
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`hiber_v1` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `hiber_v1`;

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `comment_id` int(25) NOT NULL AUTO_INCREMENT,
  `comment_body` text NOT NULL,
  `comment_date` time NOT NULL,
  `Fk_comment_by_id` int(25) DEFAULT NULL,
  `Fk_post_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FK_user_table_user_id` (`Fk_comment_by_id`),
  KEY `fk_post_id` (`Fk_post_id`),
  CONSTRAINT `FK_user_table_user_id` FOREIGN KEY (`Fk_comment_by_id`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Fk_post_table_post_id` FOREIGN KEY (`Fk_post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `follow` */

DROP TABLE IF EXISTS `follow`;

CREATE TABLE `follow` (
  `follow_id` int(25) NOT NULL,
  `fk_following_user_id` int(25) DEFAULT NULL,
  `fk_followed_user_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`follow_id`),
  KEY `fk_from_user_profile_one` (`fk_following_user_id`),
  KEY `fk_from_user_profile_two` (`fk_followed_user_id`),
  CONSTRAINT `fk_from_user_profile_one` FOREIGN KEY (`fk_following_user_id`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_from_user_profile_two` FOREIGN KEY (`fk_followed_user_id`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `notification` */

DROP TABLE IF EXISTS `notification`;

CREATE TABLE `notification` (
  `notification_id` int(25) NOT NULL,
  `notification` varchar(25) DEFAULT NULL,
  `fk_notification_for` int(25) DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `fk_user_profile_id` (`fk_notification_for`),
  CONSTRAINT `fk_user_profile_id` FOREIGN KEY (`fk_notification_for`) REFERENCES `user_profile` (`user_profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `post_id` int(25) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(200) NOT NULL,
  `post_body` text,
  `post_time` time NOT NULL,
  `post_like` int(25) DEFAULT NULL,
  `Fk_sub_topic_id` int(3) DEFAULT NULL,
  `FK_Post_by` int(25) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FK_Post_by` (`FK_Post_by`),
  KEY `fk_from_sub_topic` (`Fk_sub_topic_id`),
  CONSTRAINT `Fk_sub_topic_table` FOREIGN KEY (`Fk_sub_topic_id`) REFERENCES `sub_topic` (`sub_topic_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`FK_Post_by`) REFERENCES `user_profile` (`user_profile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

/*Table structure for table `post_report_type` */

DROP TABLE IF EXISTS `post_report_type`;

CREATE TABLE `post_report_type` (
  `post_report_type_id` int(1) NOT NULL,
  `post_report_type_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`post_report_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `reported_post` */

DROP TABLE IF EXISTS `reported_post`;

CREATE TABLE `reported_post` (
  `reported_post_id` int(25) NOT NULL,
  `fk_post_id` int(25) DEFAULT NULL,
  `fk_post_by` int(25) DEFAULT NULL,
  `fk_post_report_type_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`reported_post_id`),
  KEY `fk_from_post` (`fk_post_id`),
  KEY `fk_from_user_profile` (`fk_post_by`),
  KEY `fk_from_post_report_type` (`fk_post_report_type_id`),
  CONSTRAINT `fk_from_post` FOREIGN KEY (`fk_post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_from_post_report_type` FOREIGN KEY (`fk_post_report_type_id`) REFERENCES `post_report_type` (`post_report_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_from_user_profile` FOREIGN KEY (`fk_post_by`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `saved_pages` */

DROP TABLE IF EXISTS `saved_pages`;

CREATE TABLE `saved_pages` (
  `saved_pages_id` int(25) NOT NULL,
  `Fk_post_id` int(25) DEFAULT NULL,
  `Fk_user_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`saved_pages_id`),
  KEY `fk_from_post_table` (`Fk_post_id`),
  KEY `fk_from_user_profile_table` (`Fk_user_id`),
  CONSTRAINT `fk_from_post_table` FOREIGN KEY (`Fk_post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_from_user_profile_table` FOREIGN KEY (`Fk_user_id`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `sub_topic` */

DROP TABLE IF EXISTS `sub_topic`;

CREATE TABLE `sub_topic` (
  `sub_topic_id` int(3) NOT NULL AUTO_INCREMENT COMMENT 'sub_topic_primary key',
  `sub_topic_name` varchar(100) NOT NULL,
  `Fk_topic_id` int(2) DEFAULT NULL COMMENT 'topic table topic id foreign key',
  PRIMARY KEY (`sub_topic_id`),
  KEY `Fk_from_topic_table` (`Fk_topic_id`),
  CONSTRAINT `Fk_from_topic_table` FOREIGN KEY (`Fk_topic_id`) REFERENCES `topic` (`topic_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Table structure for table `topic` */

DROP TABLE IF EXISTS `topic`;

CREATE TABLE `topic` (
  `topic_id` int(2) NOT NULL AUTO_INCREMENT,
  `topic_name` varchar(25) NOT NULL,
  PRIMARY KEY (`topic_id`) COMMENT 'topic table primary key'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Table structure for table `user_auth` */

DROP TABLE IF EXISTS `user_auth`;

CREATE TABLE `user_auth` (
  `user_auth_id` int(25) NOT NULL,
  `user_auth_token` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_auth_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `user_profile` */

DROP TABLE IF EXISTS `user_profile`;

CREATE TABLE `user_profile` (
  `user_profile_id` int(25) NOT NULL AUTO_INCREMENT,
  `user_profile_name` varchar(25) DEFAULT NULL,
  `user_profile_bio` varchar(100) DEFAULT 'Not set',
  `fk_user_auth_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`user_profile_id`),
  KEY `fk_user_auth` (`fk_user_auth_id`),
  CONSTRAINT `fk_user_auth` FOREIGN KEY (`fk_user_auth_id`) REFERENCES `user_auth` (`user_auth_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
