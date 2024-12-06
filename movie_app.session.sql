SELECT * FROM moviecollection

DELETE FROM moviecollection
ALTER TABLE moviecollection ADD CONSTRAINT unique_movie UNIQUE (title, year);
DESCRIBE moviecollection

EXPLAIN moviecollection

SHOW CREATE TABLE moviecollection

TRUNCATE TABLE moviecollection

CREATE USER 'root1@''%' IDENTIFIED BY 'Project130';
GRANT ALL PRIVILEGES ON movie_app.* TO 'root1'@'%';
FLUSH PRIVILEGES;
