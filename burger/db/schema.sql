CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers_table
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(55),
  devoured BOOL,
  date TIMESTAMP,
  PRIMARY KEY (id)
)