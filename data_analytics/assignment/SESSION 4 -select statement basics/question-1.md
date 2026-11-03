Create a table named MusicPlaylist with columns: id, song_name, artist, genre, and duration. Insert at least 5 records representing songs from your favorite Spotify playlist, then write a SELECT statement to retrieve all columns for all songs.

# Q1. MusicPlaylist Table

### 1. Create a Table

```sql
CREATE TABLE MusicPlaylist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    song_name VARCHAR(100),
    artist VARCHAR(100),
    genre VARCHAR(50),
    duration TIME
);
```

### 2. Insert At Least 5 Records

```sql
INSERT INTO MusicPlaylist (song_name, artist, genre, duration)
VALUES
('Kesariya', 'Arijit Singh', 'Romantic', '00:04:28'),
('Tum Hi Ho', 'Arijit Singh', 'Romantic', '00:04:22'),
('Apna Bana Le', 'Arijit Singh', 'Romantic', '00:04:21'),
('Heeriye', 'Arijit Singh', 'Pop', '00:03:19'),
('Channa Mereya', 'Arijit Singh', 'Sad', '00:04:49');
```

### 3. Retrieve All Columns for All Songs

```sql
SELECT * FROM MusicPlaylist;
```

