var HelloWorld = artifacts.require('HelloWorld')

contract('HelloWorld', () => {
    contract('hi()', () => {
        it('should return "Hello World!"', done => {
            HelloWorld.deployed()
            .then(instance => instance.hi.call())
            .then(result => {
                assert.equal(result, 'Hello World!');
                done();
            });
        });
    });
});
