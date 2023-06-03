import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Home } from "../app/page.tsx";

describe("Home", () => {
  it("renderizando componentes", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
