var expect = chai.expect;

describe('Functions', function(){
    describe('playCard', function(){
        it('should return a Card', function(){
            var x = playCard();
            expect(x).to.equal(Card);
        });
    });
});
