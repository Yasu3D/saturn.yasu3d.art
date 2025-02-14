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

Saturn uses the standard Unity Video Player. All [video formats listed here](https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html) are compatible.

## File Structure

A `song` has **five** available `difficulties`: Normal, Hard, Expert, Inferno, World's End.  
It can only have **one** of each. If there are duplicate difficulties, only the last one in *ascending alphabetical order* will be loaded.

Any folder containing **one or more** `.sat` files will be recognized as a `song`.  
Any folder containing **one or more** `song` folders will be recognized as a `folder`.  
This folder's name in the file system will also be the name of the `folder`.

A `folder` can have two optional files to change its appearance in-game:  
- `color.txt` defines a color for the folder. *supported format: #RRGGBB*
- `icon.png` defines an icon for the folder. *512x or 1024x recommended*

A valid song list with...
- a `folder` called *\<FOLDER>*
- ...containing a `song` called *\<SONG>* 
- ...containing all 5 `difficulties`

...looks like this:

```file tree
.
└── StreamingAssets/
    └── Music/
        └── <FOLDER>/
            ├── color.txt
            ├── icon.png
            └── <SONG>/
                ├── 0.sat
                ├── 1.sat
                ├── 2.sat
                ├── 3.sat
                ├── 4.sat
                ├── <AUDIO>.wav
                ├── <IMAGE>.png
                └── <VIDEO>.mp4
```

A `song` can technically also be a `folder` for another `song`...
```file tree
.
└── StreamingAssets/
    └── Music/
        └── <FOLDER>/
            ├── color.txt
            ├── icon.png
            └── <SONG 1>/
                ├── color.txt
                ├── icon.png
                ├── 0.sat
                ├── <AUDIO>.wav
                ├── ...
                └── <SONG 2>/
                    ├── 0.sat
                    ├── <AUDIO>.wav
                    └── ...
```

...though I recommend against doing this. *Why would you do this.*

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property          | File Name    |
|-------------------|--------------|
| Normal Chart      | `0.sat`      |
| Hard Chart        | `1.sat`      |
| Expert Chart      | `2.sat`      |
| Inferno Chart     | `3.sat`      |
| World's End Chart | `4.sat`      |
| Audio File        | `audio.wav`  |
| Jacket File       | `jacket.png` |
| Video File        | `mv.mp4`     |