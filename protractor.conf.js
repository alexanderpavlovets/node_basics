module.exports.config = {
    specs: ['specs/*.js'],
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1
        },
    baseUrl: 'https://angularjs.org/',
    onPrepare: function () {
        beforeAll(function () {
            
        })
        beforeEach(() => {
             
        })
        afterEach(()=>{

        })
        afterAll(() => {
             
        })
    }
}