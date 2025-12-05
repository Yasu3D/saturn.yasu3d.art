# Adding System Sounds

## Supported Audio Formats
- `.wav` (recommended)
- `.mp3`
- `.ogg`

## File Structure

Any `.toml` file in `./Data/SystemSound/` will be recognized as a `system sound`.  
All filepaths defined in `*.toml` are relative filepaths from the file.

```toml
guid = "00000000-0000-0000-0000-000000000000"
name = "Sample System Sound"
description = "A Sample System Sound."
author = "author"
audio_login = "login.wav"
audio_cycle_mode = "cycle_mode.wav"
audio_cycle_folder = "cycle_folder.wav"
audio_cycle_song = "cycle_song.wav"
audio_cycle_option = "cycle_option.wav"
audio_select_ok = "select_ok.wav"
audio_select_back = "select_back.wav"
audio_select_denied = "select_denied.wav"
audio_select_decide = "select_decide.wav"
audio_select_preview_song = "select_preview_song.wav"
audio_select_start_song = "select_start_song.wav"
audio_select_start_song_alt = "select_start_song_alt.wav"
audio_favorite_add = "favorite_add.wav"
audio_favorite_remove = "favorite_remove.wav"
audio_result_score_count = "result_score_count.wav"
audio_result_score_finished = "result_score_finished.wav"
audio_result_rate_bad = "result_rate_bad.wav"
audio_result_rate_good = "result_rate_good.wav"
audio_rhythm_game_ready = "rhythm_game_ready.wav"
audio_rhythm_game_fail = "rhythm_game_fail.wav"
audio_rhythm_game_clear = "rhythm_game_clear.wav"
audio_rhythm_game_special_clear = "rhythm_game_special_clear.wav"
audio_timer_warning = "timer_warning.wav"
audio_textbox_appear = "textbox_appear.wav"

```

```file tree
.
└── StreamingAssets/
    └── Data/
        └── SystemSound/
            └── ExampleSystemSound/
                ├── systemsound.toml
                ├── login.wav
                ├── cycle_mode.wav
                ├── cycle_folder.wav
                ├── cycle_song.wav
                ├── cycle_option.wav
                ├── select_ok.wav
                ├── select_back.wav
                ├── select_denied.wav
                ├── select_decide.wav
                ├── select_preview_song.wav
                ├── select_start_song.wav
                ├── select_start_song_alt.wav
                ├── favorite_add.wav
                ├── favorite_remove.wav
                ├── result_score_count.wav
                ├── result_score_finished.wav
                ├── result_rate_bad.wav
                ├── result_rate_good.wav
                ├── rhythm_game_ready.wav
                ├── rhythm_game_fail.wav
                ├── rhythm_game_clear.wav
                ├── rhythm_game_special_clear.wav
                ├── timer_warning.wav
                └── textbox_appear.wav
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
            <td>Name of the system sound.</td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td>String</td>
            <td>Description of the system sound.</td>
        </tr>
        <tr>
            <td><code>author</code></td>
            <td>String</td>
            <td>Author of the system sound.</td>
        </tr>
        <tr>
            <th colspan="2"></th>
            <th>This sound plays when...</th>
        </tr>
        <tr>
            <td><code>audio_login</code></td>
            <td>String</td>
            <td>Starting a new credit.</td>
        </tr>
        <tr>
            <td><code>audio_cycle_mode</code></td>
            <td>String</td>
            <td>Cycling through modes in mode select.</td>
        </tr>
        <tr>
            <td><code>audio_cycle_folder</code></td>
            <td>String</td>
            <td>Moving to a different folder while cycling through songs.</td>
        </tr>
        <tr>
            <td><code>audio_cycle_song</code></td>
            <td>String</td>
            <td>Cycling through folders and songs in song select.</td>
        </tr>
        <tr>
            <td><code>audio_cycle_option</code></td>
            <td>String</td>
            <td>Cycling through menus and values in options/my room.</td>
        </tr>
        <tr>
            <td><code>audio_select_ok</code></td>
            <td>String</td>
            <td>Pressing a confirm/yes button.</td>
        </tr>
        <tr>
            <td><code>audio_select_back</code></td>
            <td>String</td>
            <td>Pressing a back/no button.</td>
        </tr>
        <tr>
            <td><code>audio_select_denied</code></td>
            <td>String</td>
            <td>Pressing a disabled/locked button.</td>
        </tr>
        <tr>
            <td><code>audio_select_decide</code></td>
            <td>String</td>
            <td>Pressing a difficulty plus/minus button.</td>
        </tr>
        <tr>
            <td><code>audio_select_preview_song</code></td>
            <td>String</td>
            <td>Selecting a song and transitioning to the preview screen.</td>
        </tr>
        <tr>
            <td><code>audio_select_start_song</code></td>
            <td>String</td>
            <td>Starting a song and transitioning to the gameplay scene.</td>
        </tr>
        <tr>
            <td><code>audio_select_start_song_alt</code></td>
            <td>String</td>
            <td>Starting a song and transitioning to the gameplay scene after the background video prompt.</td>
        </tr>
        <tr>
            <td><code>audio_favorite_add</code></td>
            <td>String</td>
            <td>Adding a song to favorites.</td>
        </tr>
        <tr>
            <td><code>audio_favorite_remove</code></td>
            <td>String</td>
            <td>Removing a song from favorites.</td>
        </tr>
        <tr>
            <td><code>audio_result_score_count</code></td>
            <td>String</td>
            <td>The score is counting up on the results screen. (loop)</td>
        </tr>
        <tr>
            <td><code>audio_result_score_finished</code></td>
            <td>String</td>
            <td>The score has finished counting up on the results screen.</td>
        </tr>
        <tr>
            <td><code>audio_result_rate_bad</code></td>
            <td>String</td>
            <td>The rate is revealed, and it's a C or worse.</td>
        </tr>
        <tr>
            <td><code>audio_result_rate_good</code></td>
            <td>String</td>
            <td>The rate is revealed, and it's a B or better.</td>
        </tr>
        <tr>
            <td><code>audio_rhythm_game_ready</code></td>
            <td>String</td>
            <td>The "READY?" splash appears before gameplay.</td>
        </tr>
        <tr>
            <td><code>audio_rhythm_game_fail</code></td>
            <td>String</td>
            <td>The "FAILED" splash appears after gameplay.</td>
        </tr>
        <tr>
            <td><code>audio_rhythm_game_clear</code></td>
            <td>String</td>
            <td>The "CLEAR" splash appears after gameplay.</td>
        </tr>
        <tr>
            <td><code>audio_rhythm_game_special_clear</code></td>
            <td>String</td>
            <td>The "CLEAR" splash appears after gameplay, and ALL MARVELOUS was achieved.</td>
        </tr>
        <tr>
            <td><code>audio_timer_warning</code></td>
            <td>String</td>
            <td>The menu timer is about to run out.</td>
        </tr>
        <tr>
            <td><code>audio_textbox_appear</code></td>
            <td>String</td>
            <td>A textbox appears.</td>
        </tr>
    </tbody>
</table>