function aliensymbol(a) {
  const symbol = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  let result = 0;
  if (/^[ABZLCDR]+$/g.test(a)) {
    for (let i = 0; i < a.length; i++) {
      const currentSymbol = a[i];
      const value = symbol[currentSymbol];

      if (i < a.length - 1) {
        const nextSymbol = a[i + 1];
        const nextValue = symbol[nextSymbol];

        if (value < nextValue) {
          result += nextValue - value;
          i++;
        } else {
          result += value;
        }
      } else {
        result += value;
      }
    }

    return result;
  } else {
    console.error("Error: Alien numerals");
    return null;
  }
}

console.log(aliensymbol("LBAAA"));
console.log(aliensymbol("RCRZCAB"));
console.log(aliensymbol("AB"));
console.log(aliensymbol("AB123"));
