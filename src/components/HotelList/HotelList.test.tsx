import { render } from "@testing-library/react";
import HotelList from "./HotelList";

const mockDataToDisplay = [
  {
    id: "1",
    name: "hotelName",
    address1: "hotelAddress",
    address2: "hotelAddress2",
    rooms: [],
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
      },
    ],
    starRating: "2",
  },
];

describe("HotelList", () => {
  it("renders no results message when data is loaded but empty", () => {
    const { getByText } = render(
      <HotelList dataToDisplay={[]} isLoaded={true} />
    );
    getByText("No results, try to change the filters");
  });

  it("renders circular progress when data is not yet loaded", () => {
    const { getByRole } = render(
      <HotelList dataToDisplay={[]} isLoaded={false} />
    );
    getByRole("progressbar");
  });

  it("renders data when data is loaded and not empty", () => {
    const { getByText } = render(
      <HotelList dataToDisplay={mockDataToDisplay} isLoaded={true} />
    );
    getByText("hotelName");
  });
});
