describe('First service', function () {
    var firstServie;

    beforeEach(module('app'));
    beforeEach(inject(function (_firstService_) {
        firstServie = _firstService_;
    }));

    it('should be registered within `app` module', function () {
        expect(firstServie).to.exist;
    });
});