Given this scenario: You want to show a list of all playlists and the songs inside them, like Spotify. Explain which JOIN type (INNER, LEFT, or RIGHT) you would use to show all playlists, even if some are empty, and write the SQL query for it.

``` sql
CREATE TABLE playlists (
    id INT PRIMARY KEY,
    playlist_name VARCHAR(100) NOT NULL
);

CREATE TABLE songs (
    id INT PRIMARY KEY,
    playlist_id INT,
    song_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);
```

### Sample data

``` sql
INSERT INTO playlists (id, playlist_name) VALUES
(1, 'Gujarati Hits'),
(2, 'Workout Mix'),
(3, 'Relaxing Music');

INSERT INTO songs (id, playlist_id, song_name) VALUES
(1, 1, 'Mara Veera'),
(2, 1, 'Vhalam Aavo Ne'),
(3, 2, 'Power Up');
```


``` sql
SELECT
    playlists.playlist_name,
    songs.song_name
FROM playlists
LEFT JOIN songs
    ON playlists.id = songs.playlist_id;
```