export function getRandomWighld(wetness: number = 5) {
  const random = Math.floor(Math.random() * 10);
  return Math.min(
    random < 1
      ? 0
      : random < 3
      ? 1
      : random < 6
      ? 2
      : random < 8
      ? 3
      : random < 9
      ? 4
      : 5,
    wetness + 2
  );
}
