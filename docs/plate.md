# Adding Plates

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

Plates need transparency to be the right shape, so `.jpg`/`.jpeg` is *possible* to use, but discouraged.

## File Structure

Any `.toml` file in `./Data/Plate/` will be recognized as a `plate`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```PLATE.TOML
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Plate"
description = "A sample plate."
artist = "artist"
plate_path = "plate.png"
```

```FILE TREE
.
└── StreamingAssets/
    └── Data/
        └── Plate/
            └── <PLATE>/
                ├── plate.toml
                └── plate.png
```

## Properties

| Property    | Type     | Use Case                                                                   |
|-------------|----------|----------------------------------------------------------------------------|
| guid        | string   | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| name        | string   | Name of the plate.                                                         |
| description | string   | Description of the plate.                                                  |
| artist      | string   | Artist that made the plate.                                                |
| image_path  | filepath | Plate image.                                                               |

## Resolution

For consistency, I recommend this resolution:

| Image | Resolution |
|-------|------------|
| plate | 1024x256   |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property   | File Name  |
|------------|------------|
| Plate File | plate.toml |
| image_path | plate.png  |

