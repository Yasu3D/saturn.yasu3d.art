# Chart Properties
The Chart Properties Tool Window lets you edit chart metadata.

<img src="media/chart_properties.png">

## Song
Edit information about the charted Song.

### Title
The title of the chart's song.

### Reading
The kana reading of the title.

> [!TIP]
> If you're unsure about the reading of a title, or just don't know what a reading is, please automate this property with <img src="media/automate.png" width="20">.

### Artist
The artist of the chart's song.

### Bpm Message
The bpm text to display on the song select screen.

> [!TIP]
> You can automate this property with <img src="media/automate.png" width="20">.

## Chart
Edit information about the Chart itself.

### Revision
The current revision of the chart.

> [!NOTE]
> This property is optional and only meant for users to keep track of different chart revisions.

### Notes Designer
The notes designer of the chart.

### Difficulty
The difficulty of the chart.  

### Level
The level (or constant) of the chart.

### Clear Threshold
The percentage of the clear bar that needs to be reached to clear a song.

> [!TIP]
> You can automate this property with <img src="media/automate.png" width="20">.

### Chart End
The Chart End timestamp, where playback stops and the gameplay result is shown.

> [!TIP]
> You can automate this property with <img src="media/automate.png" width="20">.

## Display
Edit options for how a chart is presented.

### Preview Begin
The timestamp the chart preview starts at. Must be less than `PreviewEnd`.

### Preview End
The timestamp the chart preview ends at. Must be greater than `PreviewBegin`.

### Background
The default background for the chart.

> [!NOTE]
> This value can be overwritten by players in SATURN.

### Tutorial Mode
Enables tutorial mode for the chart in SATURN. You probably don't need to enable this unless you're actually making a tutorial.

## Media
Edit media associated with the Chart.

### Jacket
The album artwork/cover/jacket image.

### Audio
The background audio.

### Video
The background video.

> [!NOTE]
> SATURN EDIT currently does not support video playback.

### Audio Offset
Audio offset in seconds.

> [!TIP]
> Positive values move the audio later,  
> Negative values move the audio earlier.

### Video Offset
Audio offset in seconds.

> [!TIP]
> Positive values move the audio later,  
> Negative values move the audio earlier.