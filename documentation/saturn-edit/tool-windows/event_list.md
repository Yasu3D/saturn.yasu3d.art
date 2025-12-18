# Event List
The Event List Tool Window lets you create and edit Global Events in a list view, as an alternative to editing them in the [3D Chart View](tool-windows/chart_view_3d.md).

> [!TIP]
> Global Events only include Tempo Change Events, Metre Change Events, and Tutorial Marker Events.  
> If you want to edit Layer Events in a list view, you can do so in the [Layer List](tool-windows/layer_list.md).

<img src="media/event_list.png">

## Events

### Delete Selection
Deletes the currently selected Global Events.

> [!WARNING]
> If a Chart is missing a Tempo or Metre Change Event at Timestamp 0, rendering and gameplay cannot function properly.
> 
> _You should always have a Tempo and Metre Change Event at Timestamp 0!_

### Add New...
Adds a new Global Event of the chosen Type at the current Timestamp.

> [!NOTE]
> If an Event of the same Type exists on the current Timestamp, its value will be edited instead of a duplicate Event being added.

### List View
Items in the list display their Type, Timestamp, and any additional data.  
The Timestamp and additional data is editable.

#### Tempo Change Events
Tempo Change Events display their tempo as additional data.

#### Metre Change Events
Metre Change Events display their metre as additional data.

#### Tutorial Marker Events
Tutorial Marker Events display their key as additional data.