/* eslint-disable react/prop-types */
import { Color } from "./Color";

export function Colori({ colors }) {
  return (
    <ul>
      
      {colors.map((color) => (
        <Color key={color.id} nome={color.name} />
      ))}
    </ul>
  );
}
