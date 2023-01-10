const exp = function (num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * exp(num, degree - 1);
  }
};

console.log(exp(10, 24));
