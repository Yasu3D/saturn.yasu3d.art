# MER Format Specifications
The original file format for Chart files.  
This format was *not* developed by me (yasu3d). Credit goes to the respective authors.

> Disclaimer: Since I didn't design the format, this specification is only a set of very confident educated guesses.

## Spec
- MER is a plaintext file encoded in UTF-8.
- Valid file extensions for the MER format are: `.mer`
- Deserializers for MER may be case-sensitive.
- Only one Object can be defined per line.
- Valid whitespace characters are: Space ` ` `(0x20)`
- Valid newline characters are: LF `\n` `(0x0A)` or CRLF `\r\n` `(0x0D 0x0A)`
- Valid decimal separators are: Period `.` `(0x2e)`
- Serializers and Deserializers **must** use `InvariantCulture` for string conversions.
- The amount of whitespace and newlines between blocks of data is arbitrary, but adhering to [Design Rules](#design-rules) is recommended for consistency.  

## File Structure
A MER file consists of a Header and a Body.  
The Header contains Metadata, the Body contains Event and Note data.  
They are separated by the `#BODY` Metadata Tag.

## Metadata
Metadata Tags must begin with a Number sign `#`.

### Original
Original MER files will contain the following Metadata Tags:

| Tag                    | Purpose                                                            |
|------------------------|--------------------------------------------------------------------|
| `#MUSIC_SCORE_ID`      | _Unknown/Unused._                                                  |
| `#MUSIC_SCORE_VERSION` | _Unknown/Unused._                                                  |
| `#GAME_VERSION`        | _Unknown/Unused._                                                  |
| `#MUSIC_FILE_PATH`     | Path to background audio cue.                                      |
| `#OFFSET`              | Audio offset in seconds. Positive value makes audio play later.    |
| `#MOVIEOFFSET`         | Video offset in seconds. Positive value makes video play later.    |
| `#BODY`                | Ends the Chart Header and deNotes the beginning of the Chart Body. |

### Original Prototype
A few prototype/testing MER files contain additional Metadata that SATURN DATA can read:

| Tag                                   | Purpose                                                            |
|---------------------------------------|--------------------------------------------------------------------|
| `#MUSIC_ID`                           | _Unknown/Unused._                                                  | 
| `#MUSIC_SCORE_ID`                     | _Unknown/Unused._                                                  | 
| `#MUSIC_SCORE_VERSION`                | _Unknown/Unused._                                                  | 
| `#GAME_VERSION`                       | _Unknown/Unused._                                                  | 
| `#MUSIC_FILE_PATH`                    | Path to background audio cue.                                      | 
| `#MUSIC_NAME @JPN`                    | Title of the song.                                                 | 
| `#MUSIC_NAME_RUBY @JPN`               | Kana reading of the title.                                         | 
| `#ARTIST_NAME @JPN`                   | Artist of the song.                                                | 
| `#ARTIST_NAME_RUBY @JPN`              | Kana reading of the artist.                                        | 
| `#MUSIC_SCORE_CREATOR_NAME @JPN`      | Notes designer of the Chart.                                       | 
| `#MUSIC_SCORE_CREATOR_NAME_RUBY @JPN` | Kana reading of the Notes designer.                                | 
| `#MUSIC_NAME @ENG`                    | See above. Ignored by SATURN DATA.                                 | 
| `#MUSIC_NAME_RUBY @ENG`               | See above. Ignored by SATURN DATA.                                 | 
| `#ARTIST_NAME @ENG`                   | See above. Ignored by SATURN DATA.                                 | 
| `#ARTIST_NAME_RUBY @ENG`              | See above. Ignored by SATURN DATA.                                 | 
| `#MUSIC_SCORE_CREATOR_NAME @ENG`      | See above. Ignored by SATURN DATA.                                 | 
| `#MUSIC_SCORE_CREATOR_NAME_RUBY @ENG` | See above. Ignored by SATURN DATA.                                 | 
| `#JACKET_IMAGE_PATH`                  | Path to jacket image file.                                         | 
| `#DIFFICULTY`                         | Unknown. Likely Difficulty Id.<br/>(0 = Normal, 1 = Hard, etc.)    | 
| `#DISPLAY_LEVEL`                      | Chart level (or constant).                                         | 
| `#CREAR_NORMA_RATE`                   | Clear threshold.                                                   | 
| `#DISPLAY_BPM`                        | Bpm message on song select screen.                                 | 
| `#OFFSET`                             | Audio offset. Range/offset direction unknown.                      | 
| `#BODY`                               | Ends the Chart Header and deNotes the beginning of the Chart Body. | 

### BAKKA
BAKKA editor Chart files contain additional Metadata that SATURN DATA can read:

| Tag                       | Purpose                                                         |
|---------------------------|-----------------------------------------------------------------|
| `#X_BAKKA_MUSIC_FILENAME` | Path to background audio file.                                  |
| `#EDITOR_AUDIO`           | Path to background audio file.                                  |
| `#EDITOR_LEVEL`           | Chart level (or constant).                                      |
| `#EDITOR_AUTHOR`          | Notes designer of the Chart.                                    |
| `#EDITOR_PREVIEW_TIME`    | Preview begin in seconds.                                       |
| `#EDITOR_PREVIEW_LENGTH`  | Preview length in seconds.                                      |
| `#EDITOR_OFFSET`          | Audio offset in seconds. Positive value makes audio play later. |
| `#EDITOR_MOVIEOFFSET`     | Video offset in seconds. Positive value makes video play later. |

### WacK
WacK conversion Chart files contain additional Metadata that SATURN DATA can read:

| Tag               | Purpose                        |
|-------------------|--------------------------------|
| `#LEVEL`          | Chart level (or constant).     |
| `#AUDIO`          | Path to background audio file. |
| `#AUTHOR`         | Notes designer of the Chart.   |
| `#PREVIEW_TIME`   | Preview begin in seconds.      |
| `#PREVIEW_LENGTH` | Preview length in seconds.     |

## Timing
Objects are timed with "measures" and "ticks".

### Measure
A measure corresponds to a bar / measure in standard music notation. It serves as the most basic time division.  

> Measures begin at 0 and have no maximum value.  
> They must be an integer.

### Tick
Each measure is subdivided into 1920 ticks. They allow for more precise placement of Notes and evenly divide into common rhythmic subdivisions in music.  
Ticks are not beats. They function directly as a positional reference within a measure, regardless of metre.

> Ticks begin at 0 and have a maximum value of 1919, as the timestamp would roll over to the next measure on the 1920th tick.  
> They must be an integer.

## Coordinate System
The shape of Notes is defined in a cyclic coordinate system, with a "Position" and "Size" value.
The circle is split into 60 lanes, each taking up a 6° arc.

### Position
The Position of a Note defines the clockwise-most lane it occupies.  
Positions begin at 3 o' Clock, then move counterclockwise as they increase.

> Positions begin at 0 and have a maximum value of 59, as they would roll over to 0 at lane 60.  
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

> Sizes begin at 1 and have a maximum value of 60.  
> They must be an integer.

#### Example - Size 5
<img src="/documentation/saturn-data/media/example_size_5.png" width="520" alt="Touch Note, Position 0, Size 5">

#### Example - Size 10
<img src="/documentation/saturn-data/media/example_size_10.png" width="520" alt="Touch Note, Position 0, Size 10">

#### Example - Size 15
<img src="/documentation/saturn-data/media/example_size_15.png" width="520" alt="Touch Note, Position 0, Size 15">

## Object Types
Events and Notes are differentiated by an "Object Type" Id.

| MER Enum Value                           | Id | Object Type                |
|------------------------------------------|----|----------------------------|
| `MUSIC_SCORE_DATA_KIND_NOTE`             | 1  | Note                       |
| `MUSIC_SCORE_DATA_KIND_BPM_CHANGE`       | 2  | Tempo Change               |
| `MUSIC_SCORE_DATA_KIND_BEAT_CHANGE`      | 3  | Metre Change               |
| `MUSIC_SCORE_DATA_KIND_STOP`             | 4  | _Unknown/Unused._          |
| `MUSIC_SCORE_DATA_KIND_SPEED_CHANGE`     | 5  | Speed Change               |
| `MUSIC_SCORE_DATA_KIND_REVERSE_START`    | 6  | Reverse Effect Sub-Event 1 |
| `MUSIC_SCORE_DATA_KIND_REVERSE_END`      | 7  | Reverse Effect Sub-Event 2 |
| `MUSIC_SCORE_DATA_KIND_REVERSE_NOTE_END` | 8  | Reverse Effect Sub-Event 3 |
| `MUSIC_SCORE_DATA_KIND_STOP_START`       | 9  | Stop Effect Sub-Event 1    |
| `MUSIC_SCORE_DATA_KIND_STOP_END`         | 10 | Stop Effect Sub-Event 2    |

## Note Types
Notes are further differentiated by a "Note Type" Id.

| MER Enum Value                | Id | Note Type                                       |
|-------------------------------|----|-------------------------------------------------|
| `NOTE_KIND_TOUCH`             | 1  | Touch Note                                      |
| `NOTE_KIND_TOUCH_BONUS`       | 2  | Touch Note (Bonus Type: Bonus)                  |
| `NOTE_KIND_SNAP_UP`           | 3  | Snap Forward Note                               |
| `NOTE_KIND_SNAP_DOWN`         | 4  | Snap Backward Note                              |
| `NOTE_KIND_SLIDE_LEFT`        | 5  | Slide Clockwise Note                            |
| `NOTE_KIND_SLIDE_LEFT_BONUS`  | 6  | Slide Clockwise Note (Bonus Type: Bonus)        |
| `NOTE_KIND_SLIDE_RIGHT`       | 7  | Slide Counterclockwise Note                     |
| `NOTE_KIND_SLIDE_RIGHT_BONUS` | 8  | Slide Counterclockwise Note (Bonus Type: Bonus) |
| `NOTE_KIND_HOLD_START`        | 9  | Hold Start Note                                 |
| `NOTE_KIND_HOLD_JOINT`        | 10 | Hold Point Note                                 |
| `NOTE_KIND_HOLD_END`          | 11 | Hold End Note                                   |
| `NOTE_KIND_GUIDE_LANE_BEGIN`  | 12 | Lane Show Note                                  |
| `NOTE_KIND_GUIDE_LANE_END`    | 13 | Lane Hide Note                                  |
| `NOTE_KIND_EOF`               | 14 | Chart End (**E**nd **O**f **F**umen)            |
| `NOTE_KIND_GUIDE_SAME_TIME`   | 15 | Sync Note (Unused in MER files)                 |
| `NOTE_KIND_CHAIN`             | 16 | Chain Note                                      |
| `NOTE_KIND_GUIDE_LANE`        | 17 | _Unknown/Unused._                               |
| `NOTE_KIND_TUTORIAL_TAG`      | 18 | Tutorial Marker Event                           |
| `NOTE_KIND_BAR_LINE`          | 19 | Measure Line Note (Unused in MER files)         |
| `NOTE_KIND_TOUCH_S`           | 20 | Touch Note (Bonus Type: R)                      |
| `NOTE_KIND_SNAP_UP_S`         | 21 | Snap Forward Note (Bonus Type: R)               |
| `NOTE_KIND_SNAP_DOWN_S`       | 22 | Snap Backward Note (Bonus Type: R)              |
| `NOTE_KIND_SLIDE_LEFT_S`      | 23 | Slide Clockwise Note (Bonus Type: R)            |
| `NOTE_KIND_SLIDE_RIGHT_S`     | 24 | Slide Counterclockwise Note (Bonus Type: R)     |
| `NOTE_KIND_HOLD_START_S`      | 25 | Hold Start Note (Bonus Type: R)                 |
| `NOTE_KIND_CHAIN_S`           | 26 | Chain Note (Bonus Type: R)                      |

## Lane Toggle Sweep Directions
Lane Toggles (Lane Show/Lane Hide Notes) define a direction for their sweep animation to go in.

| MER Enum Value                    | Id | Sweep Direction  |
|-----------------------------------|----|------------------|
| `GUIDE_LANE_DIRECTION_PLUS`       | 0  | Counterclockwise |
| `GUIDE_LANE_DIRECTION_MINUS`      | 1  | Clockwise        |
| `GUIDE_LANE_DIRECTION_PLUS_MINUS` | 2  | Center, outward  |

## Table Structure
Objects are defined in a table of numbers, with columns divided by whitespace.  
This table has **9 columns**, and **1 row for each Object**.

Columns 1-3 are the same for all Objects, subsequent columns will vary, depending on the Object and Note Type.

### Events (Object Type 2 - 10)
| Column | Purpose                                                                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Measure                                                                                                                                 |
| 2      | Tick                                                                                                                                    |
| 3      | Object Type                                                                                                                             |
| 4      | Tempo, if Tempo Change Event.<br/>Speed, if Speed Change Event.<br/>Metre Upper, if Metre Change Event.<br/>Unused, if any other Event. |
| 5      | Metre Lower, if metre change Event.<br/>Unused, if any other Event.                                                                     |
| 6 - 9  | Unused                                                                                                                                  |

#### Tempo Change Example:
```MER
   0    0    2 120.000000
   8  480    2 130.000000
  12    0    2 80.000000
```
| Col 1:<br/>Measure | Col 2:<br/>Tick | Col 3:<br/>Object Type | Col 4:<br/>Tempo | Col 5:<br/>Unused | Col 6:<br/>Unused | Col 7:<br/>Unused | Col 8:<br/>Unused | Col 9:<br/>Unused |
|--------------------|-----------------|------------------------|------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| 0                  | 0               | 2 (Tempo Change Event) | 120.000000       | -                 | -                 | -                 | -                 | -                 |
| 8                  | 0               | 2 (Tempo Change Event) | 130.000000       | -                 | -                 | -                 | -                 | -                 |
| 12                 | 480             | 2 (Tempo Change Event) | 80.000000        | -                 | -                 | -                 | -                 | -                 |

#### Speed Change Example:
```MER
   4    0    5 0.400000
   4  240    5 0.600000
   4  480    5 0.800000
   4  720    5 1.000000
```
| Col 1:<br/>Measure | Col 2:<br/>Tick | Col 3:<br/>Object Type | Col 4:<br/>Speed | Col 5:<br/>Unused | Col 6:<br/>Unused | Col 7:<br/>Unused | Col 8:<br/>Unused | Col 9:<br/>Unused |
|--------------------|-----------------|------------------------|------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| 4                  | 0               | 5 (Speed Change Event) | 0.400000         | -                 | -                 | -                 | -                 | -                 |
| 4                  | 240             | 5 (Speed Change Event) | 0.600000         | -                 | -                 | -                 | -                 | -                 |
| 4                  | 480             | 5 (Speed Change Event) | 0.800000         | -                 | -                 | -                 | -                 | -                 |
| 4                  | 720             | 5 (Speed Change Event) | 1.000000         | -                 | -                 | -                 | -                 | -                 |

#### Metre Change Example
```MER
   0    0    3    4    4
  10    0    3    2    4
```
| Col 1:<br/>Measure | Col 2:<br/>Tick | Col 3:<br/>Object Type | Col 4:<br/>Metre Upper | Col 5:<br/>Metre Lower | Col 6:<br/>Unused | Col 7:<br/>Unused | Col 8:<br/>Unused | Col 9:<br/>Unused |
|--------------------|-----------------|------------------------|------------------------|------------------------|-------------------|-------------------|-------------------|-------------------|
| 0                  | 0               | 3 (Metre Change Event) | 4                      | 4                      | -                 | -                 | -                 | -                 |
| 10                 | 0               | 3 (Metre Change Event) | 2                      | 4                      | -                 | -                 | -                 | -                 |

#### Other Examples
```MER
  10    0    6
  14    0    7
  22    0    8
  24    0    9
  24 1440   10
```
| Col 1:<br/>Measure | Col 2:<br/>Tick | Col 3:<br/>Object Type         | Col 4:<br/>Unused | Col 5:<br/>Unused | Col 6:<br/>Unused | Col 7:<br/>Unused | Col 8:<br/>Unused | Col 9:<br/>Unused |
|--------------------|-----------------|--------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| 10                 | 0               | 6 (Reverse Effect Sub-Event 1) | -                 | -                 | -                 | -                 | -                 | -                 |
| 14                 | 0               | 7 (Reverse Effect Sub-Event 2) | -                 | -                 | -                 | -                 | -                 | -                 |
| 22                 | 0               | 8 (Reverse Effect Sub-Event 3) | -                 | -                 | -                 | -                 | -                 | -                 |
| 24                 | 0               | 9 (Stop Effect Sub-Event 1)    | -                 | -                 | -                 | -                 | -                 | -                 |
| 24                 | 1440            | 10 (Stop Effect Sub-Event 2)   | -                 | -                 | -                 | -                 | -                 | -                 |

### Notes (Object Type 1)
| Column | Purpose                                                                                |
|--------|----------------------------------------------------------------------------------------|
| 1      | Measure                                                                                |
| 2      | Tick                                                                                   |
| 3      | Object Type                                                                            |
| 4      | Note Type                                                                              |
| 5      | Note Index                                                                             |
| 6      | Position                                                                               |
| 7      | Size                                                                                   |
| 8      | RenderType, if Hold Note.<br/>Unused (always `1`), if any other Note.                  |
| 9      | Note Index of next referenced Hold Point, if Hold Note.<br/>Unused, if any other Note. |

#### Note Examples
```MER
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   1  480    1    7    2   45   15    1
   1  960    1    5    3   30   15    1
   2    0    1    9    4   45   15    1    5
   2  480    1   10    5   45   15    1    6
   2  576    1   10    6   44   15    0    7
   2  672    1   10    7   43   15    0    8
   2  768    1   10    8   42   15    0    9
   2  864    1   10    9   41   15    0   10
   2  960    1   11   10   40   15    1
   4    0    1   14   11    0   60    1
```
| Col 1:<br/>Measure | Col 2:<br/>Tick | Col 3:<br/>Object Type | Col 4:<br/>Note Type       | Col 5:<br/>Note Index | Col 6:<br/>Position | Col 7:<br/>Size | Col 8:<br/>RenderType | Col 9:<br/>SweepDirection/ReferencedNoteIndex |
|--------------------|-----------------|------------------------|----------------------------|-----------------------|---------------------|-----------------|-----------------------|-----------------------------------------------|
| 0                  | 0               | 1 (Note)               | 12 (Lane Show Note)        | 0                     | 15                  | 60              | 1                     | 2                                             |
| 1                  | 0               | 1 (Note)               | 1 (Touch Note)             | 1                     | 30                  | 15              | 1                     | -                                             |
| 1                  | 480             | 1 (Note)               | 7 (Slide Counterclockwise) | 2                     | 45                  | 15              | 1                     | -                                             |
| 1                  | 960             | 1 (Note)               | 5 (Slide Clockwise)        | 3                     | 30                  | 15              | 1                     | -                                             |
| 2                  | 0               | 1 (Note)               | 9 (Hold Start)             | 4                     | 45                  | 15              | 1 (Visible)           | 5                                             |
| 2                  | 480             | 1 (Note)               | 10 (Hold Point)            | 5                     | 45                  | 15              | 1 (Visible)           | 6                                             |
| 2                  | 576             | 1 (Note)               | 10 (Hold Point)            | 6                     | 44                  | 15              | 0 (Hidden)            | 7                                             |
| 2                  | 672             | 1 (Note)               | 10 (Hold Point)            | 7                     | 43                  | 15              | 0 (Hidden)            | 8                                             |
| 2                  | 768             | 1 (Note)               | 10 (Hold Point)            | 8                     | 42                  | 15              | 0 (Hidden)            | 9                                             |
| 2                  | 864             | 1 (Note)               | 10 (Hold Point)            | 9                     | 41                  | 15              | 0 (Hidden)            | 10                                            |
| 2                  | 960             | 1 (Note)               | 11 (Hold End)              | 10                    | 40                  | 15              | 1 (Visible)           | -                                             |
| 4                  | 0               | 1 (Note)               | 14                         | 11                    | 0                   | 60              | 1                     | -                                             |

## Notation Rules

#### Event and Note Grouping
Events must be listed before Notes.
```MER
// GOOD, Events are before Notes.
   0    0    2 120.000000
   0    0    3    4    4
   1    0    1    1    1   30   15    1
   2    0    1    1    1   30   15    1
```
```MER
// BAD, Events and Notes are mixed.
   1    0    1    1    1   30   15    1
   0    0    2 120.000000
   2    0    1    1    1   30   15    1
   0    0    3    4    4
```

#### Event Order
Events are listed from earliest to latest. This also means that Stop Effect Events and Reverse Effect Events may be "interrupted" by other Events.
```MER
// GOOD, Events are in chronological order.
   0    0    2 120.000000
   0    0    3    4    4
   2    0    9
   3    0    2 150.000000
   4    0   10
```
```MER
// BAD, Events are not in chronological order.
   2    0    9
   0    0    2 120.000000
   3    0    2 150.000000
   4    0   10
   0    0    3    4    4
```

#### Note Order
Notes are listed from earliest to latest. This also means that Hold Notes may be "interrupted" by other Notes.
```MER
// GOOD, Notes are in chronological order.
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   2    0    1    1    2   30   15    1
   3    0    1    1    3   30   15    1
```
```MER
// BAD, Notes are not in chronological order.
   3    0    1    1    0   30   15    1
   2    0    1    1    1   30   15    1
   1    0    1    1    2   30   15    1
   0    0    1   12    3   15   60    1    2
```

#### Sub-Object Order
Objects that are made up of multiple Sub-Objects (Hold Notes, Stop Effect Events, Reverse Effect Events) must be complete, and defined in the correct order.
```MER
// GOOD, Reverse Effect Event is complete, in chronological order.
   1    0    6
   2    0    7
   3    0    8
```
```MER
// BAD, Reverse Effect Event is not in chronological order.
   2    0    7
   3    0    8
   1    0    6
```
```MER
// BAD, Reverse Effect Event is not complete.
   3    0    8
   1    0    6
```

#### Duplicate Sub-Objects
The Sub-Objects of Objects that are made up of multiple Sub-Objects must not appear more than once, except for Hold Point Notes.
```MER
// GOOD, Reverse Effect Event has no duplicate Objects.
   1    0    6
   2    0    7
   3    0    8
```
```MER
// BAD, Reverse Effect Event has a duplicate Object at the beginning.
   1    0    6
   2    0    6
   3    0    7
   4    0    8
```
```MER
// GOOD, Hold Note has multiple Hold Point Notes, this is ok.
   2    0    1    9    1   45   15    1    2
   2  480    1   10    2   45   15    1    3
   2  576    1   10    3   44   15    0    4
   2  960    1   11    4   43   15    1
```

#### EOF
Exactly one Note with Type `14` (Chart End) must exist, and it must be at the end of the file.
```MER
// GOOD, there is no duplicate Chart End Note,
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   1  480    1    7    2   45   15    1
   1  960    1    5    3   30   15    1
   4    0    1   14    4    0   60    1
```
```MER
// BAD, Chart End Note is not at the end of the file.
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   4    0    1   14    2    0   60    1
   1  480    1    7    3   45   15    1
   1  960    1    5    4   30   15    1
```
```MER
// BAD, duplicate Chart End Note exists.
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   1  480    1    7    2   45   15    1
   1  960    1    5    3   30   15    1
   4    0    1   14    4    0   60    1
   5    0    1   14    5    0   60    1
```

## Design Rules

#### Newlines
There should be no empty lines in a MER file.

#### Metadata
Metadata Tags and their values should be separated by a single space.

```MER
// GOOD
#OFFSET 0.015000
```

```MER
// BAD
#OFFSET     0.015000
```

#### Objects
Each cell of the Object data table is normally 4 characters wide, with contents being right-aligned.  
However, there are two exceptions to this rule:
1. `Tempo` and `Speed` values are left-aligned.
2. If a value is longer than 4 characters, then the cell containing that value will grow to accommodate it. No other cells increase in size.

```MER
// GOOD, table follows design guidelines.
   0    0    1   12    0   15   60    1    2
   1    0    1    1    1   30   15    1
   2    0    1    1    2   30   15    1
   3    0    1    1    3   30   15    1

...0|...0|...1|..12|...0|..15|..60|...1|...2|
...1|...0|...1|...1|...1|..30|..15|...1|
...2|...0|...1|...1|...2|..30|..15|...1|
...3|...0|...1|...1|...3|..30|..15|...1|
```
```MER
// BAD, values are left-aligned.
0    0    1    12   0    15   60   1    2   
1    0    1    1    1    30   15   1
2    0    1    1    2    30   15   1
3    0    1    1    3    30   15   1

0...|0...|1...|12..|0...|15..|60..|1...|2...|   
1...|0...|1...|1...|1...|30..|15..|1...|
2...|0...|1...|1...|2...|30..|15..|1...|
3...|0...|1...|1...|3...|30..|15..|1...|
```
```MER
/// BAD, cell is larger than 4 characters for no reason.
   0    0    1   12        0   15   60    1    2

...0|...0|...1|..12|.......0|..15|..60|...1|...2
```