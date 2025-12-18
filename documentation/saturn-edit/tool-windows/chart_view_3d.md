# Chart View (3D)
The Chart View (3D) Tool Window is a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor that allows you to select, edit and insert all kinds of chart objects.  
It offers a game-accurate Chart preview, and its layout is reminiscent of the 3D Viewport in Blender.

<img src="media/chart_view_3d.png" alt="The header of the Chart View (3D) Tool Window.">

## Header Region
The header region lists available operations and customization options. 

<img src="media/chart_view_3d_header.png" alt="The header of the Chart View (3D) Tool Window.">

#### Mode
The mode selector allows you to switch the editor mode.  
By default, the mode can be toggled with <kbd>Tab</kbd>

> [!IMPORTANT]
> Edit Mode is only available when a Hold Note, Stop Effect Event, or Reverse Effect Event is selected.  
> In all other cases, the option will be greyed out, and using the shortcut won't do anything.

##### Object Mode
In object mode, all chart objects are treated as single objects. This even includes chart objects made up of multiple sub-objects, like Hold Notes, Stop Effect Events, and Reverse Effect Events.

Moving and resizing in object mode will affect all sub-objects at once, as if you had the entire group of sub-objects selected.

##### Edit Mode
In edit mode, you can edit the sub-objects of a Hold Note, Stop Effect Event, or Reverse Effect Event.

#### Insert
Contains operations that add new objects.

#### Transform
Contains operations that move, resize, or mirror objects.

#### Convert
Contains operations that convert objects.

#### Settings
Contains commonly changed render settings for quick access.

#### Note Speed
Changes the speed at which Notes, Events, and Bookmarks approach the judgement line.

#### Background Dim
Changes the brightness of the background.

## Toolbar
<img src="media/chart_view_3d_toolbar.png" alt="The toolbar of the Chart View (3D) Tool Window.">

#### Edit Type
Changes all selected objects to the currently specified Note Type and Bonus Type. 

#### Edit Shape 
Resizes all selected objects to the currently specified Position and Size.

> [!NOTE]
> Events, Bookmarks, and Measure Line Notes are not positionable and can therefore not be resized.

#### Delete Selection
Deletes all selected objects.

#### Insert Note
Adds a Note with the currently specified Types, Position and Size to the Chart at the current timestamp.

## Viewport
The viewport displays a simulation of the Chart, including a basic game UI.

<img src="media/chart_view_3d_viewport.png" alt="The viewport of the Chart View (3D) Tool Window.">

#### Difficulty
Displays the difficulty of the Chart, as it would be displayed in-game.

#### Level
Displays the level of the Chart, as it would be displayed in-game.
If the decimal part of the level is greater than or equal to 0.7, a `+` is added to the level text.

#### Title
Displays the title of the Chart, as it would be displayed in-game.

#### Cursor
Displays a preview of what a Note would look like if it was inserted with the current Types, Position, and Size.


## Mouse Shortcuts
You can use mouse shortcuts for various actions in the viewport:

#### Navigating Time
<kbd>WheelUp</kbd> will move forward in time.  
<kbd>WheelDown</kbd> will move backward in time.

#### Changing Cursor Shape
Clicking with <kbd>RMB</kbd> will set the Position of the Cursor Note to the lane you're hovering over.  
Dragging while <kbd>RMB</kbd> stays held down will change the Size of the Cursor Note until you let go.

> [!TIP]
> If you regularly re-size the Cursor Note by accident when you just intended to re-position it, please increase the threshold for when a "Click 'n' Drag" action is recognized.
> 
> You can find the option here:
> ```
> Settings | General | Other | Click 'n' Drag Threshold (Pixels)
> ```

#### Selecting Objects
Clicking with <kbd>LMB</kbd> will select objects.  
Dragging while <kbd>LMB</kbd> stays held down will box select objects.

Modifier keys affect the selection behaviour, similar to a file explorer:  
- <kbd>LMB</kbd> will clear the previous selection, then select a single object.  
- <kbd>Shift</kbd>-<kbd>LMB</kbd> (Range-Select) will clear the previous selection, then select all objects between the last selected object and the newly selected object.  
- <kbd>Ctrl</kbd>-<kbd>LMB</kbd> (Multi-Select) will select objects, without clearing the previous selection.
- <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>LMB</kbd> (Range Multi-Select) will select all objects between the last selected object and the newly selected object, without clearing the previous selection.

> [!NOTE]
> For technical reasons, changing the selection counts as an operation that can be undone/redone. This behaviour cannot be disabled.