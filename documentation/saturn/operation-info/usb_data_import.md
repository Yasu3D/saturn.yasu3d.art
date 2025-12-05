# USB Data Import

USB Data Import allows you to import new music, cosmetics, and profiles into SATURN without a mouse and keyboard by inserting a removable storage medium via USB. (USB Stick, SD card, Portable SSD, etc.)

## How to set up Storage Media for Import

To efficiently detect files, SATURN expects a fixed data structure:

- A `../Data/` subdirectory must be in the root directory.
- Content inside the `../Data/` directory must follow the same file structure as the `../StreamingAssets/` directory in the local game files.

When set up properly, the data should be laid out like this:

```file tree
E:/
└── Data
    ├── Music/
    │   └── ...
    ├── StageUp/
    │   └── ...
    ├── Profile/
    │   └── ...
    └── Cosmetic/
        ├── ConsoleColor/
        │   └── ...
        ├── Emblem/
        │   └── ...
        ├── Icon/
        │   └── ...
        ├── Navigator/
        │   └── ...
        ├── NoteSound/
        │   └── ...
        ├── Plate/
        │   └── ...
        ├── SystemMusic/
        │   └── ...
        ├── SystemSound/
        │   └── ...
        └── Title/
            └── ...
```

#### Notes regarding Data Safety:

- SATURN does not modify any external data. It only copies external files over to local storage.
- SATURN will overwrite local data in `../StreamingAssets/` if another file with the same path already exists.
- SATURN only thoroughly scans data in the `../Data/` directory.
- All other external data is ignored and left untouched.



## How to Import

To begin a USB Data Import, enter the system test menu and select `IMPORT DATA`.

SATURN will wait until a new storage medium is detected by the operating system.  
The status text will display <code style="color: #FFCC00">WAITING FOR STORAGE MEDIUM...</code>.

Once a new storage medium is detected, SATURN will look for a `.SATIMPORT` file:
- If it isn't found, the status text will display <code style="color: #CC0000">ERROR: NO .SATIMPORT FILE FOUND.</code>.  
You can press <kbd>TEST</kbd> to exit and retry.  

- If it is found, the status text will display <code style="color: #00CC00">SUCCESS: .SATIMPORT FILE FOUND.</code>.  
You can press <kbd>SERVICE</kbd> or <kbd>VOL UP</kbd> / <kbd>VOL DOWN</kbd> buttons to select what you wish to import.

The following options are available:
- MUSIC
- COSMETICS
- PROFILES

You can then press <kbd>TEST</kbd> to confirm your selection and start the import.  
SATURN will now scan every file in `../Data/`, check if the data is valid, and copy all valid files to their respective location in `../StreamingAssets/`.

Once the import is done, press <kbd>TEST</kbd> again to exit the data import menu.