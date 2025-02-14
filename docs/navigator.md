# Adding Navigators

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

Navigators likely need transparency, so `.jpg`/`.jpeg` is *possible* to use, but not recommended.

## Supported Audio Formats
- `.wav` (recommended)
- `.mp3`
- `.ogg`

## File Structure

Any `.toml` file in `./Data/Navigator/` will be recognized as a `navigator`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```navigator.toml
...
[texture_paths]
img_icon = "icon.png"
img_base = "base.png"
...
[audio_clip_paths]
wav_allmarvelous = "allmarvelous.wav"
...
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── Navigator/
            └── <NAVIGATOR>/
                ├── navigator.toml
                ├── icon.png
                ├── base.png
                ├── ...
                ├── allmarvelous.wav
                └── ...
```

## Properties

| Property            | Type       | Use Case                                                                   |
|---------------------|------------|----------------------------------------------------------------------------|
| guid                | string     | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| name                | string     | Name of the navigator.                                                     |
| description         | string     | Description of the navigator.                                              |
| artist              | string     | Artist that made the navigator.                                            |
| voice               | string     | Voice actor that recorded the audio.                                       |
| width               | pixels     | Width of the navigator image to show in-game.                              |
| height              | pixels     | Height of the navigator image to show in-game.                             |
| offset_x            | pixels     | Horizontal offset of the navigator image.                                  |
| offset_y            | pixels     | Vertical offset of the navigator image.                                    |
| margin_top          | pixels     | Top margin from base image for face image.                                 |
| margin_bottom       | pixels     | Bottom margin from base image for face image.                              |
| margin_left         | pixels     | Left margin from base image for face image.                                |
| margin_right        | pixels     | Right margin from base image for face image.                               |
| blink_interval      | seconds    | Time between blinks.                                                       |
| blink_duration      | seconds    | Time between frames of the blink animation.                                |
| \[texture_paths]    | dictionary | `.toml` tag to declare a dictionary/collection.                            |
| img_icon            | image      | Icon displayed when selecting navigators.                                  |  
| img_base            | image      | Body only                                                                  |  
| img_neutral_0       | image      | Face only - Neutral expression - Eyes fully open.                          |  
| img_neutral_1       | image      | Face only - Neutral expression - Eyes half open.                           |  
| img_neutral_2       | image      | Face only - Neutral expression - Eyes closed.                              |  
| img_amazed_0        | image      | Face only - Amazed expression - Eyes fully open.                           |  
| img_amazed_1        | image      | Face only - Amazed expression - Eyes half open.                            |  
| img_amazed_2        | image      | Face only - Amazed expression - Eyes closed.                               |  
| img_troubled_0      | image      | Face only - Troubled expression - Eyes fully open.                         |  
| img_troubled_1      | image      | Face only - Troubled expression - Eyes half open.                          |  
| img_troubled_2      | image      | Face only - Troubled expression - Eyes closed.                             |  
| img_surprised_0     | image      | Face only - Surprised expression - Eyes fully open.                        |  
| img_surprised_1     | image      | Face only - Surprised expression - Eyes half open.                         |  
| img_surprised_2     | image      | Face only - Surprised expression - Eyes closed.                            |  
| img_startled_0      | image      | Face only - Startled expression - Eyes fully open.                         |  
| img_startled_1      | image      | Face only - Startled expression - Eyes half open.                          |  
| img_startled_2      | image      | Face only - Startled expression - Eyes closed.                             |  
| img_angry_0         | image      | Face only - Angry expression - Eyes fully open.                            |  
| img_angry_1         | image      | Face only - Angry expression - Eyes half open.                             |  
| img_angry_2         | image      | Face only - Angry expression - Eyes closed.                                |  
| img_laughing_0      | image      | Face only - Laughing expression - Eyes fully open.                         |  
| img_laughing_1      | image      | Face only - Laughing expression - Eyes half open.                          |  
| img_laughing_2      | image      | Face only - Laughing expression - Eyes closed.                             |  
| img_smiling_0       | image      | Face only - Smiling expression - Eyes fully open.                          |  
| img_smiling_1       | image      | Face only - Smiling expression - Eyes half open.                           |  
| img_smiling_2       | image      | Face only - Smiling expression - Eyes closed.                              |  
| img_grinning_0      | image      | Face only - Grinning expression - Eyes fully open.                         |  
| img_grinning_1      | image      | Face only - Grinning expression - Eyes half open.                          |  
| img_grinning_2      | image      | Face only - Grinning expression - Eyes closed.                             |  
| \[audio_clip_paths] | dictionary | `.toml` tag to declare a dictionary/collection.                            |
| wav_allmarvelous    | audio      | Voice line saying "ALL MARVELOUS!"                                         |
| wav_fullcombo       | audio      | Voice line saying "FULL COMBO!"                                            |
| wav_missless        | audio      | Voice line saying "MISSLESS!"                                              |
| wav_clear_0         | audio      | Voice line saying "CLEAR." - (neutral)                                     |
| wav_clear_1         | audio      | Voice line saying "CLEAR!" - (enthusiastic)                                |
| wav_clear_2         | audio      | Voice line saying "CLEAR~!!!" - (amazed)                                   |

## Resolution

For consistency, I recommend this resolution:

| Image            | Resolution |
|------------------|------------|
| img_icon         | 512x512    |  
| img_base         | 1024x1024  |  
| img_expression_# | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property         | File Name        |
|------------------|------------------|
| Navigator File   | navigator.toml   |
| img_icon         | icon.png         |  
| img_base         | base.png         |  
| img_neutral_0    | neutral_0.png    |  
| img_neutral_1    | neutral_1.png    |  
| img_neutral_2    | neutral_2.png    |  
| img_amazed_0     | amazed_0.png     |  
| img_amazed_1     | amazed_1.png     |  
| img_amazed_2     | amazed_2.png     |  
| img_troubled_0   | troubled_0.png   |  
| img_troubled_1   | troubled_1.png   |  
| img_troubled_2   | troubled_2.png   |  
| img_surprised_0  | surprised_0.png  |  
| img_surprised_1  | surprised_1.png  |  
| img_surprised_2  | surprised_2.png  |  
| img_startled_0   | startled_0.png   |  
| img_startled_1   | startled_1.png   |  
| img_startled_2   | startled_2.png   |  
| img_angry_0      | angry_0.png      |  
| img_angry_1      | angry_1.png      |  
| img_angry_2      | angry_2.png      |  
| img_laughing_0   | laughing_0.png   |  
| img_laughing_1   | laughing_1.png   |  
| img_laughing_2   | laughing_2.png   |  
| img_smiling_0    | smiling_0.png    |  
| img_smiling_1    | smiling_1.png    |  
| img_smiling_2    | smiling_2.png    |  
| img_grinning_0   | grinning_0.png   |  
| img_grinning_1   | grinning_1.png   |  
| img_grinning_2   | grinning_2.png   |
| wav_allmarvelous | allmarvelous.wav |
| wav_fullcombo    | fullcombo.wav    |
| wav_missless     | missless.wav     |
| wav_clear_0      | clear_0.wav      |
| wav_clear_1      | clear_1.wav      |
| wav_clear_2      | clear_2.wav      |