CREATE TABLE SleepFollowing (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hoursSlept INT NOT NULL,
    date DATE NOT NULL,
    supposedSleep INT NOT NULL,
    difference INT AS (hoursSlept - supposedSleep) STORED, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
