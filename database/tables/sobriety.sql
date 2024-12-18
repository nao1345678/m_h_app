CREATE TABLE Sobriety (
    id INT PRIMARY KEY AUTO_INCREMENT,
    addiction VARCHAR(255) NOT NULL,
    startingDate DATE NOT NULL,
    reason VARCHAR(255) NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
