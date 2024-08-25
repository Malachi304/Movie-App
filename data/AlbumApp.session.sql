CREATE TABLE albums(
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year YEAR,
    cover_image VARCHAR(255)

);CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    user_email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE user_albums(
    user_album_id INT AUTO_INCREMENT PRIMART KEY,
    user_id INT,
    album_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (album_id) REFERENCES albums(album_id)

);

CREATE TABLE reviews(
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    album_id INT,
    user_id INT,
    review_text TEXT,
    rating INT,
    FOREIGN KEY (album_id) REFERENCES albums(album_id),
    FOREIGN KEY (user_id) REFERENCES albums(user_id)

);