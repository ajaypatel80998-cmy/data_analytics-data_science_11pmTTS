Using a SELF JOIN, write a query on a table called Playlists (id, user_id, playlist_name, parent_playlist_id) to display each playlist alongside its parent playlist name, similar to how Spotify shows nested playlists.<br><br><em><strong>Hint:</strong> Join Playlists with itself on parent_playlist_id = id.</em>


``` sql
CREATE TABLE Playlists (
    id INT PRIMARY KEY,
    user_id INT,
    playlist_name VARCHAR(100) NOT NULL,
    parent_playlist_id INT NULL
);
```

### Sample data

``` sql
INSERT INTO Playlists
(id, user_id, playlist_name, parent_playlist_id) VALUES
(1, 101, 'My Music', NULL),
(2, 101, 'Gujarati Songs', 1),
(3, 101, 'Workout Mix', 1),
(4, 102, 'Travel Songs', NULL);
```

### SELF JOIN query

``` sql
SELECT
    child.playlist_name AS playlist_name,
    parent.playlist_name AS parent_playlist_name
FROM Playlists AS child
LEFT JOIN Playlists AS parent
    ON child.parent_playlist_id = parent.id;
```