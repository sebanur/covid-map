import { render, screen, waitFor } from "@testing-library/react";
import Detail from "../pages/detail";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { restApi, statsApi } from "../utils/api";
import { mockDetailData, mockRestData, mockStatsData } from "../utils/constants";

// Ağ isteklerini mock'luyoruz
jest.mock("../utils/api", () => ({
  restApi: { get: jest.fn() },
  statsApi: { get: jest.fn() },
}));

describe("Detail Bileşeni", () => {
  // useParams'ın "country" parametresini doğal yoldan alabilmesi için
  // bileşeni sanal bir router (MemoryRouter) içine saran yardımcı fonksiyon:
  const renderWithRouter = (countryName = "Turkey") => {
    return render(
      <MemoryRouter initialEntries={[`/country/${countryName}`]}>
        <Routes>
          <Route path="/country/:country" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  test("başlangıçta api isteği sürerken yüklenme durumunda olmalı", () => {
    // api isteklerinin döndürüceği yanıtı belirle
    restApi.get.mockReturnValue(new Promise(() => {}));
    statsApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    renderWithRouter();

    // loader'lar ekranda mı
    screen.getByTestId("head-loader");
    screen.getByTestId("content-loader");
  });

  test("API'dan veriler başarıyla gelince ekranda ülke bilgilerini göstermeli", async () => {
    // api isteği atılınca veriler geliyor olucak şekilde ayarla
    restApi.get.mockResolvedValue(mockRestData);
    statsApi.get.mockResolvedValue(mockStatsData);

    // bileşeni renderla
    renderWithRouter();

    // api isteğinı atan fonksiyon çalıştır mı
    expect(restApi.get).toHaveBeenCalledWith(`/countries/v5?q=Turkey&limit=1`);

    // veriler ekrana basılmıştır
    await waitFor(() => {
      screen.getAllByText(mockDetailData.name);
      screen.getByText(mockDetailData.capital);
      screen.getByText(mockDetailData.language);
    });
  });

  test("API çağrılarından biri hata verirse ekranda hata bilgileri gösterilmeli", async () => {
    // api isteği atılınca hata döndürsün şeklinde ayarla
    const errorMessage = "Sunucu yanıt vermiyor";
    restApi.get.mockRejectedValue(new Error(errorMessage));
    statsApi.get.mockResolvedValue({ data: { data: [] } });

    // bileşeni renderla
    renderWithRouter();

    // hata mesajı ekrana geliyor mu?
    await waitFor(() => screen.getByText(errorMessage));
  });
});
