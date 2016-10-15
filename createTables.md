You're going to be putting your new SQL skills to the test by creating FavoriteDB; a database which has three tables in it that will hold your favorite foods, songs, and movies.

For the table favorite_foods...
Create the column "food" which can take in a 50 character string and cannot be NULL
Create the column "score" which can take in an integer

For the table favorite_songs...
Create the column "song" which can take in a 100 character string and cannot be NULL
Create the column "artist" which can take in a 50 character string
Create the column "score" which can take in an integer

For the table favorite_movies...
Create the column "film" which can take in a string and cannot be NULL
Create the column "five_times" which can take in a boolean
create the column "score" which can take in an integer

---------------for favorite_movies table------------------------
id INTEGER(11) AUTO_INCREMENT NOT NULL,
movie VARCHAR(100) NOT NULL, 
five_times BOOLEAN DEFAULT FALSE,
score INTEGER(10), 
PRIMARY KEY (id); 