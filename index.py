# Su Ayak İzi Anket Sistemi

# Soruları ve şıkları tanımlayın
sorular = [
    "1. Su tüketimi konusunda nasıl bir yaşam sürdürüyorsunuz?",
    "2. Enerji kaynakları olarak hangi seçenekleri kullanıyorsunuz?",
    "3. Alışveriş yaparken hangi ürünleri tercih ediyorsunuz?",
    "4. Atıklarınızı nasıl yönetiyorsunuz?",
    "5. Yiyecek tercihleriniz nelerdir?",
    "6. Ulaşımda nasıl bir yol izliyorsunuz?",
    "7. Ev ve ofis enerji verimliliği için neler yapıyorsunuz?",
    "8. Giysi alışverişinde hangi ürünleri tercih ediyorsunuz?",
    "9. Su tasarrufu için neler yapıyorsunuz?",
    "10. Geri dönüşüm yapmak için neler yapıyorsunuz?"
]

siklar = [
    ["A) Su tüketimime dikkat etmiyorum.", "B) Su tüketimimi azaltmaya çalışıyorum.", "C) Su tüketimimi bilinçli bir şekilde azaltıyorum.", "D) Su tasarrufu sağlamak için çeşitli önlemler alıyorum."],
    ["A) Fosil yakıtlar (kömür, petrol, doğalgaz)", "B) Yenilenebilir enerji kaynakları (güneş, rüzgar, hidroelektrik)", "C) Hem fosil yakıtlar hem de yenilenebilir enerji kaynakları", "D) Enerji tasarrufu sağlayan teknolojiler"],
    ["A) Paketli ve hazır gıdalar", "B) Organik ürünler", "C) Yerel üretim ve çiftçi pazarlarından alışveriş", "D) Kendi yetiştirdiğim veya doğadan topladığım ürünler"],
    ["A) Hiç ayrıştırmıyorum", "B) Sadece bazı atıkları ayrıştırıyorum", "C) Evde geri dönüşüm yaparak atıklarımı yönetiyorum", "D) Geri dönüşüm merkezlerine atıklarımı teslim ediyorum"],
    ["A) Et ağırlıklı besleniyorum", "B) Kısmen vejetaryen besleniyorum", "C) Vejetaryen besleniyorum", "D) Vegan besleniyorum"],
    ["A) Bireysel araç kullanıyorum", "B) Toplu taşıma kullanıyorum", "C) Bisiklet veya yürüyüş gibi çevre dostu ulaşım araçlarını tercih ediyorum", "D) Araç paylaşımı veya elektrikli araç kullanıyorum"],
    ["A) Hiçbir önlem almıyorum", "B) Enerji verimli aydınlatma ve cihazlar kullanıyorum", "C) İzolasyon ve enerji verimliliği önlemleri alıyorum", "D) Yenilenebilir enerji kaynaklarına yatırım yapıyorum"],
    ["A) Markalı ve hızlı moda ürünleri", "B) Sürdürülebilir markaların ürünleri", "C) İkinci el veya vintage ürünler", "D) Kendi giysilerimi dikerek veya tamir ederek kullanıyorum"],
    ["A) Su tasarrufu yapmıyorum", "B) Duş süresini kısaltıyorum", "C) Düşük debili musluk ve tuvalet kullanıyorum", "D) Yağmurlama sistemleri ve geri dönüşüm suyu kullanıyorum"],
    ["A) Hiç geri dönüşüm yapmıyorum", "B) Kağıt, plastik, cam gibi malzemeleri ayrıştırarak geri dönüşüm yapıyorum", "C) Geri dönüştürülebilen malzemeleri geri dönüşüm kutularına atıyorum", "D) Geri dönüşüm bilincine sahip olarak atıklarımı yönetiyorum"]
]

# Kullanıcıdan cevapları alın
cevaplar = []
for i in range(len(sorular)):
    print(sorular[i])
    for j in range(len(siklar[i])):
        print(siklar[i][j])
    cevap = input("Cevabınızı girin (A, B, C, D): ")
    cevaplar.append(cevap.upper())

# Su ayak izi hesaplama
su_ayak_izi = 0
for cevap in cevaplar:
    if cevap == "A":
        su_ayak_izi += 1
    elif cevap == "B":
        su_ayak_izi += 2
    elif cevap == "C":
        su_ayak_izi += 3
    elif cevap == "D":
        su_ayak_izi += 4

# Sonucu ekrana yazdırma
print("Su Ayak İziniz:", su_ayak_izi)
