CREATE TABLE JournalEntry (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    entry TEXT, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
