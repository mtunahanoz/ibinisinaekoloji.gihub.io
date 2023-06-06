import React from 'react';

const Animals = {
  aslan: 100,
  fil: 200,
  zebra: 300,
  güvercin: 400,
  timsah: 500,
  maymun: 600
};

const calculatePopulation = (footprint) => {
  const population = {};
  for (const [animal, count] of Object.entries(Animals)) {
    let reductionFactor = 1 - (footprint / 5);
    let reducedCount = Math.max(0, Math.floor(count * reductionFactor));

    if (footprint >= 2.2 && footprint <= 3.2) {
      reducedCount = Math.max(1, Math.floor(reducedCount * Math.random() * (0.8 - 0.5) + 0.5));
    } else if (footprint > 3.2 && footprint <= 3.5) {
      reducedCount = Math.max(1, Math.floor(reducedCount * Math.random() * (0.5 - 0.3) + 0.3));
    } else if (footprint > 3.5 && footprint <= 5.0) {
      reducedCount = Math.max(0, Math.floor(reducedCount * Math.random() * (0.3 - 0.1) + 0.1));
    }

    population[animal] = reducedCount;
  }
  return population;
};

const EkolojikAyakIziTesti = ({ footprint }) => {
  const population = calculatePopulation(footprint);

  return (
    <div>
      <h2>Ekolojik Ayak İzi Sonuçları:</h2>
      <ul>
        {Object.entries(population).map(([animal, count]) => (
          <li key={animal}>{`${animal}: ${count}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default EkolojikAyakIziTesti;
