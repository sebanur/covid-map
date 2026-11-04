import { render, screen } from "@testing-library/react";
import Head from "../components/details/Head";
import { mockDetailData } from "./../utils/constants";
import { BrowserRouter } from "react-router-dom";

test("head bileşeni ülke bilgilerini doğru şekilde renderlar", () => {
  // bileşeni renderla
  // bileşen içerisinde redux/router-dom vb. sağlayıcıya ihtiyaç duyan elementler kullanıyorsa o sağlaycı ile sarmalanmalı
  render(
    <BrowserRouter>
      <Head details={mockDetailData} />
    </BrowserRouter>,
  );

  // ülke ismi başlıkta yazıyor mu kontrol et
  screen.getByRole("heading", { name: mockDetailData.name });

  // image elementini ekrandan al
  const image = screen.getByAltText(mockDetailData.flag.alt);

  // fotoğrafın kaynağı doğru mu
  expect(image).toHaveAttribute("src", mockDetailData.flag.svg);
});
