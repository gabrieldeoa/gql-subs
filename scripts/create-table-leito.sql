CREATE TABLE `gql_subscription`.`leitos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `situacao` VARCHAR(45) NOT NULL,
  `status` INT(1) NOT NULL,
  `observacao` VARCHAR(100) NULL,
  `criado_em` DATETIME NULL,
  `alterado_em` DATETIME NULL,
  PRIMARY KEY (`id`));
