const hasUniqueCharacters = (req, res) => {
  // TODO valdiar longitud y que sea obligatorio
  const { text } = req.body;

  const textToAray = text.split('');
  const textSet = new Set(textToAray);
  const textCharUniques = [...textSet];
  const testPassed = textCharUniques.length == textToAray.length;

  res.json({
    message: testPassed
  });
};

const getPrimeFactors = (req, res) => {
  // TODO valdiar longitud para este tipo de dato y que sea entero
  let { number } = req.body;

  const primeFactors = [];
  let i = 3;

  while (isPair(number)) {
    primeFactors.push(2);
    number = number / 2;
  }

  while (i <= Math.floor(Math.sqrt(number))) {
    while (number % i == 0) {
      number = Math.floor(number / i);
      primeFactors.push(i);
    }
    i = i + 2;
  }

  primeFactors.push(number);

  res.json({
    message: primeFactors
  });
};

const isPair = (number) => {
  return number % 2 == 0;
};

export default {
  hasUniqueCharacters,
  getPrimeFactors
};
