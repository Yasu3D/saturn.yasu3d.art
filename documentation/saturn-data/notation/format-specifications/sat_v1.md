# SATv1 Format Specifications

## Changelog
- This is the initial version.

## Spec
- SAT is a plaintext file encoded in UTF-8.
- Valid file extensions for SAT format files are: `.sat`, `.map` (old editor format)
- Deserializers for SAT are case-sensitive.
- Only one Metadata value or Object can be defined per line.
- Valid whitespace characters are: Space ` ` `(0x20)`
- Valid newline characters are: LF `\n` `(0x0A)` or CRLF `\r\n` `(0x0D 0x0A)`
- Valid decimal separators are: Period `.` `(0x2e)`
- Serializers and Deserializers **must** use `InvariantCulture` for string conversions.
- The amount of whitespace and newlines between blocks of data is arbitrary, but adhering to [Design Rules](#design-rules) is recommended for consistency.

## Comments
Comments are a way to tell the deserializer to ignore a line.  
This means they **are not read** by SATURN DATA. They will not be kept track of, and will not persist after opening and overwriting a chart file.

A Number sign `#` `(0x23)` at the beginning of a line marks it as a comment.

```sat
# This comment will not be deserialized.
16   0    0    20   15   TOUCH
```

```sat
# This object is commented out and will not be deserialized:
# 16   0    0    20   15   TOUCH
```

## Metadata
Metadata tags build a key-value pair with blocks of data.  
A metadata tag begins with an At Sign `@` `(0x40)`, and its key is written in MACRO_CASE.  
The value of a metadata tag is not case-sensitive and can contain any character supported by UTF-8.  
The value of a metadata tag cannot span multiple lines.  

```sat
@EXAMPLE_TAG    The quick brown fox
                jumped over the lazy dog.

# @EXAMPLE_TAG  = "The quick brown fox"
# The rest will cause a deserializer error or be ignored.
```

The value of a metadata tag can **not** begin or end with whitespace. Any whitespace before and after the value is trimmed.

```sat
@EXAMPLE_TAG    Example Value    

# @EXAMPLE_TAG  = "Example Value"
# @EXAMPLE_TAG != "    Example Value    "
```

Defining the same metadata tag multiple times is valid, but may lead to undefined results.  
Current deserializers scan line-by-line, so the last defined metadata tag will overwrite previous ones.

```sat
@EXAMPLE_TAG    One
@EXAMPLE_TAG    Two

# @EXAMPLE_TAG = Two
```

Metadata tags **must** come before collection tags.  
Metadata tags **can** be defined out of order, but this is not recommended.  
Metadata tags **can** be omitted, but this is not recommended.  

```sat
# THIS IS INVALID.

@OBJECTS
# ...

@TITLE          Sample Song
# ...
```

SATURN has a fixed set of metadata tags with different kinds of value types:

<table>
	<tbody>
		<tr>
			<th>Tag</th>
			<th>Value Type</th>
			<th colspan="2">Use Case</th>
		</tr>
		<tr>
			<td><code>@SAT_VERSION</code></td>
			<td>Integer</td>
			<td colspan="2">The format version the file was saved in.</td>
		</tr>
		<tr>
			<td><code>@VERSION</code></td>
			<td>String</td>
			<td colspan="2">A user-defined version string for a chart. Entirely optional and only used to keep track of chart revisions.</td>
		</tr>
		<tr>
			<td><code>@GUID</code></td>
			<td>String</td>
			<td colspan="2">A randomly generated <b>G</b>lobally <b>U</b>nique <b>Id</b>entifier (GUID) to identify each chart.</td>
		</tr>
		<tr>
			<td><code>@TITLE</code></td>
			<td>String</td>
			<td colspan="2">Title of the charted song.</td>
		</tr>
		<tr>
			<td><code>@RUBI</code></td>
			<td>String</td>
			<td colspan="2">Title of the charted song, written in the latin alphabet and hiragana only.</td>
		</tr>
		<tr>
			<td><code>@ARTIST</code></td>
			<td>String</td>
			<td colspan="2">Artist of the charted song.</td>
		</tr>
		<tr>
			<td><code>@AUTHOR</code></td>
			<td>String</td>
			<td colspan="2">Author / Note Designer of the chart.</td>
		</tr>
		<tr>
			<td><code>@BPM_TEXT</code></td>
			<td>String</td>
			<td colspan="2">BPM to display during song select. Does not affect chart BPM.</td>
		</tr>
		<tr>
			<td rowspan="10" style="vertical-align: top"><code>@BACKGROUND</code></td>
			<td rowspan="10" style="vertical-align: top">Index</td>
            <td colspan="2">Background to display during gameplay.</td>
		</tr>
        <tr>
            <th>Id</th>
			<th>Background</th>
        </tr>
		<tr>
			<td>0</td>
			<td>Auto (Version 3 / Boss / World's End, depending on the defined difficulty.)</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Saturn</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Version 3</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Version 2</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Version 1</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Boss</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Stage Up</td>
		</tr>
        <tr>
			<td>7</td>
			<td>Jacket</td>
		</tr>
		<tr>
			<td rowspan="7" style="vertical-align: top"><code>@DIFF</code></td>
			<td rowspan="7" style="vertical-align: top">Index</td>
            <td colspan="2">Difficulty of the chart.</td>
		</tr>
        <tr>
            <th>Id</th>
			<th>Difficulty</th>
        </tr>
		<tr>
			<td>0</td>
			<td>Normal</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Hard</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Expert</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Inferno</td>
		</tr>
		<tr>
			<td>4</td>
			<td>World's End</td>
		</tr>
		<tr>
			<td><code>@LEVEL</code></td>
			<td>Decimal</td>
			<td colspan="2">Level / Constant of the chart.</td>
		</tr>
		<tr>
			<td><code>@CLEAR</code></td>
			<td>Decimal</td>
			<td colspan="2">Clear threshold of the chart.</td>
		</tr>
		<tr>
			<td><code>@PREVIEW_START</code></td>
			<td>Seconds</td>
			<td colspan="2">Start time for the song and chart preview.</td>
		</tr>
		<tr>
			<td><code>@PREVIEW_TIME</code></td>
			<td>Seconds</td>
			<td colspan="2">Duration of the song and chart preview.</td>
		</tr>
        <tr>
			<td><code>@JACKET</code></td>
			<td>Filepath</td>
			<td colspan="2">Local path to jacket file.</td>
		</tr>
		<tr>
			<td><code>@BGM</code></td>
			<td>Filepath</td>
			<td colspan="2">Local path to audio file.</td>
		</tr>
		<tr>
			<td><code>@BGA</code></td>
			<td>Filepath</td>
			<td colspan="2">Local path to video file.</td>
		</tr>
		<tr>
			<td><code>@BGM_OFFSET</code></td>
			<td>Seconds</td>
			<td colspan="2">Audio offset in seconds.<br/>Positive offset makes the audio play later.</td>
		</tr>
		<tr>
			<td><code>@BGA_OFFSET</code></td>
			<td>Seconds</td>
			<td colspan="2">Video offset in seconds.<br/>Positive offset makes the video play later.</td>
		</tr>
	</tbody>
</table>

## Collections
Collection tags declare a collection of objects.  
Like metadata tags, a collection tag begins with an At sign `@` `(0x40)`, and its key is written in MACRO_CASE.  
The value of a collection tag is not a single line of data, but a list of objects with their own format guidelines.  
Collection tags and the objects they contain are each separated by a newline.  

```sat
@OBJECTS
1    0    0    30   15   TOUCH
2    0    1    30   15   TOUCH
3    0    2    45   15   TOUCH
4    0    3    45   15   TOUCH
# ...
```

Once a collection is defined, all subsequent objects are included in it until the next collection is defined.
    
```sat
# @GIMMICKS begin here.
@GIMMICKS
0    0    0    BPM               120.000000
0    0    1    TIMESIG             4      4
1    0    2    HISPEED             0.500000
2    0    3    HISPEED             1.000000

# @GIMMICKS end here and @OBJECTS begin.
@OBJECTS
1    0    0    30   15   TOUCH
2    0    1    30   15   TOUCH
3    0    2    45   15   TOUCH
```

There are three collection tags in a chart file: `@COMMENTS`, `@GIMMICKS`, `@OBJECTS`.  
- `@COMMENTS` contains Bookmarks.
- `@GIMMICKS` contains Events.
- `@OBJECTS` contains Notes and Lane Toggles.

Collection tags **must** be defined in the order shown here.  
Collection tags **cannot** be omitted, even if they are empty.

```sat
@COMMENTS
# Empty

@GIMMICKS
# Empty

@OBJECTS
# Empty
```

## Timing
Objects are timed with "Measures" and "Ticks".

### Measure
A Measure corresponds to a bar / Measure in standard music notation. It serves as the most basic time division.  

> Measures begin at 0 and have no maximum value.  
> They must be an integer.

### Tick
Each Measure is subdivided into 1920 Ticks. They allow for more precise placement of Notes and evenly divide into common rhythmic subdivisions in music.  
Ticks are not beats. They function directly as a positional reference within a Measure, regardless of metre.

> Ticks begin at 0 and have a maximum value of 1919, as the timestamp would roll over to the next Measure on the 1920th Tick.  
> They must be an integer.

## Coordinate System
The shape of Notes is defined in a cyclic coordinate system, with a "Position" and "Size" value.
The circle is split into 60 lanes, each taking up a 6° arc.

### Position
The Position of a Note defines the clockwise-most lane it occupies.  
Positions begin at 3 o' Clock, then move counterclockwise as they increase.

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

> Sizes begin at 1 and have a maximum value of 60.  
> They must be an integer.

#### Example - Size 5
<img src="/documentation/saturn-data/media/example_size_5.png" width="520" alt="Touch Note, Position 0, Size 5">

#### Example - Size 10
<img src="/documentation/saturn-data/media/example_size_10.png" width="520" alt="Touch Note, Position 0, Size 10">

#### Example - Size 15
<img src="/documentation/saturn-data/media/example_size_15.png" width="520" alt="Touch Note, Position 0, Size 15">

## Bookmarks

## Events

## Notes

## File Structure

## Table Structure

## Notation Rules

## Design Rules
