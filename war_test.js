var expect = chai.expect;

describe('Functions', function(){
    describe('playCard', function(){
        it('should return undefined since we have not dealt cards yet', function(){
            let player = new Player();
            let x = player.playCard();
            expect(x).to.equal(undefined);
        });
    });
});
