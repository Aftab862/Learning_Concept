// ===============================
// Controlled vs Uncontrolled Components in React
// ===============================

// 🔹 Controlled Component
// A component is "controlled" when React state (or props) fully manages its
// behavior, data, or visibility rather than letting the DOM handle it internally.
//
// Example: Input field controlled by React state

import { useState } from "react";

function ControlledInput() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                value={name}                 // React controls the value
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name}</p>           // UI updates automatically with state
        </div>
    );
}

// 🔹 Uncontrolled Component
// A component is "uncontrolled" when the DOM or a third-party library manages
// its data or behavior, and React doesn't have direct control over it.
//
// Example: Input field managed by the DOM itself

import { useRef } from "react";

function UncontrolledInput() {
    const inputRef = useRef();

    const handleSubmit = () => {
        console.log("Submitted value:", inputRef.current.value);
    };

    return (
        <div>
            <input type="text" defaultValue="Aafi" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

// 🔹 Key Takeaways:
// - If React state/props manages the component → Controlled
// - If React has no control and DOM/3rd party manages it → Uncontrolled
// - Controlled examples: Inputs, Modals, Tabs, Dropdowns, Accordions
// - Uncontrolled examples: File inputs, 3rd party widgets, simple quick forms
