import { render, screen } from "@testing-library/react";
import Content from "../components/details/Content";
import { mockDetailData } from "../utils/constants";

// TDD
test("Ülke verilerini ekrana basar", () => {
  // bileşeni renderla
  render(<Content details={mockDetailData} />);

  // mockDetailData nesnesindeki flag dışındaki bütün key-value'lar ekrana basılmıştır
  for (const key in mockDetailData) {
    if (key === "flag") continue;

    screen.getByText(key);
    screen.getByText(mockDetailData[key].toLocaleString());
  }
});
