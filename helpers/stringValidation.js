const stringValidation = (minStringLength, maxStringLength) => {
  //Minimum length will always be 2
  //String must start and end with [a-zA-Z0-9_]
  return new RegExp(
    `^[\\wéüáíóúñ¿¡ÁÉÍÓÚÜÑ<][<>éüáíóúñ¿¡ÁÉÍÓÚÜÑ\\w\n\.\+\(\)\*\? ,!-?]{${
      minStringLength - 2 > 0 ? minStringLength - 2 : 0
    },${maxStringLength - 2}}[\\wéüáíóúñÁÉÍÓÚÜÑ>]$`
  );
};

module.exports = { stringValidation };
