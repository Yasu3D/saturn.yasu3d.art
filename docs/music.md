# Adding Music

## Supported Audio Formats
- `.wav` (recommended)
- `.mp3`
- `.ogg`

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

## Recommended Video Formats
- `.webm`
- `.mp4`

SATURN uses the standard Unity Video Player. All [video formats listed here](https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html) are compatible.

## Entries

Each `.sat` file defines one `entry`.  
Each `entry` holds metadata (info about the song) and a chart (collection of notes).

## Songs

Any directory containing **one or more** `.sat` files will be recognized as a `song`.  
A `song` has five slots for `entries`, one of each `difficulty`:

| Name        | Short Name   | ID |
|-------------|--------------|----|
| Normal      | `NRM`        | 0  |
| Hard        | `HRD`        | 1  |
| Expert      | `EXP`        | 2  |
| Inferno     | `INF`        | 3  |
| World's End | `END` / `WE` | 4  |

Paths to media (audio, video, images) defined in each `.sat` file are local paths from the file itself.  
All media should be in the same directory as chart files, or a subdirectory. (not recommended)

If a `song` has two or more `entries` with the same `difficulty`, only the last one in **ascending alphabetical order** will be loaded in SATURN.

In this example, all chart files have their `difficulty` set to `normal`. Only `chart_C.sat` will appear in-game, as it's the last in ascending alphabetical order.

```file tree
.
└── <SONG>/
    ├── chart_A.sat
    ├── chart_B.sat
    ├── chart_C.sat
    └── ...
```

## Folders

Any directory containing **one or more** `song` directories will be recognized as a `folder`.  
If a `folder.toml` file is present, it specifies the `folder`'s name, color, and icon.  
If not, the directory name, a neutral gray color, and a placeholder icon are used instead.

```toml
name = "Sample Folder"
color_code = "#AABBCC"
image_path = "icon.png"
```

### Properties

| Property     | Type     | Use Case             |
|--------------|----------|----------------------|
| `name`       | String   | Name of the folder.  |
| `color_code` | Hex Code | Color of the folder. |
| `image_path` | Filepath | Folder icon image.   |

## File Structure

Here's an example file structure. It contains:  
- one `folder` directory, styled with a `folder.toml` file.
- two `song` directories, each containing:
  - three `entries`
  - an audio file
  - an image file

```file tree
.
└── StreamingAssets/
    └── Music/
        └── <FOLDER>/
            ├── folder.toml
            ├── icon.png
            ├── <SONG 1>/
            │   ├── 0.sat
            │   ├── 1.sat
            │   ├── 2.sat
            │   ├── audio.wav
            │   └── jacket.png
            └── <SONG 2>/
                ├── 0.sat
                ├── 1.sat
                ├── 2.sat
                ├── audio.wav
                └── jacket.png
```

A `song` directory can technically also be a `folder` directory for another `song`...

```file tree
.
└── StreamingAssets/
    └── Music/
        └── <FOLDER>/
            ├── folder.toml
            ├── icon.png
            └── <SONG 1>/
                ├── folder.toml
                ├── 0.sat
                ├── ...
                └── <SONG 2>/
                    ├── 0.sat
                    └── ...
```

...though I recommend against doing this. *Why would you do this.*

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property          | File Name     |
|-------------------|---------------|
| Folder Files      | `folder.toml` |
| Folder Icons      | `icon.png`    |
| Normal Chart      | `0.sat`       |
| Hard Chart        | `1.sat`       |
| Expert Chart      | `2.sat`       |
| Inferno Chart     | `3.sat`       |
| World's End Chart | `4.sat`       |
| Audio File        | `audio.wav`   |
| Jacket File       | `jacket.png`  |
| Video File        | `mv.mp4`      |