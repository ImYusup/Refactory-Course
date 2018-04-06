-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `author` (`name`, `email`, `address`, `author_id`) VALUES
('erdi',	'bla2@gmail.com',	'BTP BLok. M No.582, Makassar',	1),
('mulia nasution',	'mul14@email.com',	'bandung',	2);

DROP TABLE IF EXISTS `author_book`;
CREATE TABLE `author_book` (
  `isbn` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  KEY `author_id` (`author_id`),
  KEY `isbn` (`isbn`),
  CONSTRAINT `author_book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `author_book_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `book` (`isbn`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `author_book` (`isbn`, `author_id`) VALUES
(1,	1),
(2,	1),
(3,	1),
(3,	2);

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `isbn` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `book` (`isbn`, `title`) VALUES
(1,	'React The Best'),
(2,	'Dilan 1990'),
(3,	'Vue The Best');

-- 2018-03-26 11:11:14
