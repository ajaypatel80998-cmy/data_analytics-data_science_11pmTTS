Create a table named Playlists with columns: id, user_id, playlist_name, and total_likes. Insert at least 8 sample rows with different users and playlists, making sure some playlists have the same user_id.

``` sql
CREATE TABLE Playlists (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    playlist_name VARCHAR(100) NOT NULL,
    total_likes INT NOT NULL
);
```

``` sql
INSERT INTO Playlists (id, user_id, playlist_name, total_likes) VALUES
(1, 101, 'Gujarati Hits', 500),
(2, 101, 'Bollywood Mix', 800),
(3, 101, 'Workout Songs', 800),
(4, 102, 'Romantic Songs', 650),
(5, 102, 'Party Mix', 900),
(6, 103, 'Relaxing Music', 400),
(7, 103, 'Travel Vibes', 700),
(8, 104, 'Old Classics', 300);
```