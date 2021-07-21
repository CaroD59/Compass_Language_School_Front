CREATE DATABASE Compass_Language_School;
CREATE TABLE IF NOT EXISTS `compass_language_school`.`users` (
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
	`isStaff` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 106
DEFAULT CHARACTER SET = utf8mb3;