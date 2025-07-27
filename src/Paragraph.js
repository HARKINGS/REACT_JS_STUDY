import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <p className={context.theme}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  );
}

export default Paragraph;
