# Adding Titles

## File Structure

Any `.toml` file in `./Data/Title/` will be recognized as a `title`.  
Putting titles in sub-folders isn't as necessary as with other cosmetics, since they're contained to one file.

```TITLE.TOML
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Title"
description = "A sample title."
```

```FILE TREE
.
└── StreamingAssets/
    └── Data/
        └── Title/
            └── <TITLE>.toml
```

## Properties

| Property    | Type   | Use Case                                                                   |
|-------------|--------|----------------------------------------------------------------------------|
| guid        | string | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| name        | string | Name of the title, and the text to display as the title.                   |
| description | string | Description of the title.                                                  |

