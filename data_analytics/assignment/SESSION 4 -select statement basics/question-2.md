2.Write a SQL query to display only the song_name and artist columns from the MusicPlaylist table, showing just the first 3 records using the LIMIT keyword.plz answer in md file.

# Question 2: Display First 3 Songs Using LIMIT

### SQL Query

```sql
SELECT song_name, artist
FROM MusicPlaylist
LIMIT 3;
```

### Explanation

- `SELECT song_name, artist` – Displays only song name and artist columns.
- `FROM MusicPlaylist` – Retrieves data from the MusicPlaylist table.
- `LIMIT 3` – Displays only the first 3 records.

### Output 

| song_name | artist |
|---|---|
| Kesariya | Arijit Singh |
| Apna Bana Le | Arijit Singh |
| Heeriye | Jasleen Royal |

**Note:** The output above is an example. Your actual output depends on the records inserted into your table.
.