# Layer List
The Event List Tool Window lets you create and edit Layer Events in a list view, as an alternative to editing them in the [3D Chart View](tool-windows/chart_view_3d.md).

> [!TIP]
> Layer Events only include Speed Change Events, Visibility Change Events, Stop Effect Events, and Reverse Effect Events.  
> If you want to edit Global Events in a list view, you can do so in the [Event List](tool-windows/event_list.md).

<img src="media/layer_list.png">

## Layers
A list of all Layers in the Chart.

The topmost Layer will always be recognized as the Main Layer.
All Measure and Beat Line Notes are generated on the Main Layer.

### Move Item Up
Moves the currently selected Layer up in the list.

### Move Item Down
Moves the currently selected Layer down in the list.

### Delete Selection
Deletes the currently selected Layer, and all its contents.

### Add New
Adds and selects a new empty Layer.

### List View
Layers display their visibility and name. Both are editable.

> [!NOTE]
> Layer visibility is a temporary, editor-only option to hide unnecessary information.  
> If you wish to change the visibility of a Layer in gameplay, use a Visibility Change Event.

## Layer Events
A list of all Events on the currently selected Layer.

### Delete Selection
Deletes the currently selected Layer Events.

### Add New...
Adds a new Layer Event of the chosen Type at the current Timestamp.

> [!NOTE]
> If an Event of the same Type exists on the current Timestamp, its value will be edited instead of a duplicate Event being added.

### List View
Items in the list display their Type, Timestamp, and any additional data.  
The Timestamp and additional data is editable.

#### Speed Change Events
Speed Change Events display their speed as additional data.

#### Visibility Change Events
Visibility Change Events display their visibility as additional data.

#### Stop Effect Events
Stop Effect Events do not have additional data, but instead have **two** Timestamps; one for each Sub-Event.

> [!TIP]
> All Stop Effect Sub-Events are sorted by their Timestamp after a change is made. You can edit Sub-Events to be out of order, and they will automatically correct themselves.

#### Reverse Effect Events
Reverse Effect Events do not have additional data, but instead have **three** Timestamps; one for each Sub-Event.

> [!TIP]
> All Reverse Effect Sub-Events are sorted by their Timestamp after a change is made. You can edit Sub-Events to be out of order, and they will automatically correct themselves.