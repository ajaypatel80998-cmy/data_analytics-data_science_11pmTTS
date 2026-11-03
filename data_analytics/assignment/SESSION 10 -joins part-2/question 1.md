Create two tables: Influencers (id, name) and Collaborations (id, influencer1_id, influencer2_id, collab_date). Write a SQL FULL JOIN query to list all influencers and show their collaboration partner names if any, including influencers with no collaborations.

``` sql
CREATE TABLE Influencers (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Collaborations (
    id INT PRIMARY KEY,
    influencer1_id INT,
    influencer2_id INT,
    collab_date DATE
);
```

### Sample data

``` sql
INSERT INTO Influencers (id, name) VALUES
(1, 'Aarav'),
(2, 'Diya'),
(3, 'Kabir'),
(4, 'Meera');

INSERT INTO Collaborations
(id, influencer1_id, influencer2_id, collab_date) VALUES
(1, 1, 2, '2026-01-10'),
(2, 2, 3, '2026-02-15');
```

### FULL OUTER JOIN query

``` sql
SELECT
    i1.name AS influencer_name,
    i2.name AS collaboration_partner,
    c.collab_date
FROM Influencers AS i1
LEFT JOIN Collaborations AS c
    ON i1.id = c.influencer1_id
LEFT JOIN Influencers AS i2
    ON c.influencer2_id = i2.id

UNION

SELECT
    i2.name AS influencer_name,
    i1.name AS collaboration_partner,
    c.collab_date
FROM Influencers AS i1
RIGHT JOIN Collaborations AS c
    ON i1.id = c.influencer1_id
LEFT JOIN Influencers AS i2
    ON c.influencer2_id = i2.id;
```


``` sql
SELECT
    i.id,
    i.name,
    c.id AS collaboration_id,
    c.collab_date,
    CASE
        WHEN c.influencer1_id = i.id THEN partner.name
        ELSE partner2.name
    END AS collaboration_partner
FROM Influencers AS i
LEFT JOIN Collaborations AS c
    ON i.id = c.influencer1_id
    OR i.id = c.influencer2_id
LEFT JOIN Influencers AS partner
    ON c.influencer2_id = partner.id
LEFT JOIN Influencers AS partner2
    ON c.influencer1_id = partner2.id;