# Adding Content

SATURN allows users to import various types of custom content. 

Files for all custom content metadata (except charts) use the `TOML` format. 
You can read about what that format is and how it works [here](https://toml.io/en/).

All user-imported data is located in the `StreamingAssets` directory of the game.
The relative filepath from `Saturn.exe` is `/Saturn_Data/StreamingAssets/` by default.

```file tree
.
└── Saturn/
    └── Saturn_Data/
        └── StreamingAssets/
            ├── Data/
            │   ├── ConsoleColor/
            │   ├── Emblem/
            │   ├── Icon/
            │   ├── Music/
            │   ├── Navigator/
            │   ├── NoteSound/
            │   ├── Plate/
            │   ├── StageUp/
            │   ├── SystemMusic/
            │   ├── SystemSound/
            │   └── Title/
            ├── Led/
            ├── Locales/
            └── license.txt
```