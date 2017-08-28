'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeCallAPI extends Gatherer {
    afterPass(options) {
        const driver = options.driver;
        return driver.evaluateAsync('window.loadApiTime')
            .then(loadApiTime => {
                console.log("Y ADENTRO ES: ", loadApiTime);
                if (!loadApiTime) {

                    throw new Error('Unable to find call API metrics in page');
                }
                return loadApiTime;
            });
    }
}

module.exports = TimeCallAPI;