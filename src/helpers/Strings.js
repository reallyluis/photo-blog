
const generateHash = (str) => {
  let hash = 0;
  let i;

  for (i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash | 0;
  }

  const hashStr = hash < 0 ?
    'n' + Math.abs(hash) :
    'p' + hash;

  return hashStr;
};

export {
  generateHash,
};
