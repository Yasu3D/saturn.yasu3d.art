# Navigator
A character that accompanies the user throughout gameplay.  
Inherits <a href="/documentation/saturn-data/index.html#/items/content_item.md">Cosmetic Item</a>.

## Properties

### Artist
The creator of the navigator artwork.

### Voice
The voice actor of the navigator voice lines.

### Width
The width of the in-game UI element in pixels.

### Height
The height of the in-game UI element in pixels.

### OffsetX
The horizontal offset to apply to the in-game UI element.

> [!NOTE]
> Negative values move UI element left.  
> Positive values move UI element right.

### OffsetY
The vertical offset to apply to the in-game UI element.

> [!NOTE]
> Negative values move UI element down.  
> Positive values move UI element up.

### FaceMarginTop
The distance from the top edge of the main UI element to the top edge of the face UI element.
    
### FaceMarginBottom
The distance from the bottom edge of the main UI element to the bottom edge of the face UI element.
    
### FaceMarginLeft
The distance from the left edge of the main UI element to the left edge of the face UI element.
    
### FaceMarginRight
The distance from the right edge of the main UI element to the right edge of the face UI element.

### BlinkAnimationInterval
The time in milliseconds between blinks.
    
### BlinkAnimationDuration
The duration of a blink in milliseconds.

### TexturePaths
The local filepaths of the navigator artwork images, relative to the file that defined this cosmetic.  
`TexturePaths` may contain the following keys:

| Key              | Explanation                                                                          |
|------------------|--------------------------------------------------------------------------------------|
| icon             | The icon to display when selecting a navigator.                                      |
| body             | The base image of the navigator to display at all times.                             |
| face_neutral_a   | Neutral expression (eyes open)                                                       |
| face_neutral_b   | Neutral expression (eyes half-closed)                                                |
| face_neutral_c   | Neutral expression (eyes closed)                                                     |
| face_amazed_a    | Amazed expression (eyes open)                                                        |
| face_amazed_b    | Amazed expression (eyes half-closed)                                                 |
| face_amazed_c    | Amazed expression (eyes closed)                                                      |
| face_troubled_a  | Troubled expression (eyes open)                                                      |
| face_troubled_b  | Troubled expression (eyes half-closed)                                               |
| face_troubled_c  | Troubled expression (eyes closed)                                                    |
| face_surprised_a | Surprised expression (eyes open)                                                     |
| face_surprised_b | Surprised expression (eyes half-closed)                                              |
| face_surprised_c | Surprised expression (eyes closed)                                                   |
| face_startled_a  | Startled expression (eyes open)                                                      |
| face_startled_b  | Startled expression (eyes half-closed)                                               |
| face_startled_c  | Startled expression (eyes closed)                                                    |
| face_angry_a     | Angry expression (eyes open)                                                         |
| face_angry_b     | Angry expression (eyes half-closed)                                                  |
| face_angry_c     | Angry expression (eyes closed)                                                       |
| face_laughing_a  | Laughing expression (eyes open)                                                      |
| face_laughing_b  | Laughing expression (eyes half-closed)                                               |
| face_laughing_c  | Laughing expression (eyes closed)                                                    |
| face_smiling_a   | Smiling expression (eyes open)                                                       |
| face_smiling_b   | Smiling expression (eyes half-closed)                                                |
| face_smiling_c   | Smiling expression (eyes closed)                                                     |
| face_grinning_a  | Grinning expression (eyes open)                                                      |
| face_grinning_b  | Grinning expression (eyes half-closed)                                               |
| face_grinning_c  | Grinning expression (eyes closed)                                                    |
| see_you_a        | The default image to display on the "see you" screen.                                |
| see_you_b        | The image to display on the "see you" screen when rating has increased.              |
| see_you_c        | The image to display on the "see you" screen when a stage up stage has been cleared. |

### DialogueLanguages
The dictionary of textbox dialogues and accompanying voice lines, grouped by language.  
Keys are locale codes, values are Navigator Dialogue Languages.

## NavigatorDialogueLanguage
`NavigatorDialogueLanguages` represent a language that a navigator can speak.
They contain a collection of `NavigatorDialogueVariantCollections`.

## NavigatorDialogueVariantCollection
`NavigatorDialogueVariantCollections` represent a type of dialogue a navigator can say.  
They contain a collection of `NavigatorDialogues`, which are chosen at random when the dialogue variant is displayed.

## NavigatorDialogue
`NavigatorDialogues` represent a specific variation of a dialogue that a navigator can say.