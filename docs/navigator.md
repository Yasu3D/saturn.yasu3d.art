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

```toml
# ...
[texture_paths]
img_icon = "icon.png"
img_base = "base.png"
# ...
[audio_clip_paths]
wav_allmarvelous = "allmarvelous.wav"
# ...
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

| Property              | Value Type | Use Case                                                                   |
|-----------------------|------------|----------------------------------------------------------------------------|
| `guid`                | String     | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| `name`                | String     | Name of the navigator.                                                     |
| `description`         | String     | Description of the navigator.                                              |
| `artist`              | String     | Artist that made the navigator.                                            |
| `voice`               | String     | Voice actor that recorded the audio.                                       |
| `width`               | Pixels     | Width of the navigator image to show in-game.                              |
| `height`              | Pixels     | Height of the navigator image to show in-game.                             |
| `offset_x`            | Pixels     | Horizontal offset of the navigator image.                                  |
| `offset_y`            | Pixels     | Vertical offset of the navigator image.                                    |
| `margin_top`          | Pixels     | Top margin from base image for face image.                                 |
| `margin_bottom`       | Pixels     | Bottom margin from base image for face image.                              |
| `margin_left`         | Pixels     | Left margin from base image for face image.                                |
| `margin_right`        | Pixels     | Right margin from base image for face image.                               |
| `blink_interval`      | Seconds    | Time between blinks.                                                       |
| `blink_duration`      | Seconds    | Time between frames of the blink animation.                                |
| `\[texture_paths]`    | Dictionary | `.toml` tag to declare a dictionary/collection.                            |
| `image_icon`          | Filepath   | Icon displayed when selecting navigators.                                  |  
| `image_base`          | Filepath   | Body only                                                                  |  
| `image_neutral_0`     | Filepath   | Face only - Neutral expression - Eyes fully open.                          |  
| `image_neutral_1`     | Filepath   | Face only - Neutral expression - Eyes half open.                           |  
| `image_neutral_2`     | Filepath   | Face only - Neutral expression - Eyes closed.                              |  
| `image_amazed_0`      | Filepath   | Face only - Amazed expression - Eyes fully open.                           |  
| `image_amazed_1`      | Filepath   | Face only - Amazed expression - Eyes half open.                            |  
| `image_amazed_2`      | Filepath   | Face only - Amazed expression - Eyes closed.                               |  
| `image_troubled_0`    | Filepath   | Face only - Troubled expression - Eyes fully open.                         |  
| `image_troubled_1`    | Filepath   | Face only - Troubled expression - Eyes half open.                          |  
| `image_troubled_2`    | Filepath   | Face only - Troubled expression - Eyes closed.                             |  
| `image_surprised_0`   | Filepath   | Face only - Surprised expression - Eyes fully open.                        |  
| `image_surprised_1`   | Filepath   | Face only - Surprised expression - Eyes half open.                         |  
| `image_surprised_2`   | Filepath   | Face only - Surprised expression - Eyes closed.                            |  
| `image_startled_0`    | Filepath   | Face only - Startled expression - Eyes fully open.                         |  
| `image_startled_1`    | Filepath   | Face only - Startled expression - Eyes half open.                          |  
| `image_startled_2`    | Filepath   | Face only - Startled expression - Eyes closed.                             |  
| `image_angry_0`       | Filepath   | Face only - Angry expression - Eyes fully open.                            |  
| `image_angry_1`       | Filepath   | Face only - Angry expression - Eyes half open.                             |  
| `image_angry_2`       | Filepath   | Face only - Angry expression - Eyes closed.                                |  
| `image_laughing_0`    | Filepath   | Face only - Laughing expression - Eyes fully open.                         |  
| `image_laughing_1`    | Filepath   | Face only - Laughing expression - Eyes half open.                          |  
| `image_laughing_2`    | Filepath   | Face only - Laughing expression - Eyes closed.                             |  
| `image_smiling_0`     | Filepath   | Face only - Smiling expression - Eyes fully open.                          |  
| `image_smiling_1`     | Filepath   | Face only - Smiling expression - Eyes half open.                           |  
| `image_smiling_2`     | Filepath   | Face only - Smiling expression - Eyes closed.                              |  
| `image_grinning_0`    | Filepath   | Face only - Grinning expression - Eyes fully open.                         |  
| `image_grinning_1`    | Filepath   | Face only - Grinning expression - Eyes half open.                          |  
| `image_grinning_2`    | Filepath   | Face only - Grinning expression - Eyes closed.                             |  
| `\[audio_clip_paths]` | Dictionary | `.toml` tag to declare a dictionary/collection.                            |
| `audio_allmarvelous`  | Filepath   | Voice line saying "ALL MARVELOUS!"                                         |
| `audio_fullcombo`     | Filepath   | Voice line saying "FULL COMBO!"                                            |
| `audio_missless`      | Filepath   | Voice line saying "MISSLESS!"                                              |
| `audio_clear_0`       | Filepath   | Voice line saying "CLEAR." - (neutral)                                     |
| `audio_clear_1`       | Filepath   | Voice line saying "CLEAR!" - (enthusiastic)                                |
| `audio_clear_2`       | Filepath   | Voice line saying "CLEAR~!!!" - (amazed)                                   |

## Resolution

For consistency, I recommend this resolution:

| Image      | Resolution |
|------------|------------|
| Icon       | 512x512    |  
| Base       | 1024x1024  |  
| Expression | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property             | File Name        |
|----------------------|------------------|
| Navigator File       | navigator.toml   |
| `image_icon`         | icon.png         |  
| `image_base`         | base.png         |  
| `image_expression_#` | expression_#.png |
| `audio_xyz`          | xyz.wav          |