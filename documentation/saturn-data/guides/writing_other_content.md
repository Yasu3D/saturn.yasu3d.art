# Writing other Content to a File
All non-chart content uses the [TOML](https://toml.io/en/) format.  
Please use an external library to convert content items to `.toml` files, like [Tomlyn](https://github.com/xoofx/Tomlyn). (SATURN and SATURN EDIT use that one).

## Tomlyn Example
Tomlyn offers a way to convert any class to a string via the `Toml.FromModel()` method.

For more information, refer to [Tomlyn's documentation](https://github.com/xoofx/Tomlyn/blob/main/doc/readme.md) and the [TOML format specification](https://toml.io/en/v1.0.0).

```csharp
// Create example content item.
Icon exampleIcon = new();

// Convert icon to toml data with Tomlyn.
string data = Toml.FromModel(exampleIcon);

// Write data to a file.
File.WriteAllText(@"C:\Path\To\example_icon.toml", data);
```