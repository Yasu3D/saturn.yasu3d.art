# Working with Filepaths in SATURN EDIT
All content files in SATURN and SATURN EDIT use **relative** filepaths to reference external files, like images or audio.
These filepaths always stem from the same Directory as the file that defined the content (e.g. the `.sat` file for a Chart, or the `.toml` file for a Cosmetic).
This Directory is called the **source directory**.

However, the software itself uses **absolute** filepaths for all file processing. To create absolute filepaths, the source directory and relative filepaths must be combined.

Consider the following file structure:
```file tree
C:/
└── .../
    └── Music/
        └── Song 1/
            ├── 2_expert.sat
            ├── audio.wav
            └── jacket.png
```
`2_expert.sat` is a Chart file containing this metadata:
```SAT
@JACKET         jacket.png
@AUDIO          audio.wav
```

The **source directory** of the Chart file is `C:/.../Music/Song_1/`.

The **relative** filepath of the audio file is `audio.wav`.  
To get the **absolute** filepath of the audio file, the **source directory** and **relative** filepath are combined:  
`C:/.../Music/Song_1/` +  `audio.wav` = `C:/.../Music/Song_1/audio.wav` 

The **relative** filepath of the image file is `jacket.png`.  
To get the **absolute** filepath of the image file, the **source directory** and **relative** filepath are combined:  
`C:/.../Music/Song_1/` + `jacket.png` = `C:/.../Music/Song_1/jacket.png`

> WARNING: Relative filepaths normally allow you to traverse backwards in the file tree by using `../`.  
> This is *technically* supported by the SAT specifications, but heavily discouraged and unsupported in SATURN EDIT.  
> Please follow the file structure conventions shown in this documentation.

## How SATURN EDIT determines the Source Directory
### Content loaded from File
If content is loaded from a file, the source directory will always be the directory the file is located in.

| Description                       | Path                           |
|-----------------------------------|--------------------------------|
| Absolute path to content file     | `C:/Example/Path/To/chart.sat` |
| Absolute path to source directory | `C:/Example/Path/To/`          |

### Content without a File
If content is not loaded from a file (for example when creating a new Chart), then it doesn't have a source directory yet.
The source directory is set when certain actions are performed:
- If you save content with `Save`, the source directory will only be set to the save location if it hasn't been set before.  
- If you save content with `Save As`, the source directory will **always** be overwritten by the new save location.
- If you export content with `Export`, the source directory will **not** change.
- If you load an external audio/image file, the source directory will be set based on the location of the external file, if it hasn't been set before.

## File Not Found
If this warning <img src="media/warning.png" width="20"> shows up next to a file property or previously loaded data unloads, it means SATURN EDIT could not locate the specified file.
This can happen for a few reasons:

#### 1. Incorrect File Name
Confirm the file path is correct, and that it includes the file extension.

#### 2. No Source Directory
If no source directory is set, SATURN EDIT cannot locate any files. Set the source directory through any method listed above, then try again.

#### 3. Source Directory Changed
If the source directory changes, SATURN EDIT cannot locate any files at the new filepath unless they happen to have the same relative path. Copy all relevant files to the new directory and re-load them.

#### 4. No Permission/Read Errors
This is outside of SATURN EDIT's control. Please confirm your storage media is functioning properly, and that SATURN EDIT has sufficient read/write access to relevant files.

## Loading Files from outside the Source Directory
If a source directory has already been set, and you try to load an external file from outside the source directory, SATURN EDIT will prompt you to either move or copy the external file to the source directory.

For technical reasons explained above, referencing external files in other directories is unsupported.