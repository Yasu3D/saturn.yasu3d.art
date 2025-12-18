# Chart Statistics
<img src="media/chart_statistics.png">

The Chart Statistics Tool Window lists various interesting statistics about a Chart.

## Note Graph
The note graph displays the ratio of different Note Types with colored squares.
The displayed colors follow your chosen Note colors.

> [!TIP]
> You can also hover over each square in the graph to see what Note Type it represents.

## Statistics

#### File Name
The name of the currently opened file.

#### Max Combo
The highest achievable combo of a Chart when playing in SATURN.

#### Score

##### Score per Note
The Score gained when getting a MARVELOUS judgement on a normal Note when playing in SATURN.

```
score = 1,000,000 / (normalNotes + bonusNotes + rNotes * 2)
```

##### Score per R-Note
The Score gained when getting a MARVELOUS judgement on an R-Note when playing in SATURN.

```
score = 2 * (1,000,000 / (normalNotes + bonusNotes + rNotes * 2))
```

#### Object Counts
The number of a specific type of object.

`# of [...]` is always the *total* number, adding up all specific counts listed below it.  
`...of those [...]` is the number of objects of a more specific type in the total listed above it.