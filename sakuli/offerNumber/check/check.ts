const path = require('path');

(async () => {
    const testCase = new TestCase("Check offer");
    const env = new Environment()
    try {
        await _navigateTo(path.join("file://", path.resolve(), "sakuli/offerNumber/check/offer.png"))
        await env.type("+", Key.CTRL)
        await env.type("+", Key.CTRL)
        await env.type(Key.PAGE_DOWN)

        const offerNumberRegion = await _getRegionByText("offer number").grow(10);
        const offerNumber = await _getTextFromRegion(offerNumberRegion);

        const expectedOfferNumber = /42-XBC-09453/;
        await _assert(Promise.resolve(!!offerNumber.match(expectedOfferNumber)),
            `Found ${offerNumber} instead of ${expectedOfferNumber}`);
    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})();