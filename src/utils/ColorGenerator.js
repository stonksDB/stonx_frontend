//Credits: https://stackoverflow.com/a/21682946
export default function generateColor(string) {
  return intToHSL(getHashCode(string));
}

function getHashCode(string) {
  let hash = 0;
  if (string.length === 0) return hash;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function intToHSL(number) {
  let shortened = number % 360;
  return "hsl(" + shortened + ",100%,30%)";
}