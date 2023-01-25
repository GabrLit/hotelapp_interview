import { render } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders background image", () => {
    const { getByRole } = render(<HeroSection />);
    const img = getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
  });
});
