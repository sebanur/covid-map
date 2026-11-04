import { render, screen } from "@testing-library/react";
import Item from "./../components/home/Item";

test("Gönderilen propları doğru şekilde kullanır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-orange-500" label="Toplam Test" value="451M" />);

  // gerekli elementleri çağır
  const icon = screen.getByRole("icon");
  const h2 = screen.getByRole("heading");
  screen.getByText("Toplam Test");

  // icon'un classlarında color propuyla gelen değer var mı
  expect(icon).toHaveClass("text-orange-500");

  // başlık içerisinde value propuyla gelen değer var mı
  expect(h2).toHaveTextContent("451M");
});
