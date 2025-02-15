# Adding Icons

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

Icons need transparency to be circular, so `.jpg`/`.jpeg` is *possible* to use, but discouraged.

## File Structure

Any `.toml` file in `./Data/Icon/` will be recognized as an `icon`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```ICON.TOML
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Icon"
description = "A sample icon."
artist = "artist"
icon_path = "icon.png"
```

```FILE TREE
.
└── StreamingAssets/
    └── Data/
        └── Icon/
            └── <ICON>/
                ├── icon.toml
                └── icon.png
```

## Properties

| Property    | Type     | Use Case                                                                   |
|-------------|----------|----------------------------------------------------------------------------|
| guid        | string   | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| name        | string   | Name of the icon.                                                          |
| description | string   | Description of the icon.                                                   |
| artist      | string   | Artist that made the icon.                                                 |
| image_path  | filepath | Icon image.                                                                |

## Resolution

For consistency, I recommend this resolution:

| Image | Resolution |
|-------|------------|
| icon  | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property   | File Name |
|------------|-----------|
| Icon File  | icon.toml |
| image_path | icon.png  |

