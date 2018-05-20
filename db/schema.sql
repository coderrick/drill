DROP DATABASE IF EXISTS drill;
CREATE DATABASE drill;
SET DATABASE = drill;
CREATE TABLE drill_users (
  n_id serial PRIMARY KEY,
  s_date DATE NOT NULL DEFAULT CURRENT_DATE,
  e_id INTEGER,
  usr_name VARCHAR(50),
  locations VARCHAR(50),
  heart_rate VARCHAR(50), 
  metab_rate VARCHAR(90),
  calories VARCHAR(20),
  height VARCHAR(20),
  weight VARCHAR(20),
  friends VARCHAR(100),
  leader BOOLEAN NOT NULL
);

INSERT INTO drill_users (e_id, usr_name, locations, heart_rate, metab_rate, calories, height, weight, friends, leader)
VALUES (923824832042032932, 'h_tg', '(12.4,11.2)', '80/120', '45s', '3000', '60', '200lbs', 'j_doe', TRUE);