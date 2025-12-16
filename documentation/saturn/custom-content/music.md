# Adding Music
> [!NOTE]
> This page explains the file structure for music and chart files, and how they're read by SATURN.
> If you want to learn more about how to create charts, refer to this page:  
> <a href="/documentation/saturn-edit/index.html">SATURN EDIT Documentation</a>

Music and Chart files are stored in `/StreamingAssets/Data/Music/`.  
All files placed in this directory or any subdirectory will be parsed by SATURN.

## Supported Formats
### Chart
- `.sat`

### Jacket
- `.png` (recommended)
- `.jpg`/`.jpeg`

### Audio
- `.wav` (recommended)
- `.mp3`
- `.ogg`

### Video
- `.webm` (recommended)
- `.mp4`

> [!NOTE]
> SATURN uses the standard Unity Video Player. To see all supported video formats, refer to this page:  
> [Unity Engine Video Player Documentation](https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html)

## Entries
Each `.sat` file defines one `entry`.  
Each `entry` contains metadata (info about the song) and a chart (collection of notes).

During the song selection scene, SATURN displays the metadata of the currently selected `entry`.  
This allows a song to have different titles, artists, jackets, etc. for each `difficulty`.

## Songs
Any directory containing **one or more** `.sat` files will be recognized as a `song`.  
A `song` has five slots for `entries`, one of each `difficulty`:

| Name        | Short Name | ID |
|-------------|------------|----|
| Normal      | `NRM`      | 0  |
| Hard        | `HRD`      | 1  |
| Expert      | `EXP`      | 2  |
| Inferno     | `INF`      | 3  |
| World's End | `END`      | 4  |

Paths to media (audio, video, images) defined in each `.sat` file are relative filepaths from the `.sat` file.  
All media should be in the same directory as chart files, or a subdirectory. (not recommended)

> [!IMPORTANT]
> If a `song` directory contains two or more `.sat` files with the same `difficulty` defined, only the last one in **ascending alphabetical order** will be loaded in SATURN.

## Folders
Any directory containing **one or more** `song` directories will be recognized as a `folder`.  
If a `folder.toml` file is present, it specifies the `folder`'s metadata.

> [!TIP]
> For more information, refer to this page:  
> <a href="/documentation/saturn-data/index.html#/music/folder.md">SATURN DATA Folder Documentation</a>.

## File Structure
Here's an example file structure. It contains:  
- One `folder` directory, styled with a `folder.toml` file.
- Two `song` directories, each containing:
  - three `entries`
  - an audio file
  - an image file
  - a video file

```file tree
.
└── StreamingAssets/
    └── Music/
        └── ExampleFolder/
            ├── folder.toml
            ├── icon.png
            ├── ExampleSong_1/
            │   ├── 0.sat
            │   ├── 1.sat
            │   ├── 2.sat
            │   ├── audio.wav
            │   ├── jacket.png
            │   └── video.webm
            └── ExampleSong_2/
                ├── 0.sat
                ├── 1.sat
                ├── 2.sat
                ├── audio.wav
                ├── jacket.png
                └── video.webm
```

## Naming Scheme
For consistency, this naming scheme is recommended:

| Property          | File Name         |
|-------------------|-------------------|
| Folder Files      | `folder.toml`     |
| Folder Icons      | `icon.png`        |
| Normal Chart      | `0_normal.sat`    |
| Hard Chart        | `1_hard.sat`      |
| Expert Chart      | `2_expert.sat`    |
| Inferno Chart     | `3_inferno.sat`   |
| World's End Chart | `4_worldsend.sat` |
| Audio File        | `audio.wav`       |
| Jacket File       | `jacket.png`      |
| Video File        | `video.webm`      |