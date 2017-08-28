'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'api-gatherer'
        ]
    }],

    audits: [
        'api-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'api-audit', weight: 1}
            ]
        }
    }
};