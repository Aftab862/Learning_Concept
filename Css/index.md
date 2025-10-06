/* 1. What’s the difference between relative, absolute, fixed, and sticky positioning? */

static: default positioning,elements follow the normal document flow. 

relative: offsets/change the element position from its normal position without affecting other elements.

absolute: positions element relative to the nearest positioned ancestor. 

fixed elements stay in the same place even during scrolling.

sticky: acts like static until you scroll past a threshold,then it sticks. and it requires a top,bottom, left, or right value to work. its not always fixed but only when you scroll and it reaches that sticky point.