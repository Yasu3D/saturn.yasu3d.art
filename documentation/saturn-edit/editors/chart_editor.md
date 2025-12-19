# Chart Editor
The Chart Editor lets you create, view and edit Charts for SATURN.  
It's the primary editor in SATURN EDIT, with a custom tool docking system.

<img src="media/chart_editor.png">

## Header
<img src="media/chart_editor_header.png">

### Editor Selector
A "tab-bar" to select the editor you want to work in.  
Located on the left side of the header.

### Menu
A menu with operations relevant to the current editor.  
Located on the left side of the header.

### Search
Press <img src="media/search.png" width="20"> or <kbd>Ctrl</kbd>-<kbd>F</kbd> to open a search menu that can find and run any operation.

### Volume Mixer
Press <img src="media/volume.png" width="20"> to open a volume mixer to adjust your volume and select hitsounds.

> [!TIP]
> For more information, refer to this page: [Audio Setup](setup/audio.md).

### Settings
Press <img src="media/settings.png" width="20"> or <kbd>Ctrl</kbd>-<kbd>Alt</kbd>-<kbd>S</kbd> to open the settings window.

### Undo
Press <img src="media/undo.png" width="20"> or <kbd>Ctrl</kbd>-<kbd>Z</kbd> to undo the last operation.

### Redo
Press <img src="media/redo.png" width="20"> or <kbd>Ctrl</kbd>-<kbd>Y</kbd> to redo the last operation.

## Note Palette
The Note Palette lets you change the Type of the Cursor Note.

> [!TIP]
> If you wish to change the Type of *existing* Notes, use the [Inspector](tool-windows/inspector.md) Tool Window 
> or the dedicated button found in the [Chart View (3D)](tool-windows/chart_view_3d.md#edit-type) Tool Window instead. 

<img src="media/chart_editor_note_palette.png">

## Playback Controls
The playback controls let you navigate in time and configure playback.

<img src="media/chart_editor_playback.png">

### Play/Pause
Plays or Pauses playback.

### Playback Speed
Adjusts playback speed from 5% to 300%.

### Loop Playback
Enables looping playback from customizable "start" and "end" loop markers.

### Set Loop Marker Start
Sets the "start" marker for playback looping.

### Set Loop Marker End
Sets the "end" marker for playback looping.

### Metronome
Enables a metronome that plays a user-defined sound every beat.

> [!IMPORTANT]
> If you do not have a metronome sound effect selected, no sounds will play even with the metronome enabled.  
> Please refer to this page to learn how to set up editor audio: [Audio Setup](setup/audio.md)

### Playback Settings
Adjust settings specifically related to playback.

#### Quantized Pause
The quantization behaviour of the play-head when pausing playback.

**Exact** will not quantize the play-head after pausing.  
**Quantized (Nearest)** will quantize the play-head to the nearest beat.  
**Quantized (Previous)** will quantize the play-head to the previous beat.  
**Quantized (Next)** will quantize the play-head to the next beat.

#### Quantized Seek
The quantization behaviour of the play-head when you finish seeking on the slider.

**Exact** will not quantize the play-head after seeking.  
**Quantized (Nearest)** will quantize the play-head to the nearest beat.  
**Quantized (Previous)** will quantize the play-head to the previous beat.  
**Quantized (Next)** will quantize the play-head to the next beat.

#### Loop to Start
When Loop to Start is **enabled**, playback will pause once it hits the end, and the play-head will **reset back to 0**.  
When Loop to Start is **disabled**, playback will pause once it hits the end, and the play-head will **stay at the end**.

### Seek Slider
The seek slider lets you quickly move around in time.

When an audio file is loaded, a coarse waveform will appear to help navigate a song more easily. (e.g. seeking to a quiet section)

## Dock Area
The Dock Area lets you create a custom layout for the chart editor that suits your needs. Your layout is saved between sessions, and can also be saved to an external file to share with others.

> [!TIP]
> If you want to learn more about individual Tool Windows, you can start with [Chart View (3D)](tool-windows/chart_view_3d.md) and explore the other pages in the Tool Windows category.