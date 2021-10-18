export function abc(arr = []) {
  if (!arr.length) return [];

  const t = {};

  arr.forEach((v) => {
    const keys = Object.keys(v);
    for (let i = 0; i < keys.length; i++) {
      const item = v[keys[i]];
      if (!t[item]) t[item] = 1;
      else t[item]++;
    }
  });

  const maxCnt = Math.max(...Object.values(t));
  return Object.keys(t).filter((v) => t[v] === maxCnt);
}
