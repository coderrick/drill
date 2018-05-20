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

-- CREATE TABLE d_comments (
--     c_id serial PRIMARY KEY,
--     FOREIGN KEY (c_id) INTEGER REFERENCES drill_users(e_id),
--     comments VARCHAR(500)
-- );

INSERT INTO drill_users (e_id, usr_name, locations, heart_rate, metab_rate, calories, height, weight, friends, leader)
VALUES (923824832042032932, 'h_tg', '(12.4,11.2)', '80/120', '45s', '3000', '60', '200lbs', '', TRUE);

INSERT INTO drill_users (e_id, usr_name, locations, heart_rate, metab_rate, calories, height, weight, friends, leader)
VALUES (1238242232032932, 'joggin_guy', '(11.4,10.234)', '80/120', '45s', '3000', '60', '200lbs', 'h_tg', FALSE);

-- INSERT INTO d_comments(e_id, comments)
-- VALUES (923824832042032932, 'Hi everybody join me at central park for dead lifts');