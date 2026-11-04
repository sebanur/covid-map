import banner from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative">
      <div className="container py-10 pb-16 md:pt-25 md:pb-30 grid md:grid-cols-2 gap-10 relative z-10">
        {/* içerik */}
        <div className="flex flex-col gap-6 md:gap-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">COVID-19 CANLI TAKİP</h1>

          <p className="text-gray-200 text-lg leading-relaxed">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu koronavirüsü 2'nin neden
            olduğu bulaşıcı bir hastalıktır. İlk vaka ile Çin'in Hubei eyaletinin Wuhan şehrinde
            Kasım 2019 tarihinde karşılaşılmıştır.
          </p>

          <div className="flex gap-5">
            <button className="hero-button">Nasıl Korunulur?</button>
            <button className="hero-button">Doktor Bul</button>
          </div>
        </div>

        {/* resim */}
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt="dünya mikroplardan korkuyor"
            className="w-75 md:h-62.5 drop-shadow-2xl animate-slide-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
