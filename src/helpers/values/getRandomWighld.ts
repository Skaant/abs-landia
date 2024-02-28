export function getRandomWighld() {
  const random = Math.floor(Math.random() * 10);
  return random < 1
    ? 0
    : random < 3
    ? 1
    : random < 6
    ? 2
    : random < 8
    ? 3
    : random < 9
    ? 4
    : 5;
}
