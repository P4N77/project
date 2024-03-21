CREATE DATABASE IF NOT EXISTS projectDB;

CREATE TABLE users(
    id INT(12) NOT NULL,
    name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    tel VARCHAR(14),
    PRIMARY KEY(id)
);

INSERT INTO users VALUES
(1342332, 'John','John',434347),
(1223332, 'Jodsfn','Jdfsdfhn',45487),
(126332, 'Jgnhn','Jrghn',463487);