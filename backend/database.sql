CREATE TABLE `players` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `position` text NOT NULL,
  `number` int NOT NULL,
  `url_image` text,
  `favorite_team` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO players (title) VALUES ('Stuff'), ('Doodads');
