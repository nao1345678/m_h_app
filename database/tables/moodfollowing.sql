CREATE TABLE MoodFollowing (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    mood INT NOT NULL,                
    date DATE NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
    );              
