# Reading a Chart from a File
To automatically determine the correct format and read a Chart from any file, use the `NotationSerializer` class.  

`NotationSerializer` has two available methods: `ToEntry()` and `ToChart()`.  
These allow you to read a chart file's metadata and chart data separately.

> ⚠️ Don't forget to run `Chart.Build()` after loading a Chart into memory with `ToChart()` to prepare it for rendering/gameplay!

## NotationReadArgs
SATURN DATA offers a few options when importing MER, SATv1 and SATv2 files.

### OptimizeHoldNotes
`OptimizeHoldNotes` will remove all Hold Point Notes with their `HoldPointRenderType` set to `Hidden`.  
This is recommended when importing files written in old formats to reduce filesize and memory usage, although it is still toggleable in case you wish to preserve the original Hold Point Notes.

### InferClearThresholdFromDifficulty
`InferClearThresholdFromDifficulty` will set `Entry.ClearThreshold` to the default value for the Difficulty specified in the Chart file.  
This is recommended when importing files written in old formats because they either don't have a value defined, or incorrectly default it to `0.83` for all difficulties.

## ToChart()
`NotationSerializer.ToChart()` has two overloads: you can read directly from a file, or provide individual lines of text in an array of strings.

All exceptions that occur during a chart read will be caught by SATURN DATA. If you wish to handle exceptions yourself, `out List<Exception> exceptions` will provide a list of all thrown exceptions.  
If you don't need the list of exceptions, you can discard it with `out _`.

### Automatic file read approach:
```csharp
// Read chart located at "C:\Path\To\Chart.sat"
// and list all thrown exceptions in a list called "exceptions".
Chart chart = NotationSerializer.ToChart(@"C:\Path\To\chart.sat", new NotationReadArgs(), out List<Exception> exceptions);

// Build chart (entry defined elsewhere).
chart.Build(entry);
```

```csharp
// Read chart located at "C:\Path\To\Chart.sat"
// and discard list of all thrown exceptions.
Chart chart = NotationSerializer.ToChart(@"C:\Path\To\chart.sat", new NotationReadArgs(), out _)
    
// Build chart (entry defined elsewhere).
chart.Build(entry);
```

### String array approach:
```csharp
// Get individual lines of chart data. In this example: from a file.
string[] lines = File.ReadAllLines(path);

// Read chart data from "lines" array
// and list all thrown exceptions in a list called "exceptions".
Chart chart = NotationSerializer.ToChart(lines, new NotationReadargs(), out List<Exception> exceptions);

// Read chart data from "lines" array
// and discard list of all thrown exceptions.
Chart chart = NotationSerializer.ToChart(lines, new NotationReadargs(), out _);
```

## ToEntry()
`NotationSerializer.ToEntry()` has two overloads: you can read directly from a file, or provide individual lines of text in an array of strings.

All exceptions that occur during an entry read will be caught by SATURN DATA. If you wish to handle exceptions yourself, `out List<Exception> exceptions` will provide a list of all thrown exceptions.  
If you don't need the list of exceptions, you can discard it with `out _`.

### Automatic file read approach:
```csharp
// Read entry located at "C:\Path\To\Chart.sat"
// and list all thrown exceptions in a list called "exceptions".
Entry entry = NotationSerializer.ToEntry(@"C:\Path\To\chart.sat", new NotationReadArgs(), out List<Exception> exceptions);
```

```csharp
// Read entry located at "C:\Path\To\Chart.sat"
// and discard list of all thrown exceptions.
Entry entry = NotationSerializer.ToEntry(@"C:\Path\To\chart.sat", new NotationReadArgs(), out _)
```

### String array approach:
```csharp
// Get individual lines of chart data. In this example: from a file.
string[] lines = File.ReadAllLines(path);

// Read entry data from "lines" array
// and list all thrown exceptions in a list called "exceptions".
Entry entry = NotationSerializer.ToEntry(lines, new NotationReadargs(), out List<Exception> exceptions);
```

```csharp
// Get individual lines of chart data. In this example: from a file.
string[] lines = File.ReadAllLines(path);

// Read entry data from "lines" array
// and discard list of all thrown exceptions.
Entry entry = NotationSerializer.ToEntry(lines, new NotationReadargs(), out _);
```