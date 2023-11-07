CREATE TABLE `stations` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE `types` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `max_seats` VARCHAR(20) NOT NULL,
    `fare_rate` INT NOT NULL
) ENGINE=InnoDB;

CREATE TABLE `trains` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `type` INT NOT NULL,
    `source` INT NOT NULL,
    `destination` INT NOT NULL,
    `departure` TIME NOT NULL,
    `arrival` TIME NOT NULL,
    `distance` INT NOT NULL,
    FOREIGN KEY (`type`) REFERENCES `types`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`source`) REFERENCES `stations`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`destination`) REFERENCES `stations`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `users` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE `tickets` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `train` INT NOT NULL,
    `user` INT NOT NULL,
    `seat_number` INT NOT NULL,
    FOREIGN KEY (`train`) REFERENCES `trains`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`user`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;