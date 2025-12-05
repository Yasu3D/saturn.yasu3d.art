# Adding Console Colors

## File Structure

Any `.toml` file in `./Data/ConsoleColor/` will be recognized as a `console color`.  
Putting console colors in subdirectories isn't as necessary as with other cosmetics, since they're contained to one file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Console Color"
color_a = "#FF0000"
color_b = "#00FF00"
color_c = "#0000FF"
led_a = "#FF0000"
led_b = "#00FF00"
led_c = "#0000FF"
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── ConsoleColor/
            └── ExampleConsoleColor.toml
```

## Properties

| Property  | Type   | Use Case                                                                   |
|-----------|--------|----------------------------------------------------------------------------|
| `guid`    | String | A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic. |
| `name`    | String | Name of the console color.                                                 |
| `color_a` | Color  | Color to display on screen. For areas with no mask.                        |
| `color_b` | Color  | Color to display on screen. For areas with mask.                           |
| `color_c` | Color  | Color to display on screen. For areas with notes.                          |
| `led_a`   | Color  | Color to send to LEDs. For areas with no mask.                             |
| `led_b`   | Color  | Color to send to LEDs. For areas with mask.                                |
| `led_c`   | Color  | Color to send to LEDs. For areas with notes.                               |

<img src="media/console_color.png" alt="console color" width="512">