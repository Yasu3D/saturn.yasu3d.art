# Adding Cosmetics
> 💡 This page explains the file structure for cosmetic files, and how they're read by SATURN.
> If you want to learn more about how to create cosmetics, refer to this page:  
> <a href="/documentation/saturn-edit/index.html">SATURN EDIT Documentation</a>

Cosmetic files are stored in `/StreamingAssets/Data/COSMETIC_TYPE/`, 
where `COSMETIC_TYPE` is one of the valid cosmetic types listed below. 

All files placed in this directory or any subdirectory will be parsed by SATURN.  
All `.toml` files in a cosmetic type's directory will be interpreted as that cosmetic type.

> 💡 For more info about cosmetic data specifications, refer to this page:  
> <a href="/documentation/saturn-data/index.html#/cosmetics/cosmetic_item.md">SATURN DATA CosmeticItem Documentation</a>

## Cosmetic Types
| Type          | Directory                             |
|---------------|---------------------------------------|
| Console Color | `/StreamingAssets/Data/ConsoleColor/` |
| Emblem        | `/StreamingAssets/Data/Emblem/`       |
| Icon          | `/StreamingAssets/Data/Icon/`         |
| Navigator     | `/StreamingAssets/Data/Navigator/`    |
| Note Sound    | `/StreamingAssets/Data/NoteSound/`    |
| Plate         | `/StreamingAssets/Data/Plate/`        |
| System Music  | `/StreamingAssets/Data/SystemMusic/`  |
| System Sound  | `/StreamingAssets/Data/SystemSound/`  |
| Title         | `/StreamingAssets/Data/Title/`        |

## Supported File Formats
### Metadata
- `.toml`

### Image
- `.png` (recommended)
- `.jpg`/`.jpeg`

### Audio
- `.wav` (recommended)
- `.mp3`
- `.ogg`