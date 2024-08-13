export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  return [...set].filter((item) => item && item.startsWith(startString)).join(' ');
}
