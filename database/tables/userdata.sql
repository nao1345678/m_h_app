CREATE TABLE UserData (
    date DATE NOT NULL,
    totalSleepDebt INT NOT NULL,
    timeBreath FLOAT NOT NULL,
    timeFocused FLOAT NOT NULL,
    totalTasksDone INT NOT NULL,
    totalHoursSlept INT NOT NULL,
    moodForToday INT NOT NULL,
    amountQuizTaken INT NOT NULL,
    recipesGenerated VARCHAR(255),
    formerAddictions VARCHAR(255), 
    journalEntries VARCHAR(255), 
    idUser INT FOREIGN KEY
);
