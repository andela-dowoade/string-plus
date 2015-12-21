'use strict';
String.prototype.isVowel = function() {
  return /[aeiou]/i.test(this);
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
  return this.match(/[a-z]+/gi) || [];
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  return parseFloat(this).toFixed(2).replace(/\d(?=(\d{3})+[\.\0]+)/g, (x) => x + ',');
};

String.prototype.fromCurrency = function() {
  return parseFloat(this.replace(/[,]/g, ''), false);
};
