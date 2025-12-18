# Proofreader
The Proofreader Tool Window lets you check your Chart for common problems.

<img src="media/proofreader.png">

## Problem List
Displays all problems found in the Chart.

### Timestamp
The Timestamp of the problematic object.  
Timestamps here are formatted as `MEASURE'TICK`.

### Type
The Type of the problematic object.

### Position
The Position of the problematic object.  
If Type is not positionable, `-` is displayed instead.

### Size
The Size of the problematic object.  
If Type is not positionable, `-` is displayed instead.

### Problem
The reason why the object is problematic.  
Problems are explained further below.

## Run
Runs the proofreader with the selected criteria.

## Criteria
The proofreader has customizable options for which problems it should flag, and which problems it should ignore.

<img src="media/proofreader_criteria.png">

### Strict Note Size (MER)
Will flag a Note if its Size does not conform to the MER standard.

| Note Type                          | Bonus Type | Valid Size |
|------------------------------------|------------|------------|
| Touch Note                         | Normal     | 4 - 60     |
| Touch Note                         | Bonus      | 5 - 60     |
| Touch Note                         | R          | 6 - 60     |
| Snap Forward Note                  | Normal     | 6 - 60     |
| Snap Forward Note                  | Bonus      | 6 - 60     |
| Snap Forward Note                  | R          | 8 - 60     |
| Snap Backward Note                 | Normal     | 6 - 60     |
| Snap Backward Note                 | Bonus      | 6 - 60     |
| Snap Backward Note                 | R          | 8 - 60     |
| Slide Clockwise Note               | Normal     | 5 - 60     |
| Slide Clockwise Note               | Bonus      | 7 - 60     |
| Slide Clockwise Note               | R          | 10 - 60    |
| Slide Counterclockwise Note        | Normal     | 5 - 60     |
| Slide Counterclockwise Note        | Bonus      | 7 - 60     |
| Slide Counterclockwise Note        | R          | 10 - 60    |
| Chain Note                         | Normal     | 4 - 60     |
| Chain Note                         | Bonus      | 4 - 60     |
| Chain Note                         | R          | 10 - 60    |
| Hold Note (First Hold Point Note)  | Normal     | 2 - 60     |
| Hold Note (First Hold Point Note)  | Bonus      | 2 - 60     |
| Hold Note (First Hold Point Note)  | R          | 8 - 60     |
| Hold Note (Other Hold Point Notes) | -          | 1 - 60     |
| Lane Show Note                     | -          | 1 - 60     |
| Lane Hide Note                     | -          | 1 - 60     |
| Sync Note                          | -          | 1 - 60     |

### Strict Note Size (SAT)
Will flag a Note if its Size does not conform to the SAT standard.

| Note Type       | Valid Size |
|-----------------|------------|
| Sync Note       | 1 - 60     |
| Hold Point Note | 1 - 60     |
| Other           | 3 - 60     |

### Strict Bonus Type Mer
Flags Notes with the Bonus Type "Bonus" that are not Touch, Slide Clockwise, or Slide Counterclockwise Notes.

### Overlapping Notes (Strict)
Flags any Note partially or completely overlapping with another Note, except if it's a Hold Note.

### Overlapping Notes (Lenient)
Flags any Note partially or completely overlapping with another Note, except if it's a Hold Note or Chain Note.

### Ambiguous Hold Note Definition
Flags any Hold Note with two Hold Points whose centers are exactly opposite of each other.  
It is ambiguous which direction this Hold Note should move in, as Hold Notes normally take the shortest path, but both directions have an equal travel distance. 

This means different implementations of the render and judgement engines may make the Hold Note move in a different direction than intended, resulting in severe gameplay issues.

### Effects On Lowers
Flags any Speed Change Events, Visibility Change Events, Stop Effect Events, and Reverse Effect Events on Charts with a Difficulty below EXPERT.

Lower difficulties should avoid special effects of any kind.

### Invalid Effects (MER)
Chart engines using the MER standard are very prone to the music and Chart drifting apart due to lag. 
Some combinations of effects are also simply unsupported.

> [!IMPORTANT]
> These rules **do not** affect SATURN. It can support nearly anything you throw at it.
> 
> I dare you to break it :]

#### Speed Change Before Stop Effect
Flags any Speed Change Events before a Stop Effect Event.

#### Speed Change Too Close
Flags any Speed Change Events less than 1/16th Measure apart.

#### Speed Change Too Early
Flags any Speed Change Events in the first 1/8th Measure of the Chart.

#### Speed Change Near Zero
Flags any Speed Change Events with a near-zero value Speed (except zero).

#### MultipleReverses
Flags any Reverse Effect Event after the first one in a Chart.

### Invalid Lane Toggles (MER)
Chart engines using the MER standard do not use the same deterministic Lane Toggle logic as SATURN and SATURN EDIT. 
Lane Toggle Notes with sweeps that "cross paths" will make lanes get "stuck" in a state they should not be in, and generally cause inconsistent behaviour.

> [!IMPORTANT]
> Since SATURN and SATURN EDIT share the same deterministic Lane Toggle logic, behaviour is consistent between the two and unaffected by lag.
> 
> In short: If an effect "works" in SATURN EDIT, it will work in SATURN.

### Notes During Reverse
Flags any playable Notes between the first and second Sub-Event of a Reverse Effect Event, 
since all unaffected Notes on the same Layer are made invisible during a Reverse Effect.

### Objects After Chart End
Flags any objects after the Chart End Timestamp.