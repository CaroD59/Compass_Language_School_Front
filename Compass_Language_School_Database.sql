CREATE DATABASE Compass_Language_School;
CREATE TABLE IF NOT EXISTS `compass_language_school`.`teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sex` TINYINT(1) NULL DEFAULT NULL,
  `firstname` VARCHAR(32) NOT NULL,
  `lastname` VARCHAR(64) NOT NULL,
  `zipcode` VARCHAR(8) NOT NULL,
  `city` VARCHAR(32) NOT NULL,
  `country` VARCHAR(32) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `mobile` VARCHAR(16) NULL DEFAULT NULL,
  `password` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
  CREATE TABLE IF NOT EXISTS `compass_language_school`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sex` TINYINT(1) NULL DEFAULT NULL,
  `firstname` VARCHAR(32) NOT NULL,
  `lastname` VARCHAR(64) NOT NULL,
  `zipcode` VARCHAR(8) NOT NULL,
  `city` VARCHAR(32) NOT NULL,
  `country` VARCHAR(32) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `mobile` VARCHAR(16) NULL DEFAULT NULL,
  `password` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
CREATE TABLE IF NOT EXISTS `compass_language_school`.`language` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `img` VARCHAR(100) NOT NULL,
  `price` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);
  
  CREATE TABLE IF NOT EXISTS `compass_language_school`.`planning` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `datetime` VARCHAR(100) NOT NULL,
  `hour` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `compass_language_school`.`blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `author` VARCHAR(64) NOT NULL,
  `img` VARCHAR(100) NULL,
  `imgalt` VARCHAR(100) NULL,
  `link` VARCHAR(200) NULL,
  `content1` MEDIUMTEXT NOT NULL,
  `content2` MEDIUMTEXT NULL,
  `content3` MEDIUMTEXT NULL,
  `content4` MEDIUMTEXT NULL,
  `content5` MEDIUMTEXT NULL,
  `datetime` VARCHAR(64) NOT NULL,
  `isactive` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE);
