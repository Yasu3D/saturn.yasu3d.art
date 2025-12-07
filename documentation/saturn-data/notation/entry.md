# Entry
Holds all metadata for a [Chart](/notation/chart.md).

Entries represent a [Song's](/music/song.md) "difficulty" in SATURN, and get sorted into [Folders](/music/folder.md) accordingly.

## Properties

### Id
The string used to identify an Entry.
> It's recommended to use a universally unique identifier (UUID) for the Id, but the value doesn't have to conform to any standard.

### FormatVersion
The format version of the file that defined this entry.
> If the entry was not created by deserializing a file, the default value should be kept instead.

### Title
The title of the chart's song.

### Reading
The kana reading of the title.

### Artist
The artist of the chart's song.

### BpmMessage
The bpm text to display on the song select screen.

### Revision
The current revision of the chart.
> This property is optional and only meant for users to keep track of different chart revisions.

### NotesDesigner
The notes designer of the chart.

### Difficulty
The difficulty of the chart.  
Available difficulties are:

| Name        | Short Name | ID |
|-------------|------------|----|
| Normal      | `NRM`      | 0  |
| Hard        | `HRD`      | 1  |
| Expert      | `EXP`      | 2  |
| Inferno     | `INF`      | 3  |
| World's End | `END`      | 4  |

### Level
The level (or constant) of the chart.

### ClearThreshold
The percentage of the clear bar that needs to be reached to clear a song.

### PreviewBegin
The timestamp the chart preview starts at. Must be less than `PreviewEnd`.

### PreviewEnd
The timestamp the chart preview ends at. Must be greater than `PreviewBegin`.

### Background
The default background for the chart.

| Background Option | Description                                                   |
|-------------------|---------------------------------------------------------------|
| Auto              | Automatically determines the background, based on difficulty. |
| Saturn            | Displays a unique background made for SATURN.                 |
| Version3          | Displays a background reminiscent of VERSION 3.               |
| Version2          | Displays a background reminiscent of VERSION 2.               |
| Version1          | Displays a background reminiscent of VERSION 1.               |
| Boss              | Displays an `INFERNO` difficulty background.                  |
| WorldsEnd         | Displays a `WORLD'S END` difficulty background.               |
| StageUp           | Displays a Stage Up mode background.                          |
| Jacket            | Displays a song's jacket as a background.                     |

> This value can be overwritten by players in SATURN.

### RootDirectory
The directory that all chart-related files are in.

### ChartFile
File name of the chart file that defined this entry.

### AudioFile
File name of the background audio file.

### VideoFile
File name of the background video file.

### JacketFile
File name of the jacket image file.

### AudioOffset
Audio offset in milliseconds

### VideoOffset
Video offset in milliseconds

### ChartEnd
The Chart End timestamp, where playback stops and the gameplay result is shown.

### TutorialMode
Should this chart be shown in tutorial mode?

### AutoReading
Should the Reading be determined automatically?

### AutoBpmMessage
Should the BpmMessage be determined automatically?

### AutoClearThreshold
Should the ClearThreshold be determined automatically?

### AutoChartEnd
Should the ChartEnd be determined automatically?
