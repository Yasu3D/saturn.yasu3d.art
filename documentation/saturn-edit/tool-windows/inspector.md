# Inspector
The Inspector Tool Window lets you view and edit the data of all types of objects.  
People familiar with Unity or ArcCreate should feel right at home with this Tool Window.

> [!NOTE]
> By default, the Inspector is empty.
> You must select one or more existing objects in the Chart that you wish to view or inspect the data of.
> 
> Different categories of data will show up based on the objects you have selected.

> [!NOTE]
> If any selected object has a different value for a property than the other objects, `-` will be displayed.  
> If they all share the same value, that value will be displayed.
> 
> In either case the property can be edited to apply the same value to all selected objects.

> [!NOTE]
> If a property is edited, the change will only be applied to relevant objects. 
> Changing the "Tempo" property while there's a Touch Note selected as well will not magically give the Touch Note a tempo value.

<img src="media/inspector_empty.png">
<img src="media/inspector.png">

## General
The general category contains properties shared between object of all types.

### Type
Shows the Type of all selected objects.

> [!TIP]
> This property allows you to change *any* object into *any* other Type of object. This even includes Hold Notes, Stop Effect Events and Reverse Effect Events, as long as there are enough objects selected to create a valid new object from.

### Timestamp
Shows the Timestamp of all selected objects as Measures and Ticks.

### Ticks
Shows the Timestamp of all selected objects as *just* Ticks. This value is always `Measure * 1920 + Tick`, and internally referred to as the "FullTick" of an object.

It's the same idea as saying "190 minutes" instead of "3 hours and 10 minutes".

## Layer
The layer category contains properties shared between objects contained in Layers.

### Layer
Shows the Layer all selected layerable objects are on.

## Shape
The shape category contains properties shared between objects that are positionable.

### Position
Shows the Position of all selected positionable objects.

### Size
Shows the Size of all selected positionable objects.

## Judgement
The judgement category contains properties shared between objects that are judged during gameplay.

### Bonus Type
Shows the Bonus Type of all selected judgeable objects.

### Judgement Type
Shows the Judgement Type of all selected judgeable objects.

## Lane Toggle
The Lane Toggle category contains properties specific to Lane Toggle Notes.

### Sweep Direction
Shows the Sweep Direction of all selected Lane Toggle Notes.

## Tempo Change
The Tempo Change category contains properties specific to Tempo Change Events.

### Tempo
Shows the tempo of all selected Tempo Change Events.

## Metre Change
The Metre Change category contains properties specific to Metre Change Events.

### Metre
Shows the metre of all selected Metre Change Events.

## Speed Change
The Speed Change category contains properties specific to Speed Change Events.

### Speed
Shows the speed of all selected Speed Change Events.

## Visibility Change
The Visibility Change category contains properties specific to Visibility Change Events.

### Visibility
Shows the visibility of all selected Visibility Change Events.

## Tutorial Marker
The Tutorial Marker category contains properties specific to Tutorial Marker Events.

### Key
Shows the key of all selected Tutorial Marker Events.

## Bookmark
The Bookmark category contains properties specific to Bookmarks.

### Color
Shows the color of all selected Bookmarks in Hexadecimal, and as a color picker.

### Message
Shows the message of all selected Bookmarks.