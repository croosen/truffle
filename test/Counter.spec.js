var Counter = artifacts.require('Counter')

contract('Counter', () => {

    it('should return 0', done => {
        Counter.deployed()
        .then(instance => instance.getNumber.call())
        .then(result => {
            assert.equal(result, 0);
            done();
        });
    });

    it('should add 1 to storedNumber', function() {
        Counter.deployed()
        .then(function(instance) {
            return instance.addNumber();
        })
        .then((instance) => instance.getNumber)
        .then(result => {
            assert.equal(result, 1);
            done();
        });
    });

    it('should deduct 1 from storedNumber', function() {
        Counter.deployed()
        .then(function(instance) {
            return instance.deductNumber();
        })
        .then((instance) => instance.getNumber)
        .then(result => {
            assert.equal(result, -1);
            done();
        });
    });
});
