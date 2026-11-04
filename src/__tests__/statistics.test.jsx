import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../components/home/Statistics";
import { mockStatsData } from "./../utils/constants";

/*
 ! Mock
 * Yazdığımız testler kesinlikle api istekleri gibi dış etkenlerden tamamen bağımsız olmalı yani api'dan gelicek olan yanıt testin sonucunu etkilememeli

 * "Api'dan yanıt geliyor mu" testi değil, "api'dan bu yanıt gelince arayüz güncelleniyor mu" testi yazarız

 * API isteğini atan fonksiyonu "mock'layıp" bu sayede api'ın döndüreceği cevabı bu test içinde biz belirleyeceğiz
*/

// 1) mock'lamak istediğimiz değişkeni import ederiz
import { statsApi } from "../utils/api";

// 2) api isteğini atan get fonksiyonu yerine sahte test fonksiyonu koy
jest.mock("../utils/api", () => ({ statsApi: { get: jest.fn() } }));

describe("Statistics Bileşeni", () => {
  // her testten sonra mock fonksiyonu sıfırla
  afterEach(() => jest.clearAllMocks());

  test("render olduğunda api isteği atılır ve loader gelir", () => {
    // mockladığımız fonksiyon çağrılınca promise return etsin
    statsApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // api isteğini atan fonksiyon çalıştı
    expect(statsApi.get).toHaveBeenCalled();

    // ekranda loader var mı?
    screen.getByTestId("loader");
  });

  test("api'dan hata gelirse ekrana hata mesajı gelir", async () => {
    // mockladığımız fonksiyon çağrılınca error return etsin
    statsApi.get.mockRejectedValue(new Error("İnternetin çok yavaş"));

    // bileşeni renderla
    render(<Statistics />);

    // ekrana error bileşeni geldi mi
    await waitFor(() => screen.getByText(/bir sorun oluştu/i));
  });

  test("api'dan veri gelirse ekrana istatistikler gelir", async () => {
    // mockladığımız fonksiyon çağrılınca istatistikleri return etsin
    statsApi.get.mockResolvedValue(mockStatsData);

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(statsApi.get).toHaveBeenCalled());

    // ekrana veriler geldi mi
    screen.getByText("Toplam Vaka");
    screen.getByText("Aktif Vaka");
    screen.getByText("Toplam Vefat");
  });
});
