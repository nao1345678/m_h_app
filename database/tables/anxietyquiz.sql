CREATE TABLE AnxietyQuiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    score FLOAT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
