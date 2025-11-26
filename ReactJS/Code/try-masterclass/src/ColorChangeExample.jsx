import { useRef } from "react";

function ColorChangeExample() {
  const colors = ["#a47864", "#009933", "#0066ff"];
  const textRef = useRef(null); // Create a ref

  function changeColor() {
    colors.forEach((element, index) => {
      setTimeout(() => {
        textRef.current.style.color = element;
      }, 1000 * (index + 1)); // Multiply by index + 1 to stagger delays
    });
  }

  return (
    <div>
      <h2 ref={textRef}>This text will change color</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChangeExample;
