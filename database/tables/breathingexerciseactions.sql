CREATE TABLE BreathingExerciseActions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    focusTimeDone FLOAT NOT NULL,
    relaxTimeDone FLOAT NOT NULL,
    amountDone FLOAT AS (focusTimeDone + relaxTimeDone) STORED,
    date DATE NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
