# SATv3 Format Specifications
The latest file format for SATURN Chart files. Designed to be human-readable.

## Spec
- SAT is a plaintext file encoded in UTF-8.
- Valid file extensions for SAT format files are: `.sat`
- Deserializers for SAT are case-sensitive.
- Items are separated by a newline character.
- Valid whitespace characters are: Space ` ` `(0x20)`
- Valid newline characters are: LF `\n` `(0x0A)` or CRLF `\r\n` `(0x0D 0x0A)`
- Valid decimal separators are: Period `.` `(0x2e)`
- Serializers and Deserializers **must** use `InvariantCulture` for string conversions.
- The amount of whitespace and newlines between blocks of data is arbitrary, but adhering to [Design Rules](#design-rules) is recommended for consistency.

## Core Concept: Timing
Objects are timed with "Measures" and "Ticks".

### Measure
A Measure corresponds to a bar / Measure in standard music notation. It serves as the most basic time division.  

> [!IMPORTANT]
> Measures begin at 0 and have no maximum value.  
> They must be an integer.

### Tick
Each Measure is subdivided into 1920 Ticks. They allow for more precise placement of Notes and evenly divide into common rhythmic subdivisions in music.  
Ticks are not beats. They function directly as a positional reference within a Measure, regardless of metre.

> [!IMPORTANT]
> Ticks begin at 0 and have a maximum value of 1919, as the timestamp would roll over to the next Measure on the 1920th Tick.  
> They must be an integer.

## Core Concept: Coordinate System
The shape of Notes is defined in a cyclic coordinate system, with a "Position" and "Size" value.
The circle is split into 60 lanes, each taking up a 6° arc.

### Position
The Position of a Note defines the clockwise-most lane it occupies.  
Positions begin at 3 o' Clock, then move counterclockwise as they increase.

> [!IMPORTANT]
> Positions begin at 0 and have a maximum value of 59, as they roll over back to 0 at lane 60.  
> They must be an integer.

#### Example - Position 0
<img src="/documentation/saturn-data/media/example_position_0.png" width="520" alt="Touch Note, Position 0, Size 10">

#### Example - Position 5
<img src="/documentation/saturn-data/media/example_position_5.png" width="520" alt="Touch Note, Position 5, Size 10">

#### Example - Position 20
<img src="/documentation/saturn-data/media/example_position_20.png" width="520" alt="Touch Note, Position 20, Size 10">

### Size
The Size of a Note defines how many lanes it spans across. 
Notes always sweep **counterclockwise** from their starting Position.

> [!IMPORTANT]
> Sizes begin at 1 and have a maximum value of 60.  
> They must be an integer.

#### Example - Size 5
<img src="/documentation/saturn-data/media/example_size_5.png" width="520" alt="Touch Note, Position 0, Size 5">

#### Example - Size 10
<img src="/documentation/saturn-data/media/example_size_10.png" width="520" alt="Touch Note, Position 0, Size 10">

#### Example - Size 15
<img src="/documentation/saturn-data/media/example_size_15.png" width="520" alt="Touch Note, Position 0, Size 15">

## Core Concept: Multi-line Objects
Some objects are made up of multiple sub-objects. Currently, this includes Hold Notes, Stop Effect Events, and Reverse Effect Events.

TODO.

## Comments
SATv3 deserializers will ignore any line that begins with a Number sign `#`.  
This lets you write comments in Chart files that won't affect the elements of the Chart.
```sat
# This line is a comment and will not be deserialized.
TOUCH _ _ 70   0    45   5   
```
```sat
# This line and the following line are comments and will not be deserialized.
# TOUCH _ _ 70   0    45   5   
```

Because a line is marked as comment by placing a Number sign at the beginning, this is not possible:
```sat
TOUCH _ _ 70   0    45   5    # This is not a comment.
```

> [!IMPORTANT]
> Because commented lines are completely skipped by the deserializer, importing a SATv3 file and exporting it again will not preserve the commented line.
> 
> If you want a timestamped "comment" to annotate specific parts of a Chart that gets preserved between import and export, refer to [Bookmarks](#bookmarks).

## Metadata
Metadata tags build a key-value pair with blocks of data.  
A metadata tag begins with an At Sign `@` `(0x40)`, and its key is written in MACRO_CASE.  
The value of a metadata tag is not case-sensitive and can contain any character supported by UTF-8.  

The value of a metadata tag cannot span multiple lines.
```sat
@TITLE          The quick brown fox
                jumped over the lazy dog.

# @TITLE == "The quick brown fox"
# The rest will cause a deserializer error or be ignored.
```

The value of a metadata tag can **not** begin or end with whitespace. Any whitespace before and after the value is trimmed.
```sat
@TITLE          Lots of White Space    

# @TITLE == "Lots of White Space"
# @TITLE != "    Lots of White Space    "
```

Defining the same metadata tag multiple times is valid, but may lead to undefined results.  
SATURN DATA scans line-by-line, so the last defined metadata tag will overwrite previous duplicates.
```sat
@LEVEL          10.0
@LEVEL          15.0

# @LEVEL == 15.0
```

SATURN has a fixed set of metadata tags with different kinds of value types:

| Tag               | Value Type | Use Case                                                                        |
|-------------------|------------|---------------------------------------------------------------------------------|
| `@SAT_VERSION`    | Integer    | The format version of the file that defined this entry.                         |
| `@ID`             | String     | The string used to identify an Entry.                                           |
| `@TITLE`          | String     | The title of the chart's song.                                                  |
| `@READING`        | String     | The kana reading of the title.                                                  |
| `@ARTIST`         | String     | The artist of the chart's song.                                                 |
| `@BPM_MESSAGE`    | String     | The bpm value(s) to display on the song select screen.                          |
| `@REVISION`       | String     | The current revision of the chart.                                              |
| `@NOTES_DESIGNER` | String     | The notes designer of the chart.                                                |
| `@DIFFICULTY`     | Difficulty | The difficulty of the chart.                                                    |
| `@LEVEL`          | Float      | The level (or constant) of the chart.                                           |
| `@CLEAR`          | Float      | The percentage of the clear bar that needs to be reached to clear a song.       |
| `@PREVIEW_BEGIN`  | Timestamp  | The timestamp the chart preview starts at.                                      |
| `@PREVIEW_END`    | Timestamp  | The timestamp the chart preview ends at.                                        |
| `@BACKGROUND`     | Background | The default background for the chart.                                           |
| `@JACKET`         | Filepath   | Path to the jacket image file.                                                  |
| `@AUDIO`          | Filepath   | Path to the background audio file.                                              |
| `@VIDEO`          | Filepath   | Path to the background video file.                                              |
| `@AUDIO_OFFSET`   | Seconds    | Audio offset in seconds                                                         |
| `@VIDEO_OFFSET`   | Seconds    | Video offset in seconds                                                         |
| `@END`            | Timestamp  | The Chart End timestamp, where playback stops and the gameplay result is shown. |
| `@TUTORIAL`       | Boolean    | Should this chart be shown in tutorial mode?                                    |
| `@AUTO_READING`   | Boolean    | Should the Reading be determined automatically?                                 |
| `@AUTO_BPM_MSG`   | Boolean    | Should the BpmMessage be determined automatically?                              |
| `@AUTO_CLEAR`     | Boolean    | Should the ClearThreshold be determined automatically?                          |
| `@AUTO_END`       | Boolean    | Should the ChartEnd be determined automatically?                                |

## Regions
Regions define a list of objects. These objects are usually of similar or related types.  
Like metadata tags, a region tag begins with an At Sign `@` `(0x40)`, and its key is written in MACRO_CASE.  


A region either lasts until the next region is defined, or until the end of the file.
```sat
# @EVENTS region begins here.
@EVENTS
...

# @EVENTS region ends here.
# @LANE region begins here.
@LANE
...

# @LANE region ends here.
# [End of File]
```

### @BOOKMARKS
`@BOOKMARKS` regions contain Bookmarks. Objects of any other type/structure are not supported.

Defining multiple `@BOOKMARKS` regions is possible, but **heavily** discouraged. 
SATURN DATA will merge their contents into a single list in the Chart during importing, 
and if exported again, a single `@BOOKMARKS` region with the merged contents will be written.

The only valid object type in a `@BOOKMARKS` region is a Bookmark.

Bookmarks have the following structure:
```
COLOR  MEASURE  TICK  MESSAGE
```

```sat
@BOOKMARKS
FF0000    0    0    This bookmark is red!
00FF00    1    0    This bookmark is green!
0000FF    2    0    This bookmark is blue!
```

The message of a bookmark is not case-sensitive and can contain any character supported by UTF-8, as long as it doesn't span multiple lines.
```sat
@BOOKMARKS
804000    0    0    The quick brown fox
                    jumped over the lazy dog.
                    
# Bookmark Message == "The quick brown fox"
# The rest will cause a deserializer error or be ignored.
```

```sat
@BOOKMARKS
804000    0    0    The quick brown fox
303030    10   0    jumped over the lazy dog.

# This set of two bookmarks is perfectly valid.
```

### @EVENTS
`@EVENTS` regions contain Events that aren't bound to a specific Layer. These are also referred to as "global" Events. Objects of any other type/structure are not supported.

Defining multiple `@EVENTS` regions is possible, but **heavily** discouraged. 
SATURN DATA will merge their contents into a single list in the Chart during importing, 
and if exported again, a single `@EVENTS` region with the merged contents will be written.

Valid object types in `@EVENTS` regions are:

| Type Key   | Object Name           |
|------------|-----------------------|
| `TEMPO`    | Tempo Change Event    |
| `METRE`    | Metre Change Event    |
| `TUTORIAL` | Tutorial Marker Event |

Global Events have the following structure:
```
TYPE MEASURE TICK DATA
```

#### Tempo Change Event
The "DATA" column for Tempo Change Events defines the Tempo to change to. This value **must** be positive.

```sat
@EVENTS
TEMPO     0    0     185.000000

# The Tempo gets changed to 185BPM.
```

#### Metre Change Event
The "DATA" column for Metre Change Events defines the Metre to change to. This column is split into two sub-columns. Both values **must** be a positive integer.
```sat
@EVENTS
METRE     0    0       3      4

# The Metre gets changed to 3/4.
```

#### Tutorial Marker Event
The "DATA" column for Tutorial Marker Events defines the dialogue key/action to perform.
```sat
@EVENTS
TUTORIAL  1    0    example_key

# A tutorial-specifc dialogue is triggered.
```

> [!NOTE]
> At the time of writing, SATURN does not have proper Tutorial Marker keys yet. These will be defined at a later date, and this specification will be updated accordingly.

### @LANE
`@LANE` regions contain Lane Toggle Notes. Objects of any other type/structure are not supported.

Defining multiple `@LANE` regions is possible, but **heavily** discouraged. 
SATURN DATA will merge their contents into a single list in the Chart during importing, 
and if exported again, a single `@LANE` region with the merged contents will be written.

Valid object types in `@LANE` regions are:

| Type Key | Object Name    |
|----------|----------------|
| `SHOW`   | Lane Show Note |
| `HIDE`   | Lane Hide Note |

Lane Toggle Notes have the following structure:
```
TYPE SWEEP_DIRECTION MEASURE TICK POSITION SIZE
```

`SWEEP_DIRECTION` defines the direction a Lane Toggle Note's animation travels in. Available options are:

| Symbol | Sweep Direction  |
|--------|------------------|
| `X`    | Center           |
| `>`    | Clockwise        |
| `<`    | Counterclockwise |
| `!`    | Instant          |

```sat
@LANE
# Shows lanes with a center sweep.
SHOW  X   0    0    15   60  

# Hides lanes with a clockwise sweep.
HIDE  >   1    0    15   60  

# Shows lanes with a counterclockwise sweep.
SHOW  <   2    0    15   60  

# Hides lanes with an instant sweep.
HIDE  !   3    0    15   60  
```

### @LAYER
`@LAYER` regions contain layer-bound Events and Notes. Objects of any other type/structure are not supported.

`@LAYER` regions build a key-value pair like metadata tags. Their value is the name of the Layer. 
The name of a Layer does not affect its function. It only exists for organisation/labeling in Chart editors.
```sat
# Layer with the name "Example" begins here
@LAYER Example
...
```

Defining multiple `@LAYER` regions is intended! They allow certain Events to only affect specific Notes, instead of all Notes at once.  
The "merging" behaviour for other regions therefore does not apply to `@LAYER` regions. 
This means that two layers with the same name can exist. (This is not good chart design practice though.)
```sat
# Creates a layer with the name "Example".
@LAYER Example A
...

# Creates a second layer with the name "Example".
# Objects defined on this layer do *not* get merged into the first "Example" layer.
@LAYER Example A
...
```

The first defined Layer is the "Main Layer", regardless of its name. Auto-generated Measure and Beat Line Notes are added exclusively to this Layer to prevent visual clutter.
```sat
# This is the Main Layer. 
# All auto-generated Measure and Beat Line Notes are added to this layer.
@LAYER Example A
...

# This is not the Main Layer.
@LAYER Example B
...
```

Valid Event types in `@LAYER` regions are:

| Type Key  | Object Name                 |
|-----------|-----------------------------|
| `SPEED`   | Speed Change Event          |
| `VISIBLE` | Visibility Change Event     |
| `STOP`    | Stop Effect Event           |
| `REVERSE` | Reverse Effect Event        |

Valid Note types in `@LAYER` regions are:

| Type Key  | Object Name                 |
|-----------|-----------------------------|
| `TOUCH`   | Touch Note                  |
| `SNFWD`   | Snap Forward Note           |
| `SNBWD`   | Snap Backward Note          |
| `SLCLW`   | Slide Clockwise Note        |
| `SLCCW`   | Slide Counterclockwise Note |
| `CHAIN`   | Chain Note                  |
| `HOLD`    | Hold Note                   |
| `SYNC`    | Sync Note                   |
| `MLINE`   | Measure Line Note           |

#### Speed Change Event
Speed Change Events follow a similar structure as global Events. Their "speed" value can be any number, no matter if positive or negative.

```sat
@LAYER Example
Speed     0    0       0.500000

# The Scroll Speed for this Layer gets set to 0.5x speed.
```

#### Visibility Change Event
Visibility Change Events follow a similar structure as global Events. Their "visibility" value has to be a boolean, defined by the keywords `TRUE` and `FALSE`.

```sat
@LAYER Example
VISIBLE   7    0          FALSE
VISIBLE   7    960         TRUE

# The visibility of this Layer gets set to false (hidden), then true (visible).
```

#### Stop Effect Event
Stop Effect Events don't have a "DATA" column. Instead, they're one of the few [multi-line Objects](#core-concept-multi-line-objects).
Stop Effect Events **must** consist of two objects. They cannot have more or less.

```sat
@LAYER Example
STOP      4    0   
|         5    0   

# Stop Effect begins at Measure 4, and ends at Measure 5.
```

#### Reverse Effect Event
Reverse Effect Events don't have a "DATA" column. Instead, they're one of the few [multi-line Objects](#core-concept-multi-line-objects).
Reverse Effect Events **must** consist of three objects. They cannot have more or less.

```sat
@LAYER Example
REVERSE   1    0   
|         2    0   
|         3    0   

# Reverse Effect begins at Measure 1, and ends at Measure 2.
# Captured Notes are between Measure 2 and 3.
```

#### Normal Notes
Normal Notes have the following structure:
```
TYPE BONUS_TYPE JUDGEMENT_TYPE MEASURE TICK POSITION SIZE
```

`BONUS_TYPE` defines if the Note has a score or clear gauge bonus.  
Available Bonus Types are:

| Symbol | Bonus Type | Effect                                  |
|--------|------------|-----------------------------------------|
| `_`    | Normal     | Normal Scoring                          |
| `B`    | Bonus      | Clear gauge bonus, light visual effect. |
| `R`    | R          | Double Score, strong visual effect.     |

`JUDGEMENT_TYPE` defines if the Note follows special judgement logic.
Available Judgement Types are:

| Symbol | Judgement Type | Effect                                                         |
|--------|----------------|----------------------------------------------------------------|
| `_`    | Normal         | Normal Judgement                                               |
| `F`    | Fake           | No Judgement, score, or VFX. Note is purely visual decoration. |
| `A`    | Autoplay       | Automatic MARVELOUS judgement. Score and VFX are still active. |

```sat
@LAYER Example
TOUCH R _ 1    0    30   15  
CHAIN R _ 1    240  45   15  
CHAIN _ _ 1    480  45   15  
CHAIN _ _ 1    720  45   15  
SNFWD _ _ 1    1440 30   15  
SNBWD _ _ 2    0    45   15  
SLCLW B _ 2    480  30   15  
SLCCW B _ 2    960  45   15  

# A few Notes.
# Touch Note and first Chain Note are "R-Notes" and worth double score.
# Slide Notes are "Bonus Notes" and fill up the clear gauge more.
```

#### Hold Note
Hold Notes are one of the few [multi-line Objects](#core-concept-multi-line-objects).  
They **must** consist of **at least** two objects. They cannot have just one.

Hold Point Notes are not judgeable. Therefore, their Judgement Type is always "Normal" (`_`).
Their "Bonus Type" column is repurposed into a "Hold Point Render Type" column. Available values are:

| Symbol | Render Type | Effect                                                                                                                  |
|--------|-------------|-------------------------------------------------------------------------------------------------------------------------|
| `V`    | Visible     | Hold Point Note is accounted for when rendering Hold Note surface.                                                      |
| `H`    | Hidden      | Hold Point Note is ignored when rendering Hold Note surface.<br/>Judgement engine does not ignore hidden Points though. |

```sat
@LAYER Example
HOLD  _ _ 1    1440 30   15  
|     H _ 2    0    45   15  
|     V _ 2    480  30   15  

# Second Hold Point Note is marked to be "Hidden" and will be ignored by the renderer.
# The resulting Hold Note appears straight, while its "hitbox" still moves from side to side.
```

#### Sync Note
Sync Notes are not judgeable. Therefore, their Bonus Type and Judgement Type are both always "Normal" (`_ _`).

```sat
@LAYER Example
# This is valid.
SYNC  _ _ 1    960  30   25  

# This is invalid.
SYNC  R F 1    960  30   25  
```

#### Measure Line Note
Measure Line Notes don't have a Position or Size. They are always a full circle.  
They are also not judgeable. Therefore, they don't have Position or Size columns and their Bonus Type and Judgement Type are both always "Normal" (`_ _`).

```sat
@LAYER Example
# This is valid.
MLINE _ _ 1    240 

# This is invalid. (Measure Line Notes are not positionable)
MLINE _ _ 1    240  30   15  

# This is invalid. (Measure Line Notes are not judgeable.)
MLINE R F 1    240 
```

## Design Rules
🚧 Under Construction 🚧

## Sample Chart File
Let's try to "translate" a simple Chart file into English.
```sat
@EVENTS
TEMPO     0    0     120.000000
METRE     0    0       4      4

@LANE
SHOW  X   0    0    15   60  

@LAYER Main Layer
TOUCH R _ 1    0    30   15  
CHAIN _ _ 1    240  45   15  
SNFWD _ _ 2    0    45   15  
SLCLW B _ 2    480  30   15  
TOUCH _ _ 2    1440 30   15  

@LAYER Overtaking Note
SPEED     0    0       0.500000

TOUCH _ _ 2    1440 45   15  
```

For *Events*, there is...  
- A Tempo Change at 0, 0 that sets the Tempo to 120BPM.  
- A Metre Change at 0, 0 that sets the Metre to 4/4.  

For *Lane Toggles*, there is...  
- Show Lanes in a Center Sweep at 0, 0. It's at Position 15 with a Size spanning 60 lanes.  

For the *Main Layer*, there is...  
- A Touch R-Note at 1, 0. It's at Position 30, with a Size spanning 15 lanes.  
- A Chain Note at 1, 240. It's at Position 45, with a Size spanning 15 lanes.  
- A Snap Forward Note at 2, 0. It's at Position 45, with a Size spanning 15 lanes.  
- A Slide Clockwise Bonus Note at 2, 480. It's at Position 30, with a Size spanning 15 lanes.  
- A Touch Note at 2, 1440. It's at Position 30, with a Size spanning 15 lanes.  

For the *Overtaking Note* Layer, there is...
- A Speed Change at 0, 0 that sets the Scroll Speed to 0.5x.
- A Touch Note at 2, 1440. It's at Position 45, with a Size spanning 15 lanes.