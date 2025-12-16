# Transition Guide
SATURN EDIT should be a familiar face to people coming from previous editors.
Some things have changed though, so this guide is here to assist users making the switch to SATURN EDIT.

> [!NOTE]
> Thank you for switching to SATURN EDIT! I really hope you like it.

## Name Changes
A few terms have been renamed to either better describe their purpose, correct misnomers, or to match their name in SATURN and the SAT format.

| Old Name            | New Name         |
|---------------------|------------------|
| Gimmick             | Event            |
| Comment             | Bookmark         |
| Mask Note (Generic) | Lane Toggle Note |
| Mask Add Note       | Lane Show Note   |
| Mask Remove Note    | Lane Hide Note   |
| BPM                 | Tempo            |
| Time Signature      | Metre            |
| Hi-Speed            | Speed            |
| Split Hold          | Cut Hold         |
| Stitch Hold         | Join Hold        |
| Timing Window       | Judge Area       |

## Keyboard Input
The shortcut for **Insert Note** has been changed from <kbd>I</kbd> to <kbd>E</kbd>.  
<span style="color: #808080">(Sorry for ruining everybody's muscle memory, but I hope not being forced to reach across your keyboard makes up for it!)</span>

Separate shortcuts can now be defined for **Play** and **Pause**, though by default, they are both still <kbd>Space</kbd>.

> [!TIP]
> Shortcuts for operations are listed in the tooltips of their corresponding UI elements. Hover over things, you may learn something new!

> [!TIP]
> You can use the new Search feature — accessible via the <img src="media/search.png" width="20"> button or <kbd>Ctrl</kbd>-<kbd>F</kbd> — to look up operations by their name or shortcut, then run the operation straight from the search menu!

## Mouse Input
<kbd>LMB</kbd> now **selects objects**.  
<kbd>RMB</kbd> now **defines the position and size of the cursor**.

<kbd>Ctrl</kbd>-<kbd>WheelUp</kbd> no longer increases the beat division by one. This is now done with the keyboard: <kbd>Shift</kbd>-<kbd>PageUp</kbd>.  
<kbd>Ctrl</kbd>-<kbd>WheelDown</kbd> no longer decreases the beat division by one. This is now done with the keyboard: <kbd>Shift</kbd>-<kbd>PageDown</kbd>.

<kbd>Alt</kbd>-<kbd>WheelUp</kbd> no longer doubles the beat division. This is now done with the keyboard: <kbd>Ctrl</kbd>-<kbd>PageUp</kbd>.  
<kbd>Alt</kbd>-<kbd>WheelDown</kbd> no longer halves the beat division. This is now done with the keyboard: <kbd>Ctrl</kbd>-<kbd>PageDown</kbd>.

## Layout Changes
The default layout for SATURN EDIT should still look reminiscent of editors that came before.
The layout is fully customizable and a lot of new things have been added, so please go explore it a little bit!

> [!TIP]
> If you find a layout that you like, you can save it to a file and share it with people!
> ```
> View | Save Layout...
> ```

> [!NOTE]
> If you make changes to your layout, they will be saved when closing the application, and restored when you re-open it!

## Selection
The selection system has been completely overhauled. "Highlighting" is no more, and "Multi-Select" works for *all* object types.
That means you can now select and edit Notes, Events, and Bookmarks all at the same time.

Box select is no longer an operation that requires a shortcut to activate. It now works like the box select function in a file explorer: Just click and drag!

Selecting things no longer requires <kbd>Shift</kbd> to be held down. Instead, selection behaviour can be changed by pressing modifier keys, like in a file explorer.

## Editor Modes
Editor modes have been added. They follow the same object-/edit-mode pattern as Blender.  
You can switch modes via the drop-down menu in the Chart View (3D) Tool Window, or by pressing <kbd>Tab</kbd>.

#### Object Mode
In object mode, all chart objects are treated as single objects. This even includes chart objects made up of multiple sub-objects, like Hold Notes, Stop Effect Events, and Reverse Effect Events.

Moving and resizing in object mode will affect all sub-objects at once, as if you had the entire group of sub-objects selected.

#### Edit Mode
In edit mode, you can edit the sub-objects of a Hold Note, Stop Effect Event, or Reverse Effect Event.

## Hold Note Editing
Thanks to the new editor modes, Hold Note editing has become much more flexible. You can now place Hold Point Notes _anywhere_, and the Hold Note will reorder itself properly.

"Hold Baking" has been removed because there's no need to generate in-between segments while editing anymore. 
The new render engine allows Hold Notes to automatically curve like they do in SATURN, and the SAT format does not require them anymore either as interpolation in SATURN is handled in real-time by the judgement and render engines.

> [!NOTE]
> The MER format still requires these in-between segments. They are automatically generated when exporting a MER format file.

> [!IMPORTANT]
> This change also removes *eased* Hold Baking. 
> This was a hard decision as I know the feature is quite popular, 
> but ultimately I believe perfectly smooth non-linear Hold Notes break the game's style too much.
> I encourage you to try creating non-linear Hold Notes manually.

## Event Editing
"Insert Event" buttons have been moved from the Note type palette to this location:
```
Chart View (3D) | Insert | Add (...)
```

> [!TIP]
> If you can't find a Tool Window titled "Chart View (3D)", you can open a new one here:
> ```
> View | Tool Windows | Chart View (3D)
> ```

> [!TIP]
> To speed up your workflow, you can assign a shortcuts to insert specific Events!

## Bookmark Editing
Bookmarks are now proper chart objects, which means they can be selected and edited the same way as Notes and Events. They even show up in the 3D View!

You can also edit their message and color without having to delete them now.

## Cut, Copy, Paste
Cut, Copy, and Paste now work with Notes, Events, and Bookmarks.

When Hold Point Notes are copied to the clipboard, they can either be pasted in object mode to create a new Hold Note, or pasted in edit mode to add new Points to an existing Hold Note

The clipboard now always uses the latest SAT format version. Clipboard formats from SATURN EDIT and older editors are not compatible with each other.
> [!IMPORTANT]
> If you copy objects from different Layers, they will be combined into one Layer on your clipboard!

> [!IMPORTANT]
> Clipboard contents always get pasted on the currently selected Layer!

## Chart End
The Chart End Timestamp now always exists, and is defined in the Chart metadata instead of being a Note or Event.
If "Auto Chart End" is enabled, the Chart End Timestamp will automatically update to the ideal time based on the length of the loaded audio file, and the final playable Note.

## Color Customization
For technical reasons, the chart renderer colors can no longer be fully customized.

However, color customization remains for Judgement Line and Notes with preset colors that match those available in SATURN and SATURN EDIT.

## Chart Files
Chart files are now always saved as `.sat` files! Please do not use `.map` anymore.
If you wish to create a chart file in an older format, use the `Export` feature.

> [!NOTE]
> `.map` files can still be imported, but you will be prompted to save it as a new `.sat` file.

> [!ATTENTION]
> _Please_ do not rename `.sat` files to `.map` for some kind of "compatibility".  
> That's not how file extensions work.