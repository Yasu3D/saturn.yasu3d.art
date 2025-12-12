# Reading other Content from a File
All non-chart content uses the [TOML](https://toml.io/en/) format.  
Please use an external library to process `.toml` files, like [Tomlyn](https://github.com/xoofx/Tomlyn). (SATURN and SATURN EDIT use that one).

## Tomlyn Example
Tomlyn offers a way to convert a string into a specific class via the `Toml.ToModel<>()` method.  
To get a specific type of content item from a file, first read all text from the file, then pass it into `Toml.ToModel<>()` with the desired content item type. 

For more information, refer to [Tomlyn's documentation](https://github.com/xoofx/Tomlyn/blob/main/doc/readme.md) and the [TOML format specification](https://toml.io/en/v1.0.0).

> ⚠️ Tomlyn will throw an exception when it encounters invalid data. You must catch and handle these exceptions yourself.

```csharp
// Read all text from a file at "C:\Path\To\example_icon.toml"
string data = File.ReadAllText(@"C:\Path\To\example_icon.toml");

// Parse text data into an Icon object.
Icon exampleIcon = Toml.ToModel<Icon>(data);
```