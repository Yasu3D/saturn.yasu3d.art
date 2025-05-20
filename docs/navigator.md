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
image_icon = "image/icon.png"
image_base = "image/base.png"
# ...
[dialgues.en-US]
    [[dialogues.en-US.rhythmgame_result_clear_0]]
        message = "Clear"
        audio_path = "audio/rhythmgame_result_clear_0.wav"
# ...
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── Navigator/
            └── <NAVIGATOR>/
                └── navigator.toml/
                    ├── audio/
                    │   ├── rhythmgame_result_clear_0.wav
                    │   └── ...
                    ├── image/
                    │   ├── base.png
                    │   ├── icon.png
                    │   └── ...
                    └── navigator.toml
```

## Properties

| Property            | Value Type | Use Case                                                                   |
|---------------------|------------|----------------------------------------------------------------------------|
| `guid`              | String     | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| `name`              | String     | Name of the navigator.                                                     |
| `description`       | String     | Description of the navigator.                                              |
| `artist`            | String     | Artist that made the navigator.                                            |
| `voice`             | String     | Voice actor that recorded the audio.                                       |
| `width`             | Pixels     | Width of the base image to show in-game.                                   |
| `height`            | Pixels     | Height of the base image to show in-game.                                  |
| `offset_x`          | Pixels     | Horizontal offset of the base image.                                       |
| `offset_y`          | Pixels     | Vertical offset of the base image.                                         |
| `margin_top`        | Pixels     | Top margin from base image for face image.                                 |
| `margin_bottom`     | Pixels     | Bottom margin from base image for face image.                              |
| `margin_left`       | Pixels     | Left margin from base image for face image.                                |
| `margin_right`      | Pixels     | Right margin from base image for face image.                               |
| `blink_interval`    | Seconds    | Time between blinks.                                                       |
| `blink_duration`    | Seconds    | Time between frames of the blink animation.                                |
| `[texture_paths]`   | Dictionary | Declares a collection of textures.                                         |
| `[dialogues]`       | Dictionary | Declares a collection of dialogues.                                        |

## Layout Properties

The layout properties allow Navigators to have the correct size and position without having to modify the textures. 
Width and Height define the size of the Navigator in-game. These values do not have to match the resolution of your texture.

- Positive offset will move the navigator to the right/up.
- Negative offset will move the navigator to the left/down.

Expressions are overlaid on top of the body image. To save resources, the expression textures can be cropped to only the face and aligned to fit over the body image with the margin properties.  
- Positive margins will shrink the face image inward.
- Negative margins will expand the face image beyond the body image bounds.

<img src="media/navigator_layout.png" alt="navigator layout">

## Texture Properties

| Property            | Value Type | Affected Image        | Expression | Blink State      |
|:--------------------|------------|-----------------------|------------|------------------|
| `image_icon`        | Filepath   | Icon in Windmill Menu | /          | /                |  
| `image_base`        | Filepath   | Body only             | /          | /                |  
| `image_neutral_0`   | Filepath   | Face only             | Neutral    | Eyes fully open. |  
| `image_neutral_1`   | Filepath   | Face only             | Neutral    | Eyes half open.  |  
| `image_neutral_2`   | Filepath   | Face only             | Neutral    | Eyes closed.     |  
| `image_amazed_0`    | Filepath   | Face only             | Amazed     | Eyes fully open. |  
| `image_amazed_1`    | Filepath   | Face only             | Amazed     | Eyes half open.  |  
| `image_amazed_2`    | Filepath   | Face only             | Amazed     | Eyes closed.     |  
| `image_troubled_0`  | Filepath   | Face only             | Troubled   | Eyes fully open. |  
| `image_troubled_1`  | Filepath   | Face only             | Troubled   | Eyes half open.  |  
| `image_troubled_2`  | Filepath   | Face only             | Troubled   | Eyes closed.     |  
| `image_surprised_0` | Filepath   | Face only             | Surprised  | Eyes fully open. |  
| `image_surprised_1` | Filepath   | Face only             | Surprised  | Eyes half open.  |  
| `image_surprised_2` | Filepath   | Face only             | Surprised  | Eyes closed.     |  
| `image_startled_0`  | Filepath   | Face only             | Startled   | Eyes fully open. |  
| `image_startled_1`  | Filepath   | Face only             | Startled   | Eyes half open.  |  
| `image_startled_2`  | Filepath   | Face only             | Startled   | Eyes closed.     |  
| `image_angry_0`     | Filepath   | Face only             | Angry      | Eyes fully open. |  
| `image_angry_1`     | Filepath   | Face only             | Angry      | Eyes half open.  |  
| `image_angry_2`     | Filepath   | Face only             | Angry      | Eyes closed.     |  
| `image_laughing_0`  | Filepath   | Face only             | Laughing   | Eyes fully open. |  
| `image_laughing_1`  | Filepath   | Face only             | Laughing   | Eyes half open.  |  
| `image_laughing_2`  | Filepath   | Face only             | Laughing   | Eyes closed.     |  
| `image_smiling_0`   | Filepath   | Face only             | Smiling    | Eyes fully open. |  
| `image_smiling_1`   | Filepath   | Face only             | Smiling    | Eyes half open.  |  
| `image_smiling_2`   | Filepath   | Face only             | Smiling    | Eyes closed.     |  
| `image_grinning_0`  | Filepath   | Face only             | Grinning   | Eyes fully open. |  
| `image_grinning_1`  | Filepath   | Face only             | Grinning   | Eyes half open.  |  
| `image_grinning_2`  | Filepath   | Face only             | Grinning   | Eyes closed.     |  

### Defining Properties

Textures are defined in the `[texture_paths]` dictionary. Each property can only be defined once, but different properties can share the same filepath.

```toml
# ...
[texture_paths]
image_base = "image/base.png"
image_neutral_0 = "image/neutral.png"
image_neutral_0 = "image/happy.png" # INVALID
```

```toml
# ...
[texture_paths]
image_base = "image/base.png"
image_neutral_0 = "image/neutral.png"
image_neutral_1 = "image/neutral.png" # VALID
```

### Omitting Properties

If your navigator doesn't have any expressions, you do not have to define blank expression filepaths. Instead, just omit all expression properties.

```toml
[texture_paths]
image_base = "image/base.png"
image_neutral_0 = ""
image_neutral_1 = ""
image_neutral_2 = ""
image_amazed_0 = ""
#...

# DONT DO THIS
```

```toml
[texture_paths]
image_base = "image/base.png"

# DO THIS
```

### Invalid Filepaths

If a filepath is invalid or undefined, then the image will be invisible in SATURN.  
If your navigator doesn't have artwork for a certain expression, don't keep the filepath undefined. Use a different expression's texture as a substitute.

```toml
[texture_paths]
image_base = "image/base.png"
image_neutral_0 = "image/neutral_0.png"
image_neutral_1 = "image/neutral_1.png"
image_neutral_2 = "image/neutral_2.png"
image_amazed_0 = ""
image_amazed_1 = ""
image_amazed_2 = ""
#...

# DONT DO THIS
```

```toml
[texture_paths]
image_base = "image/base.png"
image_neutral_0 = "image/neutral_0.png"
image_neutral_1 = "image/neutral_1.png"
image_neutral_2 = "image/neutral_2.png"
image_amazed_0 = "image/neutral_0.png"
image_amazed_1 = "image/neutral_1.png"
image_amazed_2 = "image/neutral_2.png"
#...

# DO THIS
```

## Dialogue Properties



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