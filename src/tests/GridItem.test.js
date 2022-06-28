import { render, screen } from "@testing-library/react";
import GridItem from "../components/GridItem";
import LanguageIcon from "@mui/icons-material/Language";

describe("Components test", () => {
  test("render GridItem", () => {
    const description = "anderson.castillo@pucp.edu.pe";
    const icon = <LanguageIcon />;
    render(<GridItem name={description} icon={icon} />);
    expect(screen.getByText(description)).toHaveTextContent(
      "anderson.castillo@pucp.edu.pe"
    );
  });
});
