# Audio Setup
All editor audio setup is done in the Volume Mixer. You can find it on the right side of the top menu bar by clicking <img src="media/volume.png" width="20">.

## Editor Volume
The volume of all audio channels in the editor can be individually adjusted with the corresponding slider.  
Channel volume ranges from `-60dB` to `+12dB`:
- `0dB` is the default value
- `-60dB` will mute the channel completely.
- `+1dB` to `+12dB` will amplify the volume.

The slider labeled **Master** acts as a volume multiplier for all audio channels.     
The slider labeled **Hitsounds** acts as a volume multiplier for every hitsound audio channel.  

> [!NOTE]
> This volume adjustment _only affects the editor_, not your chart or audio file!  
> If your hitsounds or audio file are too quiet in SATURN, you must adjust their volume in an audio editor of your choice.

## Editor Hitsounds
SATURN EDIT currently does not have built-in hitsounds. You must source hitsound audio yourself, and select it manually in the Volume Mixer.

To pick a file for a specific hitsound, press <img src="media/pickfile.png" width="20">. Your selection is automatically loaded into the editor and saved in your config file. There is no need to restart the editor for changes to take effect.

## Chart Audio
See [Chart Setup](setup/chart.md)