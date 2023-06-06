import random

# Hayvanların başlangıç nüfusu
animals = {
    'aslan': 100,
    'fil': 200,
    'zebra': 300,
    'güvercin': 400,
    'timsah': 500,
    'maymun': 600
}

def calculate_population(footprint):
    # Ayak izine göre hayvan nüfusunu hesapla
    population = {}
    for animal, count in animals.items():
        # Ayak izi puanına göre azaltma faktörü hesapla
        reduction_factor = 1 - (footprint / 5)
        # Hayvan nüfusunu azalt ve minimum sınırı uygula
        reduced_count = max(0, int(count * reduction_factor))
        # Ayak izi puanına göre ekstra azaltma yap
        if 2.2 <= footprint < 3.2:
            reduced_count = max(1, int(reduced_count * random.uniform(0.5, 0.8)))
        elif 3.2 <= footprint < 3.3:
            reduced_count = max(1, int(reduced_count * random.uniform(0.8, 1.0)))
        elif 3.3 <= footprint <= 5.0:
            reduced_count = max(0, int(reduced_count * random.uniform(0.1, 0.5)))
        population[animal] = reduced_count
    return population

def run_test():
    # Testi çalıştır
    footprint = float(input("Ekolojik ayak izinizi girin (1.0 - 5.0): "))
    population = calculate_population(footprint)
    print("Sonuçlar:")
    for animal, count in population.items():
        print(f"{animal}: {count}")

# Testi çalıştır
run_test()

