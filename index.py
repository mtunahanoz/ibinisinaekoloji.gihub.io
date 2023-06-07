import random

def azalt_hayvan_nufusu(hayvanlar, kha_degeri):
    if kha_degeri >= 1 and kha_degeri < 1.5:
        azalma_orani = random.uniform(0, 0.04)
    elif kha_degeri >= 1.5 and kha_degeri < 2:
        azalma_orani = random.uniform(0.07, 0.11)
    elif kha_degeri >= 2 and kha_degeri < 2.5:
        azalma_orani = random.uniform(0.13, 0.19)
    elif kha_degeri >= 2.5 and kha_degeri < 3:
        azalma_orani = random.uniform(0.31, 0.40)
    elif kha_degeri >= 3 and kha_degeri < 3.5:
        azalma_orani = random.uniform(0.50, 0.60)
    elif kha_degeri >= 3.5 and kha_degeri < 4:
        azalma_orani = random.uniform(0.68, 0.74)
    elif kha_degeri >= 4 and kha_degeri < 4.5:
        azalma_orani = random.uniform(0.80, 0.86)
    elif kha_degeri >= 4.5 and kha_degeri <= 5:
         azalma_orani = random.uniform(0.91, 1)
    else:
        raise ValueError("Geçersiz kHa değeri. 1 ile 5 arasında olmalıdır.")

    for hayvan, nufus in hayvanlar.items():
        nufus_azalma = int(nufus * azalma_orani)
        hayvanlar[hayvan] = max(0, nufus - nufus_azalma)

    return hayvanlar, azalma_orani

# Adım 1: kHa değerini kullanıcıdan al
kha_degeri = float(input("kHa değerini girin (1-5 arası): "))

# Adım 2: Hayvanları ve nüfuslarını tanımla
hayvanlar = {
    "aslan": 100,
    "fil": 200,
    "zebra": 150,
    "kaplan": 80,
    "giraffe": 120,
    "sırtlan": 90
}

# Adım 3 ve 4: Hayvan nüfuslarını azalt
hayvanlar, azalma_orani = azalt_hayvan_nufusu(hayvanlar, kha_degeri)

# Adım 5: Sonuçları yazdır
print("Kullanılan kHa değeri:", kha_degeri)
print("Nüfus Azalma Oranı:", azalma_orani)
print("Hayvan Nüfusları:")
for hayvan, nufus in hayvanlar.items():
    print(hayvan, ":", nufus)
