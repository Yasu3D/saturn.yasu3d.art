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

```NAVIGATOR.TOML
...
[texture_paths]
img_icon = "icon.png"
img_base = "base.png"
...
[audio_clip_paths]
wav_allmarvelous = "allmarvelous.wav"
...
```

```FILE TREE
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
| image_icon          | file path  | Icon displayed when selecting navigators.                                  |  
| image_base          | file path  | Body only                                                                  |  
| image_neutral_0     | file path  | Face only - Neutral expression - Eyes fully open.                          |  
| image_neutral_1     | file path  | Face only - Neutral expression - Eyes half open.                           |  
| image_neutral_2     | file path  | Face only - Neutral expression - Eyes closed.                              |  
| image_amazed_0      | file path  | Face only - Amazed expression - Eyes fully open.                           |  
| image_amazed_1      | file path  | Face only - Amazed expression - Eyes half open.                            |  
| image_amazed_2      | file path  | Face only - Amazed expression - Eyes closed.                               |  
| image_troubled_0    | file path  | Face only - Troubled expression - Eyes fully open.                         |  
| image_troubled_1    | file path  | Face only - Troubled expression - Eyes half open.                          |  
| image_troubled_2    | file path  | Face only - Troubled expression - Eyes closed.                             |  
| image_surprised_0   | file path  | Face only - Surprised expression - Eyes fully open.                        |  
| image_surprised_1   | file path  | Face only - Surprised expression - Eyes half open.                         |  
| image_surprised_2   | file path  | Face only - Surprised expression - Eyes closed.                            |  
| image_startled_0    | file path  | Face only - Startled expression - Eyes fully open.                         |  
| image_startled_1    | file path  | Face only - Startled expression - Eyes half open.                          |  
| image_startled_2    | file path  | Face only - Startled expression - Eyes closed.                             |  
| image_angry_0       | file path  | Face only - Angry expression - Eyes fully open.                            |  
| image_angry_1       | file path  | Face only - Angry expression - Eyes half open.                             |  
| image_angry_2       | file path  | Face only - Angry expression - Eyes closed.                                |  
| image_laughing_0    | file path  | Face only - Laughing expression - Eyes fully open.                         |  
| image_laughing_1    | file path  | Face only - Laughing expression - Eyes half open.                          |  
| image_laughing_2    | file path  | Face only - Laughing expression - Eyes closed.                             |  
| image_smiling_0     | file path  | Face only - Smiling expression - Eyes fully open.                          |  
| image_smiling_1     | file path  | Face only - Smiling expression - Eyes half open.                           |  
| image_smiling_2     | file path  | Face only - Smiling expression - Eyes closed.                              |  
| image_grinning_0    | file path  | Face only - Grinning expression - Eyes fully open.                         |  
| image_grinning_1    | file path  | Face only - Grinning expression - Eyes half open.                          |  
| image_grinning_2    | file path  | Face only - Grinning expression - Eyes closed.                             |  
| \[audio_clip_paths] | dictionary | `.toml` tag to declare a dictionary/collection.                            |
| audio_allmarvelous  | file path  | Voice line saying "ALL MARVELOUS!"                                         |
| audio_fullcombo     | file path  | Voice line saying "FULL COMBO!"                                            |
| audio_missless      | file path  | Voice line saying "MISSLESS!"                                              |
| audio_clear_0       | file path  | Voice line saying "CLEAR." - (neutral)                                     |
| audio_clear_1       | file path  | Voice line saying "CLEAR!" - (enthusiastic)                                |
| audio_clear_2       | file path  | Voice line saying "CLEAR~!!!" - (amazed)                                   |

## Resolution

For consistency, I recommend this resolution:

| Image              | Resolution |
|--------------------|------------|
| image_icon         | 512x512    |  
| image_base         | 1024x1024  |  
| image_expression_# | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property           | File Name        |
|--------------------|------------------|
| Navigator File     | navigator.toml   |
| image_icon         | icon.png         |  
| image_base         | base.png         |  
| image_neutral_0    | neutral_0.png    |  
| image_neutral_1    | neutral_1.png    |  
| image_neutral_2    | neutral_2.png    |  
| image_amazed_0     | amazed_0.png     |  
| image_amazed_1     | amazed_1.png     |  
| image_amazed_2     | amazed_2.png     |  
| image_troubled_0   | troubled_0.png   |  
| image_troubled_1   | troubled_1.png   |  
| image_troubled_2   | troubled_2.png   |  
| image_surprised_0  | surprised_0.png  |  
| image_surprised_1  | surprised_1.png  |  
| image_surprised_2  | surprised_2.png  |  
| image_startled_0   | startled_0.png   |  
| image_startled_1   | startled_1.png   |  
| image_startled_2   | startled_2.png   |  
| image_angry_0      | angry_0.png      |  
| image_angry_1      | angry_1.png      |  
| image_angry_2      | angry_2.png      |  
| image_laughing_0   | laughing_0.png   |  
| image_laughing_1   | laughing_1.png   |  
| image_laughing_2   | laughing_2.png   |  
| image_smiling_0    | smiling_0.png    |  
| image_smiling_1    | smiling_1.png    |  
| image_smiling_2    | smiling_2.png    |  
| image_grinning_0   | grinning_0.png   |  
| image_grinning_1   | grinning_1.png   |  
| image_grinning_2   | grinning_2.png   |
| audio_allmarvelous | allmarvelous.wav |
| audio_fullcombo    | fullcombo.wav    |
| audio_missless     | missless.wav     |
| audio_clear_0      | clear_0.wav      |
| audio_clear_1      | clear_1.wav      |
| audio_clear_2      | clear_2.wav      |