# Adding System Music

## Supported Audio Formats
- `.wav` (recommended)
- `.mp3`
- `.ogg`

## File Structure

Any `.toml` file in `./Data/SystemMusic/` will be recognized as `system music`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample System Music"
description = "Sample System Music."
author = "author"
audio_attract = "attract.wav"
audio_select = "select.wav"
audio_result = "result.wav"
audio_see_you = "see_you.wav"
audio_stage_up_select = "stage_up_select.wav"
audio_stage_up_challenger = "stage_up_challenger.wav"

```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── SystemMusic/
            └── <SYSTEM MUSIC>/
                ├── systemmusic.toml
                ├── attract.wav
                ├── select.wav
                ├── result.wav
                ├── seeyou.wav
                ├── stage_up_select.wav
                └── stage_up_challenger.wav
```

## Properties

<table>
    <tbody>
        <tr>
            <th>Property</th>
            <th>Value Type</th>
            <th>Use Case</th>
        </tr>
        <tr>
            <td><code>guid</code></td>
            <td>String</td>
            <td>A **G**lobally **U**nique **Id**entifier (GUID) to identify each cosmetic.</td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td>String</td>
            <td>Name of the system music.</td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td>String</td>
            <td>Description of the system music.</td>
        </tr>
        <tr>
            <td><code>author</code></td>
            <td>String</td>
            <td>Author of the system music.</td>
        </tr>
        <tr>
            <th colspan="2"></th>
            <th>This song plays when...</th>
        </tr>
        <tr>
            <td><code>audio_attract</code></td>
            <td>String</td>
            <td>In the Attract scene.</td>
        </tr>
        <tr>
            <td><code>audio_select</code></td>
            <td>String</td>
            <td>In the Mode Select or Folder Select scene.</td>
        </tr>
        <tr>
            <td><code>audio_result</code></td>
            <td>String</td>
            <td>Viewing gameplay results.</td>
        </tr>
        <tr>
            <td><code>audio_see_you</code></td>
            <td>String</td>
            <td>Exiting a credit.</td>
        </tr>
        <tr>
            <td><code>audio_stage_up_select</code></td>
            <td>String</td>
            <td>Selecting a Stage Up stage.</td>
        </tr>
        <tr>
            <td><code>audio_stage_up_challenger</code></td>
            <td>String</td>
            <td>Previewing a hidden song in Stage Up.</td>
        </tr>
    </tbody>
</table>