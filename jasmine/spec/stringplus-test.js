'use strict';
describe('Extend string', function() {

  var _dummyString;
  beforeAll(function() {
    _dummyString = 'dummy string';
  });

  describe('isVowel prototype', function() {
    it('isVowel function should be defined', function() {
      expect(_dummyString.isVowel()).toBeDefined();
    });

    it('Should return true if string contains a vowel', function() {
      expect('aeiou'.isVowel()).toBe(true);
      expect('priceless'.isVowel()).toBe(true);
      expect('Blc'.isVowel()).toBe(false);
      expect(' '.isVowel()).toBe(false);
    });
  });

  describe('toUpper prototype', function() {
    it('toUpper function should be defined', function() {
      expect(_dummyString.toUpper()).toBeDefined();
    });

    it('Should convert string to uppercase', function() {
      expect('coolade'.toUpper()).toBe('COOLADE');
      expect('pricelEss'.toUpper()).toBe('PRICELESS');
      expect('WINTER IS COMING'.toUpper()).toBe('WINTER IS COMING');
      expect('dance of Dragons'.toUpper()).toBe('DANCE OF DRAGONS');
    });
  });

  describe('toLower prototype', function() {
    it('toLower function should be defined', function() {
      expect(_dummyString.toLower()).toBeDefined();
    });

    it('Should convert string to lower case', function() {
      expect('coolade'.toLower()).toBe('coolade');
      expect('pricelEss'.toLower()).toBe('priceless');
      expect('WINTER IS COMING'.toLower()).toBe('winter is coming');
      expect('dance of Dragons'.toLower()).toBe('dance of dragons');
    });
  });

  describe('ucFirst prototype', function() {
    it('ucFirst function should be defined', function() {
      expect(_dummyString.ucFirst()).toBeDefined();
    });

    it('Should capitalize first letter of a string', function() {
      expect('coolade'.ucFirst()).toBe('Coolade');
      expect('pricelEss'.ucFirst()).toBe('PricelEss');
      expect('WINTER IS COMING'.ucFirst()).toBe('WINTER IS COMING');
      expect('dance of Dragons'.ucFirst()).toBe('Dance of Dragons');
    });
  });

  describe('words prototype', function() {
    it('words function should be defined', function() {
      expect(_dummyString.words()).toBeDefined();
    });

    it('Should return an array of words in a string', function() {
      expect('coolade'.words()).toEqual(['coolade']);
      expect('once upon a time'.words()).toEqual(['once', 'upon', 'a', 'time']);
      expect('really had to win,   with the sword'.words()).toEqual(['really', 'had', 'to', 'win', 'with', 'the', 'sword']);
    });
  });

  describe('wordCount prototype', function() {
    it('wordCount function should be defined', function() {
      expect(_dummyString.wordCount()).toBeDefined();
    });

    it('Should return count of words in a string', function() {
      expect('coolade'.wordCount()).toBe(1);
      expect('save the cheerleader, save the world'.wordCount()).toBe(6);
      expect(''.wordCount()).toBe(0);
    });
  });

  describe('toCurrency prototype', function() {
    it('isCurrency function should be defined', function() {
      expect(_dummyString.toCurrency()).toBeDefined();
    });

    it('Should formats string as currency', function() {
      expect('11111.11'.toCurrency()).toBe('11,111.11');
      expect('1111'.toCurrency()).toBe('1,111.00');
      expect('11000000.00'.toCurrency()).toBe('11,000,000.00');
    });
  });

  describe('fromCurrency prototype', function() {
    it('fromCurrency function should be defined', function() {
      expect(_dummyString.toCurrency()).toBeDefined();
    });

    it('Should format currency as number', function() {
      expect('11111.11'.fromCurrency()).toEqual(11111.11);
      expect('1111'.fromCurrency()).toEqual(1111);
      expect('11000000.00'.fromCurrency()).toEqual(11000000);
    });
  });
});
