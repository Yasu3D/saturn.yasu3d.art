# Chart Setup
Chart setup is mainly handled in the Chart Properties Tool Window.  
Only Tempo and Metre Change Events are handled elsewhere, as they are direct elements of the Chart, not metadata.

> [!TIP]
> If you can't find a Tool Window titled "Chart Properties", you can open a new one here:
> ```
> View | Tool Windows | Chart Properties
> ```

## Metadata
For a Chart to properly show up in SATURN, it needs metadata. Otherwise, it will be a blank Song with placeholder jacket artwork.  
Please fill out all metadata to your best ability. If you are unsure about what a property does, either keep it at the default value or refer to the <a href="/documentation/saturn-data/index.html#/notation/entry">SATURN DATA Documentation for Entries</a> for more information.

> [!TIP]
> If a property has this button <img src="media/automate.png" width="20"> next to it, it can be automated!  
> It'll always update to the correct data when changes that affect it are made elsewhere.

## Audio
Navigate to the location shown below and enter a filename, or press <img src="media/pickfile.png" width="20"> to pick a file.
```
Chart Properties (Tool Window) | Media | Audio
```

If successful, a waveform should appear behind the seek slider, and you should hear the selected audio file when you press Play.

<img src="media/seek_slider_waveform.png" alt="Seek Slider with and without a Waveform">

> [!TIP]
> If this icon <img src="media/warning.png" width="16"> appears next to "Audio", refer to this page:  
> [Working with Filepaths in SATURN EDIT](guides/working_with_filepaths.md)

> [!TIP]
> If you are prompted to copy or move a file and don't know why, refer to this page:  
> [Working with Filepaths in SATURN EDIT](guides/working_with_filepaths.md)

### Loudness Normalization
Audio should be normalized so that players don't have to constantly re-adjust their volume because certain music is louder than others. 
You should aim to normalize loudness to `-9dB RMS`.

> [!TIP]
> If you'd like to learn more about normalization, refer to this page:  
> [Audacity Loudness Normalization](https://support.audacityteam.org/audio-editing/loudness-normalization)

### Timing
Chart audio timing has two core rules:

#### 1. Music must be aligned to Beat Grid
The MER and SAT format are both based on Measures and Ticks, not milliseconds. 
Additionally, Measure Line Notes are generated that serve as visual helpers for keeping time with the music.  

##### Tempo and Metre
To ensure Notes are placed on-time, the current Tempo and Metre must match that of the music.  
You can edit these values by:
- either selecting the corresponding Events and changing their values in the Inspector
- or pressing <kbd>LMB</kbd> twice on an Event with a value that can be changed.
- or inserting a new Event on top of an existing one. This will automatically open an "Edit" dialog instead of adding a duplicate Event.

> [!TIP]
> If you can't find a Tool Window titled "Inspector", you can open a new one here:
> ```
> View | Tool Windows | Inspector
> ```

> [!TIP]
> To learn more about how to create and edit events, refer to [TODO: ADD LINK]().

##### Offset
Once the Tempo and Metre match, your music should not drift away from the Measure Lines anymore.  
However, the music might be consistently "delayed" or "ahead" of the lines. To fix this, you must offset the audio forward or back until it lines up.  

The **first option** for aligning the audio and beat grid is to use external software.
1. Open the audio file in an audio editor of your choice.
2. Add or remove silence at the beginning of the file until it lines up.
3. Export the audio file and re-import it in SATURN EDIT.

The **second option** is to use the Audio Offset property in the Chart metadata, while verifying changes with the Waveform Tool Window.  
This process needs a bit of trial and error and might vary slightly, depending on the music you want to create a Chart for.
The general idea should apply in all cases though.
<img src="media/offset.png" alt="A visual explanation for how to determine the correct audio offset.">

> [!TIP]
> If you can't find a Tool Window titled "Waveform", you can open a new one here:
> ```
> View | Tool Windows | Waveform
> ```

> [!TIP]
> Slowing down the song and enabling the metronome in the [Playback Controls]() makes timing adjustments and testing much easier.

> [!NOTE|label:Developer Note]
> I personally prefer adding an offset in the audio file directly instead of changing offset values, but the choice is up to you. Either one works!

#### 2. Measure 1 is reserved for Start Clicks
In SATURN and SATURN EDIT, the "Start Click" hitsound announces the current Tempo and Metre during the first Measure of the Chart.  

1. There should be no music during this Measure, except for fade-ins that are not represented in the chart.
2. By extension there should also be no Notes here, as there shouldn't be music, and as players expect the Start Clicks to end before gameplay truly begins.