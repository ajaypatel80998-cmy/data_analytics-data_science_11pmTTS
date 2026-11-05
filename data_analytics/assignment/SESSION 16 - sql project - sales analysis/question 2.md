Write SQL statements to create a table called TopSongs with columns: song_id, song_title, artist, streams, and release_date, then insert at least 5 records representing popular tracks from Spotify.

``` sql
CREATE TABLE TopSongs (
    song_id INTEGER PRIMARY KEY,
    song_title VARCHAR(150) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    streams BIGINT,
    release_date DATE
);
```



``` sql
INSERT INTO TopSongs (song_id, song_title, artist, streams, release_date)
VALUES
    (1, 'Blinding Lights', 'The Weeknd', 4000000000, '2019-11-29'),
    (2, 'Shape of You', 'Ed Sheeran', 3800000000, '2017-01-06'),
    (3, 'Someone You Loved', 'Lewis Capaldi', 3000000000, '2018-11-08'),
    (4, 'Dance Monkey', 'Tones and I', 2900000000, '2019-05-10'),
    (5, 'Starboy', 'The Weeknd', 2800000000, '2016-09-22');
```



``` sql
SELECT *
FROM TopSongs;
```