# Note Sound
A set of note sound effects, also known as "Hitsounds".  
Inherits <a href="/documentation/saturn-data/index.html#/items/content_item.md">Cosmetic Item</a>.

## Properties

### Artist
The creator of the Note Sound.

### oldLoopStartTime
The time in milliseconds to loop back to, once `HoldLoopEndTime` is reached.
    
### oldLoopEndTime
The time in milliseconds at which to loop back to `HoldLoopEndTime`.
    
### eHoldLoopStartTime
The time in milliseconds to loop back to, once `ReHoldLoopEndTime` is reached.
    
### eHoldLoopEndTime
The time in milliseconds at which to loop back to `ReHoldLoopEndTime`.

### AudioTouchMarvelousPath
The local filepath of the "touch marvelous" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `MARVELOUS` / `GREAT` judgement on the following note types:
- `TOUCH`
- `HOLD`
    
### AudioTouchGoodPath
The local filepath of the "touch good" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `GOOD` judgement on the following note types:
- `TOUCH`
- `HOLD`
    
### AudioSlideMarvelousPath
The local filepath of the "slide marvelous" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `MARVELOUS` / `GREAT` judgement on the following note types:
- `SLIDE CLOCKWISE`
- `SLIDE COUNTERCLOCKWISE`
    
### AudioSlideGoodPath
The local filepath of the "slide good" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `GOOD` judgement on the following note types:
- `SLIDE CLOCKWISE`
- `SLIDE COUNTERCLOCKWISE`
    
### AudioSnapMarvelousPath
The local filepath of the "snap marvelous" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `MARVELOUS` / `GREAT` judgement on the following note types:
- `SNAP FORWARD`
- `SNAP BACKWARD`
    
### AudioSnapGoodPath
The local filepath of the "snap good" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `GOOD` judgement on the following note types:
- `SNAP FORWARD`
- `SNAP BACKWARD`
    
### AudioHoldPath
The local filepath of the "hold" audio file, relative to the file that defined the cosmetic.

This sound plays when holding down a `HOLD` note for the first time.
    
### AudioReHoldPath
The local filepath of the "re-hold" audio file, relative to the file that defined the cosmetic.

This sound plays when holding down a `HOLD` note after it has previously been let go.
    
### AudioChainPath
The local filepath of the "chain" audio file, relative to the file that defined the cosmetic.

This sound plays when achieving a `MARVELOUS` judgement on a `CHAIN` note.
    
### AudioBonusPath
The local filepath of the "bonus" audio file, relative to the file that defined the cosmetic.

This sound plays when a note with the bonus type `BONUS` is hit.
    
### AudioRPath
The local filepath of the "r" audio file, relative to the file that defined the cosmetic.

This sound plays when a note with the bonus type `R` is hit.