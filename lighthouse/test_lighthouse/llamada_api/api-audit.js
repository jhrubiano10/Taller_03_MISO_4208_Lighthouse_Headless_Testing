'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Check out call api',
            failureDescription: 'Check out call api time',
            helpText: 'In this test, we find if the call api take in less three seconds',
            requiredArtifacts: ['TimeCallAPI']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeCallAPI;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;