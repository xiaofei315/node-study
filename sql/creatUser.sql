CREATE TABLE IF NOT EXISTS `firstTable3`
(
    `runoob_id` INT UNSIGNED AUTO_INCREMENT,
    `runoob_title` VARCHAR(100) NOT NULL,
    `runoob_author`   VARCHAR(40)  NOT NULL,
    `submission_date` DATE, PRIMARY KEY (`runoob_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;