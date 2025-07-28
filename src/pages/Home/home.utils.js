export const generateBoxDataWithMines = (mineCount) => {
  const newBoxData = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    mine: false,
    opacity: 1,
    disable: false,
    isGold: false,
    roundEnd: false,
  }));

  const mineIndices = new Set();
  while (mineIndices.size < mineCount) {
    mineIndices.add(Math.floor(Math.random() * 25));
  }

  mineIndices.forEach((index) => {
    newBoxData[index].mine = true;
  });

  return newBoxData;
};
