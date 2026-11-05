Create a table called Playlist with columns: id (INT, primary key), song_name (VARCHAR), artist (VARCHAR), and duration (INT, seconds). Insert a single row for your current favorite song.

``` sql
-- 1. Create Playlist table
CREATE TABLE Playlist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    song_name VARCHAR(150) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    duration INT NOT NULL
);
```

``` sql
-- Insert one favorite song (example; change it to your favorite song)
INSERT INTO Playlist (song_name, artist, duration)
VALUES ('Perfect', 'Ed Sheeran', 263);
```