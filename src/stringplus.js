'use strict';
String.prototype.isVowel = function() {
  return /[aeiou]/.test(this);
};

String.prototype.toUpper = function() {
  return this.replace(/[a-z]/g, (x) => String.fromCharCode(x.charCodeAt(0) - 32));
};

String.prototype.toLower = function() {
  return this.replace(/[A-Z]/g, (x) => String.fromCharCode(x.charCodeAt(0) + 32));
};

String.prototype.ucFirst = function() {
  return this.replace(/[a-z]/i, (x) => x.toUpper());
};

String.prototype.isQuestion = function() {
  return /^.+\?$/.test(this);
};

String.prototype.words = function() {
  var _match = this.match(/[a-z]+/gi);
  if (_match === null | _match === undefined) {
    return [];
  } else {
    return _match;
  }
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  return parseFloat(this).toFixed(2).toString().replace(/\d(?=(\d{3})+[\.\0]+)/g, (x) => x + ',');
};

String.prototype.fromCurrency = function() {
  return parseFloat(this.replace(/[,]/g, ''), false);
};
