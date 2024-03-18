function solution(spell, dic) {
  for (i of dic) {
    if (i.split("").sort().join("") === spell.sort().join("")) return 1;
  }
  return 2;
}
