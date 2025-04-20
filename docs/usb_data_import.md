# USB Data Import

USB Data Import allows you to import new music, cosmetics, and profiles into SATURN without a mouse and keyboard by inserting a removable storage medium via USB. (USB Stick, SD card, Portable SSD, etc.)

## How to set up Storage Media for Import

To efficiently detect files, SATURN expects a fixed data structure:

- A `.SATIMPORT` file must be in the root directory.
- A `../Data/` subdirectory must be in the root directory.
- Content inside the `../Data/` directory must be laid out the same way as `../StreamingAssets` in the local game files.

When set up properly, the data should be laid out like this:

```file tree
E:/
├── .SATIMPORT
└── Data
    ├── ConsoleColor/
    ├── Emblem/
    ├── Icon/
    ├── Music/
    ├── Navigator/
    ├── NoteSound/
    ├── Plate/
    ├── Profile/
    ├── StageUp/
    ├── SystemSound/
    └── Title/
```

#### Notes regarding Data Safety:

- SATURN does not modify any external data. It only copies external files over to local storage.
- SATURN will forcefully overwrite local data in `../StreamingAssets/` if another file with the same path already exists. 
- SATURN only does a `File.Exists()` check to see if a `.SATIMPORT` file is present in the root directory.
- SATURN only thoroughly scans data in the `../Data` directory.
- All other external data is ignored and left untouched.



## How to Import

To begin a USB Data Import, enter the test menu and select `IMPORT DATA`.

SATURN will wait until a new storage medium is detected by the operating system.  
The status text will display `WAITING FOR STORAGE MEDIUM...` in yellow.

Once a new storage medium is detected, SATURN will look for a `.SATIMPORT` file.  
-> If it isn't found, the status text will display `ERROR: NO .SATIMPORT FILE FOUND.` in red.  
You can press the TEST button to exit and retry.  

-> If it is found, the status text will display `SUCCESS: .SATIMPORT FILE FOUND.` in green.  
You can press the SERVICE button or VOL UP/VOL DOWN buttons to select the data to import:
- MUSIC
- COSMETICS
- PROFILES

You can press the TEST button to confirm your selection and start the import.  
SATURN will now scan every file in `../Data/`, check if the data is valid, and copy all valid files to their respective location in `../StreamingAssets/`.

Once the import is done, press the TEST button again to exit the data import menu.