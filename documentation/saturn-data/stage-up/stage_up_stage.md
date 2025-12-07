# Stage Up Stage
A set of three songs to play in stage-up mode.

Inherits <a href="/documentation/saturn-data/index.html#/items/content_item.md">Content Item</a>.

## Properties

### IconPath
The local filepath of the icon image file to display next to the stage song list, relative to the file that defined this stage up stage.

### Song1
The first [StageUpSong](stage-up/stage_up_song.md) to play.

### Song2
The second [StageUpSong](stage-up/stage_up_song.md) to play.

### Song3
The third [StageUpSong](stage-up/stage_up_song.md) to play.

### ErrorThreshold
The threshold where anything below or equal to the specified `JudgementType` will count as an error and subtract health.

### Health
The number of mistakes a player is allowed to make before failing the stage.

### HealthRecovery
The amount of health to recover between songs.

### RainbowClearThreshold
The threshold where a clear counts as a rainbow clear.
> This value will always be 100% of the `Health` value.

### GoldClearThreshold
The threshold where a clear counts as a gold clear.
> This value will always be 80% of the `Health` value.

### SilverClearThreshold
The threshold where a clear counts as a silver clear.
> This value will always be 50% of the `Health` value.