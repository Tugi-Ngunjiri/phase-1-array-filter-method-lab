// Code your solution here
const sinon = require( 'sinon' )

describe('index.js'), function (){}
  describe('findMatching')()
    it('returns all drivers that match the passed in name', function () {
            

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
      expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
    });

    it('returns matching drivers if case does not match but letters do', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);
    });

    it(returns ,an ,empty ,array,  there ,is ,no ,match)
