# Adding Icons

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

Icons need transparency to be circular, so `.jpg`/`.jpeg` is *possible* to use, but discouraged.

## File Structure

Any `.toml` file in `./Data/Icon/` will be recognized as an `icon`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Icon"
description = "A sample icon."
artist = "artist"
icon_path = "icon.png"
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── Icon/
            └── <ICON>/
                ├── icon.toml
                └── icon.png
```

## Properties

| Property      | Type     | Use Case                                                                   |
|---------------|----------|----------------------------------------------------------------------------|
| `guid`        | String   | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| `name`        | String   | Name of the icon.                                                          |
| `description` | String   | Description of the icon.                                                   |
| `artist`      | String   | Artist that made the icon.                                                 |
| `image_path`  | Filepath | Icon image.                                                                |

## Resolution

For consistency, I recommend this resolution:

| Image | Resolution |
|-------|------------|
| Icon  | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property   | File Name |
|------------|-----------|
| Icon File  | icon.toml |
| Image File | icon.png  |

