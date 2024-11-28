CREATE TABLE StarredReferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    link VARCHAR(255),
    image VARCHAR(255),
    typeOfDisorder VARCHAR(255), 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
