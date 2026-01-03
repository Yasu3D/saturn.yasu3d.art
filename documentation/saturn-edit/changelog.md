# Changelog
To see what's new compared to different editors, refer to the [Transition Guide](guides/transition_guide.md).

## 1.0.0.1
### Adjustments
- `ja-JP` and `zh-CN` locales are now disabled until they have been properly localized.
  (They were originally enabled, but only displayed `-` for all their strings, effectively making them useless.)
- To prevent confusion, a default Layer is now added when a Chart with no Layers is loaded from a file.
- Crash Logs are now saved as individual files in `AppData/Local/SaturnEdit/CrashLogs/` (or the Linux equivalent).
- `Preview Begin` and `Preview End` Chart Properties no longer update each other to always be "correct". Instead, their correctness can now be checked with the `Proofreader` Tool Window, or by attempting to play the chart preview. If the defined timestamps are invalid, a warning will appear.

### Fixes
- Fixed `Flip Direction` operation not flipping the direction of Snap Notes.
- Fixed the Cosmetics Editor Save Prompt preventing the application from closing.
- Fixed the "hovered over object" not being updated when the operation history changes.
- Fixed the icon for the `Jump to Next Selection` operation pointing in the wrong direction.
- Improved stability of the editor. SATURN EDIT uses a lot of multi-threading, which can make errors and crashes inconsistent.  
  **If you encounter a crash that is reproducible or produced a log file, please create a GitHub Issue or contact me directly!**

### Additions
- Added file pickers for Hitsounds to `Settings | Audio`
- Added `Mute` buttons to the Volume Mixer.
- Added **Session Logs**. All *handled* exceptions encountered in one session will now be written to a file. These logs can also be submitted in crash reports for further information.
- Added `Select Nearest`, `Select Next` and `Select Previous` operations.
- Added support for Mouse Wheel input to *all* Sliders in the application.

## 1.0.0.0
Initial release.