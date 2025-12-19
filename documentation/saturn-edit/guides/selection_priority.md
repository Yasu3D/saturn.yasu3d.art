# Selection Priority in SATURN EDIT
To make selections as intuitive and easy as possible, SATURN EDIT has a "selection priority" system for overlapping objects.
Knowing this selection priority will help you select the objects you intend to, and work around the few limitations it still has.

## Criteria 1: Is the Object Selected?
The list of all potential objects the mouse is hovering over is split in two:
- Already selected objects
- Not yet selected objects

...where not yet selected objects take priority over already selected objects.  
This means unselected objects will *always* have priority over already selected objects.

Each of these lists is then sorted individually by the rest of the criteria.

## Criteria 2: Is the Object a Lane Toggle Note?
Lane Toggle Notes have a lower priority than all other objects.

## Criteria 3: Is the Object a Sync Note or Measure Line Note?
Sync Notes and Measure Line Notes have the next-highest priority, above Lane Toggle Notes.

## Criteria 4: Is the Object an Event or a Bookmark?
Events and Bookmarks have the next-highest priority, above previously filtered objects.

## Criteria 5: Is the Object a Hold Note?
Hold Notes have the next-highest priority, above previously filtered objects.

### Criteria 5B: Hold Note Length
Hold Notes that are shorter take priority over longer Hold Notes.

## Criteria 6: Is the Object Positionable?
Positionable objects have the highest priority, above previously filtered objects.

### Criteria 6B: Note Size
Smaller positionable notes take priority over larger notes.