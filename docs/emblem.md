# Adding Emblems

## Supported Image Formats
- `.png` (recommended)
- `.jpg`/`.jpeg`

Emblems need transparency to be the right shape, so `.jpg`/`.jpeg` is *possible* to use, but discouraged.

## File Structure

Any `.toml` file in `./Data/Emblem/` will be recognized as an `emblem`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Emblem"
description = "A sample emblem."
artist = "artist"
emblem_path = "emblem.png"
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── Emblem/
            └── ExampleEmblem/
                ├── emblem.toml
                └── emblem.png
```

## Properties

| Property      | Type     | Use Case                                                                   |
|---------------|----------|----------------------------------------------------------------------------|
| `guid`        | String   | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| `name`        | String   | Name of the emblem.                                                        |
| `description` | String   | Description of the emblem.                                                 |
| `artist`      | String   | Artist that made the emblem.                                               |
| `image_path`  | Filepath | Emblem image.                                                              |

## Resolution

For consistency, I recommend this resolution:

| Image  | Resolution |
|--------|------------|
| Emblem | 256x256    |

## Naming Scheme

For consistency, I recommend this naming scheme:

| Property    | File Name   |
|-------------|-------------|
| Emblem File | emblem.toml |
| Image File  | emblem.png  |

