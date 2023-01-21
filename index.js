function pow(x, n) {
  if (n == 1) {
    return x;
  } else if (n < 0) {
    return Math.pow(x, n);
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, -2));
