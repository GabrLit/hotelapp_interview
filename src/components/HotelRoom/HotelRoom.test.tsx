import { render } from "@testing-library/react";
import HotelRoom from "./HotelRoom";
import { vi } from "vitest";

const mockRoom = {
  id: "2",
  name: "room",
  occupancy: {
    maxAdults: 2,
    maxChildren: 4,
  },
  shortDescription: "shortDescription",
  longDescription: "longDescription",
  images: [
    {
      url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
    },
  ],
};

describe("HotelRoom", () => {
  //to not throw media query error
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });
  it("renders room name", () => {
    const { getByText } = render(<HotelRoom room={mockRoom} />);
    getByText("room");
  });

  it("renders room maxAdults field", () => {
    const { getByText } = render(<HotelRoom room={mockRoom} />);
    getByText("Adults: 2");
  });

  it("renders room maxChildren field", () => {
    const { getByText } = render(<HotelRoom room={mockRoom} />);
    getByText("Children: 4");
  });

  it("renders longDescription", () => {
    const { getByText } = render(<HotelRoom room={mockRoom} />);
    getByText("longDescription");
  });
});
