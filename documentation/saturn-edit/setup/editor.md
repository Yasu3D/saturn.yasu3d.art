# Editor Setup
SATURN EDIT does not have an installer! It should just be a `.zip` file containing the executable, assets, and a lot of .NET framework libraries. (`.dll` extension on Windows, `.dll` and `.so` on Linux)  
If you downloaded an installer or _just_ an executable file and nothing else, it's either faulty or malware. **DO NOT RUN IT!**

1. Download the latest version of SATURN EDIT.
2. Extract the downloaded `.zip` file to a directory of your choice.
3. Open the extracted folder.
4. Locate and run the `SaturnEdit` executable.

> If you are migrating from an older editor that isn't SATURN EDIT, I recommend reading the [Transition Guide](guides/transition_guide.md).

> For the time being, hitsounds are not included by default! You must source these yourself.  
> For more information about how to select hitsounds in the editor, please see [Audio Setup](setup/audio.md#Hitsounds).

## Automatic Updates
SATURN EDIT offers semi-automatic updates. 
Every time the program is started, it checks if a newer version is available on GitHub.
If a newer version is found, <img src="media/update.png" width="20"/> will appear on the right side of the top menu bar.
Pressing this button starts an automatic update. A pop-up window in the application will provide further instructions.

SATURN EDIT does not collect any user/usage metrics or other data. All it does is ping GitHub once on startup. If you still wish to disable all network communication, uncheck this option:
```
Settings | General | On Program Start | Check For Updates
```