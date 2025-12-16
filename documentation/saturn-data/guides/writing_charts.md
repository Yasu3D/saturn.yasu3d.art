# Writing a Chart to a File
To write a chart and its metadata to a file, use the `NotationSerializer` class.

`NotationSerializer` has to available methods: `ToFile()` and `ToString()`.

> [!IMPORTANT]
> Don't forget to run `Chart.Build()` before exporting it to ensure auto-generated data is updated!

## NotationWriteArgs
SATURN DATA offers a few options when writing chart data and metadata.

### FormatVersion
`FormatVersion` determines the file format type and version to write.  
For most use cases it's recommended to choose the latest version of the SAT format, as it's the most feature-complete and most readable format.

### ExportWatermark
`ExportWatermark` allows you to choose a custom watermark to place at the top of a SAT format file.  
For most use cases it's recommended to use the default value.

> [!NOTE]
> The MER format version does not have an export watermark!
    
### ConvertFakeNotes
`ConvertFakeNotes` will convert any Note with `JudgementType.Fake` according to the chosen option.

Available options are:
- `ExcludeFromExport`, which will exclude affected Notes from the written data.
- `ConvertToNormalNotes`, which will include affected Notes but convert them to normal Notes in the written data.

> [!NOTE]
> Only format versions older than SATv3 require this option.

### ConvertAutoplayNotes
`ConvertAutoplayNotes` will convert any Note with `JudgementType.Autoplay` according to the chosen option.

Available options are:
- `ExcludeFromExport`, which will exclude affected Notes from the written data.
- `ConvertToNormalNotes`, which will include affected Notes but convert them to normal Notes in the written data.

> [!NOTE]
> Only format versions older than SATv3 require this option.

### MergeExtraLayers
`MergeExtraLayers` will merge any additional Layers according to the chosen option.

Available options are:
- `ExcludeFromExport`, which will exclude the affected Layers from the written data.
- `MergeIntoMainLayer`, which will merge all Notes and Events from the affected Layer into the main Layer in the written data.
- `MergeIntoMainLayerWithoutEvents`, which will merge all Notes without any Events from the affected Layer into the main Layer in the written data.

> [!NOTE]
> Only format versions older than SATv2 require this option.

### ConvertExtendedBonusTypes
`ConvertExtendedBonusTypes` will convert any Notes with unsupported BonusTypes to a supported BonusType, according to the chosen option.

Available options are:
- `ConvertToNormal`, which will convert affected Notes to normal Notes.
- `ConvertToR`, which will convert affected Notes to R Notes.

> [!NOTE]
> Only the MER format version requires this option.

#### WriteMusicFilePath
`WriteMusicFilepath` will write the `#MUSIC_FILE_PATH` MER format metadata tag, according to the chosen option.

Available options are:
- `None`, which will not write any path.
- `NoExtension`, which will write the file name of the specified audio file *without* its file extension.
- `WithExtension`, which will write the file name of the specified audio file *with* its file extension.

> [!NOTE]
> Only the MER format version requires this option.

## ToFile()
`NotationSerializer.ToFile()` will directly write data to a specified filepath.  
Exceptions thrown by File I/O are *not* caught or handled.

```csharp
// The entry to write to a file.
Entry entry = new();

// The chart to write to a file.
Chart chart = new();

// Write chart and entry data to the path "C:\Path\To\chart.sat".
NotationSerializer.ToFile(@"C:\Path\To\chart.sat", entry, chart, new NotationWriteArgs());
```

## ToString()
`NotationSerializer.ToString()` has two overloads: you can write chart data and metadata as normal, or write *only* chart data.  
Exceptions thrown by File I/O are *not* caught or handled.

### ToString() with Entry
```csharp
// The entry to write to a file.
Entry entry = new();

// The chart to write to a file.
Chart chart = new();

// Convert chart and entry data to a string.
string data = NotationSerializer.ToString(entry, chart, new NotationWriteArgs());
```

### ToString() without Entry
SATURN DATA can correctly read data without a header, but certain format specifications may not support this, so use this overload with caution.

```csharp
// The chart to write to a file.
Chart chart = new();

// Convert chart data (without entry data) to a string.
string data = NotationSerializer.ToString(chart, new NotationWriteArgs());
```