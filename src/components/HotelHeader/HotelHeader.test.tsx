import { render } from "@testing-library/react";
import HotelHeader from "./HotelHeader";

const mockHotel = {
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
};

describe("HotelHeader", () => {
  it("hotel name is rendered with correct value", async () => {
    const { getByText } = render(<HotelHeader hotel={mockHotel} />);
    getByText("hotelName");
  });

  it("hotel address1 is rendered with correct value", async () => {
    const { getByText } = render(<HotelHeader hotel={mockHotel} />);
    getByText("hotelAddress");
  });

  it("hotel address2 is rendered with correct value", async () => {
    const { getByText } = render(<HotelHeader hotel={mockHotel} />);
    getByText("hotelAddress2");
  });
});
