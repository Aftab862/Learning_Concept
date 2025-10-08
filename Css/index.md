/* 1. What’s the difference between relative, absolute, fixed, and sticky positioning? */

static: default positioning,elements follow the normal document flow. 

relative: offsets/change the element position from its normal position without affecting other elements.

absolute: positions element relative to the nearest positioned ancestor. 

fixed elements stay in the same place even during scrolling.

sticky: acts like static until you scroll past a threshold,then it sticks. and it requires a top,bottom, left, or right value to work. its not always fixed but only when you scroll and it reaches that sticky point.


2. What is the difference between display: none and visibility: hidden?

display: none removes the element from layout flow.

visibility: hidden keeps the space but hides the content. Like a ghost that refuses to leave your HTML.



4. What is CSS specificity?

It’s how browsers decide which rule wins.
Order of power:

!important > inline styles > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements.
Memorize this or suffer debugging nightmares.


7. What’s the difference between inline, inline-block, and block?

block: takes full width, new line.

inline: sits beside others, no height/width control.

inline-block: inline behavior with block control.


| Property                       | Inline                           | Inline-block                             |
| ------------------------------ | -------------------------------- | ---------------------------------------- |
| Width/Height work              | ❌ No                             | ✅ Yes                                    |
| Top/Bottom Padding visible     | ✅ Yes (but not layout-affecting) | ✅ Yes                                    |
| Top/Bottom Margin moves layout | ❌ No                             | ✅ Yes                                    |
| Acts like text                 | ✅ Yes                            | ✅ Yes (but behaves more like a mini box) |



9. What’s the difference between Flexbox and Grid?

Flexbox: one-dimensional (row or column).

Grid: two-dimensional (rows and columns).
Flexbox is great for alignment; Grid is for layout orchestration.


11. What are pseudo-elements and pseudo-classes?

Pseudo-classes (:hover, :focus, :nth-child) target states.

Pseudo-elements (::before, ::after) create virtual elements.
Because sometimes two real elements just aren’t enough.


15. What is reflow and repaint?

Reflow: recalculating layout.

Repaint: updating pixels after layout changes.
Too many reflows = performance death.

Reflow: You move the walls of your house → everything must be measured again.
Repaint: You just change the wallpaper → no measuring, just paint.