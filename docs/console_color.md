# Adding Console Colors

## File Structure

Any `.toml` file in `./Data/ConsoleColor/` will be recognized as a `console color`.  
Putting console colors in sub-directories isn't as necessary as with other cosmetics, since they're contained to one file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample Console Color"
color_a = "#123ABC"
color_b = "#123ABC"
color_c = "#123ABC"
led_a = "#123ABC"
led_b = "#123ABC"
led_c = "#123ABC"
```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── ConsoleColor/
            └── <CONSOLE COLOR>.toml
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