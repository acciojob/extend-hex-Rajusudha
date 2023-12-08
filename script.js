function extendHex(shortHex) {
  // Remove the '#' symbol if present and convert to lowercase
  shortHex = shortHex.replace(/^#/, '').toLowerCase();

  // Ensure the input is a valid short hex code
  if (!/^[0-9a-f]{3}$/i.test(shortHex)) {
    console.error('Invalid short hex code');
    return null;
  }

  // Extend the short hex code to the full hex code
  const fullHex = shortHex
    .split('')
    .map(component => component.repeat(2))
    .join('');

  return `#${fullHex}`;
}

// Examples
console.log(extendHex("#abc"));   // expected output: "#aabbcc"
console.log(extendHex("abc"));    // expected output: "#aabbcc"
console.log(extendHex("#AbC"));   // expected output: "#AABBCC"
console.log(extendHex("#f09"));   // expected output: "#ff0099"

