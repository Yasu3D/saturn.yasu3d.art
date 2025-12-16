# Folder
A collection of songs and entries, to group them together in a Song Select Scene.

Inherits <a href="/documentation/saturn-data/index.html#/items/content_item.md">Content Item</a>.

## Properties

### Color
The color of the folder.

### Background
The background theme of the folder.  
The available background themes are:

| Theme         | Appearance                                     |
|---------------|------------------------------------------------|
| Checkers      | Black and gray checkerboard pattern.           |
| Triangles     | Light pink triangles on a hot pink background. |
| Circles       | Cyan circles on a yellow-green background.     |
| Sparkles      | Black sparkles on an orange background.        |
| Arrows        | Light red arrows on a dark red background.     |
| SquareMesh    | Gray square mesh on a sky blue background.     |
| TrianglesMesh | White triangle mesh on a deep blue background. |
| Stripes       | Purple stripes on a hot pink background.       |
| Dots          | White dots on a yellow-orange background.      |
| Stars         | White stars on a blue-cyan background.         |
| Level         | Purple stripes on a hot pink background.       |
| Name          | Green triangles on a white-green background.   |

### ImagePath
The local filepath of the folder image, relative to the <see cref="ContentItem.AbsoluteSourcePath"/>.

### Label
The string to display on a small additional folder label.

### Entries
Entries in the folder, sorted by individual metadata.

> [!NOTE]
> Used for difficulty-independent grouping.

### NormalSongs
Songs in the folder, sorted by Normal difficulty metadata

> [!NOTE]
> Used for standard grouping, within each difficulty.

### HardSongs
Songs in the folder, sorted by Hard difficulty metadata

> [!NOTE]
> Used for standard grouping, within each difficulty.

### ExpertSongs
Songs in the folder, sorted by Expert difficulty metadata

> [!NOTE]
> Used for standard grouping, within each difficulty.

### InfernoSongs
Songs in the folder, sorted by Inferno difficulty metadata

> [!NOTE]
> Used for standard grouping, within each difficulty.

### WorldsEndSongs
Songs in the folder, sorted by World's End difficulty metadata

> [!NOTE]
> Used for standard grouping, within each difficulty.