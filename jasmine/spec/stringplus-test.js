'use strict';
describe('Extend string', function() {

  var dummyString;
  beforeAll(function() {
    dummyString = 'dummy string';
  });

  describe('isVowel prototype', function() {
    it('isVowel function should be defined', function() {
      expect(dummyString.isVowel).toBeDefined();
    });

    it('Should return true if string contains a vowel', function() {
      expect('aeiou'.isVowel()).toBe(true);
      expect('AEIOU'.isVowel()).toBe(true);
      expect('priceless'.isVowel()).toBe(true);
      expect('Blc'.isVowel()).toBe(false);
      expect(' '.isVowel()).toBe(false);
    });
  });

  describe('toUpper prototype', function() {
    it('toUpper function should be defined', function() {
      expect(dummyString.toUpper).toBeDefined();
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
      expect(dummyString.toLower).toBeDefined();
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
      expect(dummyString.ucFirst).toBeDefined();
    });

    it('Should capitalize first letter of a string', function() {
      expect('coolade'.ucFirst()).toBe('Coolade');
      expect('Coolade'.ucFirst()).toBe('Coolade');
      expect('pricelEss'.ucFirst()).toBe('PricelEss');
      expect('WINTER IS COMING'.ucFirst()).toBe('WINTER IS COMING');
      expect('dance of Dragons'.ucFirst()).toBe('Dance of Dragons');
    });
  });

  describe('words prototype', function() {
    it('words function should be defined', function() {
      expect(dummyString.words).toBeDefined();
    });

    it('Should return an array of words in a string', function() {
      expect('coolade'.words()).toEqual(['coolade']);
      expect('once upon a time'.words()).toEqual(['once', 'upon', 'a', 'time']);
      expect('really had to win,   with the sword'.words()).toEqual(['really', 'had', 'to', 'win', 'with', 'the', 'sword']);
      expect(', 7 7 89999 %%$$$ save the ,     world'.words()).toEqual(['save', 'the', 'world']);
      expect(''.words()).toEqual([]);
    });
  });

  describe('wordCount prototype', function() {
    it('wordCount function should be defined', function() {
      expect(dummyString.wordCount).toBeDefined();
    });

    it('Should return count of words in a string', function() {
      expect('coolade'.wordCount()).toBe(1);
      expect('save the cheerleader, save the world'.wordCount()).toBe(6);
      expect(', 7 7 89999 %%$$$ save 0 the , world'.wordCount()).toBe(3);
      expect(''.wordCount()).toBe(0);
    });
  });

  describe('toCurrency prototype', function() {
    it('isCurrency function should be defined', function() {
      expect(dummyString.toCurrency).toBeDefined();
    });

    it('Should formats string as currency', function() {
      expect('11111.11'.toCurrency()).toBe('11,111.11');
      expect('11111.1167869888'.toCurrency()).toBe('11,111.12');
      expect('1111'.toCurrency()).toBe('1,111.00');
      expect('11000000.00'.toCurrency()).toBe('11,000,000.00');
    });
  });

  describe('fromCurrency prototype', function() {
    it('fromCurrency function should be defined', function() {
      expect(dummyString.fromCurrency).toBeDefined();
    });

    it('Should format currency as number', function() {
      expect('11,111.11'.fromCurrency()).toEqual(11111.11);
      expect('1,111'.fromCurrency()).toEqual(1111);
      expect('11,000,000.00'.fromCurrency()).toEqual(11000000);
    });
  });
});
