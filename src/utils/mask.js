const Mask = (propValue, propMask, propMaskPatterns) => {
  const value = propValue || '';
  const mask = propMask || '';
  const maskPatterns = propMaskPatterns || {};

  let maskedValue = '';
  const valueParts = value.split('');
  const maskParts = mask.split('');

  while (valueParts.length > 0) {
    let unmaskedChar = valueParts.shift();

    while (unmaskedChar !== null) {
      const maskChar = maskParts.shift();

      if (maskChar !== undefined) {
        const maskPattern = maskPatterns[maskChar.toUpperCase()];

        if (maskPattern !== undefined) {
          let check = false;

          if (typeof maskPattern === 'function') {
            check = maskPattern(unmaskedChar);
          } else if (maskPattern instanceof RegExp) {
            check = maskPattern.test(unmaskedChar);
          }

          if (check) {
            maskedValue += unmaskedChar;
          } else {
            maskParts.unshift(maskChar);
          }

          unmaskedChar = null;
        } else {
          maskedValue += maskChar;
        }
      } else {
        unmaskedChar = null;
      }
    }
  }

  return maskedValue;
};

export default (pattern, string) => Mask(string, pattern, {
  A: /[a-zA-Z]/, a: /\D/, 9: /[0-9]/, S: /\D/, W: /\w/,
});
