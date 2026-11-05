
Write an SQL statement that would update the song_name for all songs by 'AP Dhillon' in your Playlist to add '(Remix)' at the end of the name, but only if the duration is more than 180 seconds.<br><br><em><strong>Constraint:</strong> Combine UPDATE with WHERE to target only the correct rows.</em>

``` sql
-- 5. Add '(Remix)' to AP Dhillon songs longer than 180 seconds
UPDATE Playlist
SET song_name = CONCAT(song_name, ' (Remix)')
WHERE artist = 'AP Dhillon'
  AND duration > 180
  AND song_name NOT LIKE '%(Remix)';
```

``` sql
-- Check the Playlist table
SELECT * FROM Playlist;
```