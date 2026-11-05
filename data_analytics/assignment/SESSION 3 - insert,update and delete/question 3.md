Update the artist name for one of your Playlist entries to fix a typo (for example, change 'Arjit Singh' to 'Arijit Singh') using the UPDATE statement with a WHERE clause.

``` sql
-- 3. Correct an artist name typo
UPDATE Playlist
SET artist = 'Arijit Singh'
WHERE artist = 'Arjit Singh'
  AND song_name = 'Kesariya';
```