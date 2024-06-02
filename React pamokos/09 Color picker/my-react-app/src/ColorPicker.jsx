import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#000000");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Pick Color</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select color</label>
            <input type="color" value={color} onChange={handleColorChange} />

        </div>

    );
}
export default ColorPicker