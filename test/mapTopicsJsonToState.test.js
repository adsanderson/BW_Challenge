'use strict';

import test from 'tape';
import mapTopicsJsonToState from '../src/actions/mapTopicsJsonToState';

let mockTopics = {
  "topics": [{
    "id": "1751295897__Berlin",
    "label": "Berlin",
    "volume": 165,
    "type": "topic",
    "sentiment": {
      "negative": 3,
      "neutral": 133,
      "positive": 29
    },
    "sentimentScore": 65,
    "burst": 13,
    "days": [{
      "date": "2014-06-06T00:00:00.000+0000",
      "volume": 22
    }, {
      "date": "2014-06-04T00:00:00.000+0000",
      "volume": 43
    }, {
      "date": "2014-06-09T00:00:00.000+0000",
      "volume": 0
    }, {
      "date": "2014-06-07T00:00:00.000+0000",
      "volume": 12
    }, {
      "date": "2014-06-08T00:00:00.000+0000",
      "volume": 11
    }, {
      "date": "2014-06-03T00:00:00.000+0000",
      "volume": 39
    }, {
      "date": "2014-06-05T00:00:00.000+0000",
      "volume": 38
    }
    ],
    "pageType": {
      "blog": 17,
      "facebook": 56,
      "forum": 22,
      "general": 5,
      "image": 0,
      "news": 26,
      "review": 1,
      "twitter": 35,
      "video": 3
    },
    "queries": [
    {
      "id": 1751295897,
      "name": "Berghain",
      "volume": 165
    }
    ]
  },
  {
    "id": "1751295897__DJ",
    "label": "DJ",
    "volume": 48,
    "type": "topic",
    "sentiment": {
      "neutral": 46,
      "positive": 2
    },
    "sentimentScore": 54,
    "burst": 29,
    "days": [
    {
      "date": "2014-06-06T00:00:00.000+0000",
      "volume": 4
    },
    {
      "date": "2014-06-04T00:00:00.000+0000",
      "volume": 10
    },
    {
      "date": "2014-06-09T00:00:00.000+0000",
      "volume": 0
    },
    {
      "date": "2014-06-07T00:00:00.000+0000",
      "volume": 11
    },
    {
      "date": "2014-06-08T00:00:00.000+0000",
      "volume": 3
    },
    {
      "date": "2014-06-03T00:00:00.000+0000",
      "volume": 12
    },
    {
      "date": "2014-06-05T00:00:00.000+0000",
      "volume": 8
    }
    ],
    "pageType": {
      "blog": 4,
      "facebook": 13,
      "forum": 8,
      "general": 1,
      "image": 0,
      "news": 7,
      "review": 1,
      "twitter": 13,
      "video": 1
    },
    "queries": [
    {
      "id": 1751295897,
      "name": "Berghain",
      "volume": 48
    }
    ]
  },
  {
    "id": "1751295897__Ostgut Ton",
    "label": "Ostgut Ton",
    "volume": 24,
    "type": "topic",
    "sentiment": {
      "neutral": 22,
      "positive": 2
    },
    "sentimentScore": 58,
    "burst": 25,
    "days": [
    {
      "date": "2014-06-06T00:00:00.000+0000",
      "volume": 4
    },
    {
      "date": "2014-06-04T00:00:00.000+0000",
      "volume": 3
    },
    {
      "date": "2014-06-07T00:00:00.000+0000",
      "volume": 4
    },
    {
      "date": "2014-06-09T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-08T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-03T00:00:00.000+0000",
      "volume": 5
    },
    {
      "date": "2014-06-05T00:00:00.000+0000",
      "volume": 6
    }
    ],
    "pageType": {
      "blog": 4,
      "facebook": 5,
      "forum": 2,
      "general": 3,
      "image": 0,
      "news": 8,
      "review": 1,
      "twitter": 0,
      "video": 1
    },
    "queries": [
    {
      "id": 1751295897,
      "name": "Berghain",
      "volume": 24
    }
    ]
  },
  {
    "id": "1751295897__Hammered",
    "label": "Hammered",
    "volume": 48,
    "type": "topic",
    "sentiment": {
      "neutral": 18,
      "negative": 30
    },
    "sentimentScore": 20,
    "burst": 5,
    "days": [
    {
      "date": "2014-06-06T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-04T00:00:00.000+0000",
      "volume": 8
    },
    {
      "date": "2014-06-09T00:00:00.000+0000",
      "volume": 0
    },
    {
      "date": "2014-06-07T00:00:00.000+0000",
      "volume": 0
    },
    {
      "date": "2014-06-08T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-03T00:00:00.000+0000",
      "volume": 0
    },
    {
      "date": "2014-06-05T00:00:00.000+0000",
      "volume": 8
    }
    ],
    "pageType": {
      "blog": 0,
      "facebook": 3,
      "forum": 0,
      "general": 0,
      "image": 0,
      "news": 0,
      "review": 0,
      "twitter": 15,
      "video": 0
    },
    "queries": [
    {
      "id": 1751295897,
      "name": "Berghain",
      "volume": 18
    }
    ]
  },
  {
    "id": "1751295897__Code",
    "label": "Code",
    "volume": 16,
    "type": "topic",
    "sentiment": {
      "neutral": 13,
      "positive": 3
    },
    "sentimentScore": 68,
    "burst": 25,
    "days": [
    {
      "date": "2014-06-06T00:00:00.000+0000",
      "volume": 5
    },
    {
      "date": "2014-06-04T00:00:00.000+0000",
      "volume": 2
    },
    {
      "date": "2014-06-07T00:00:00.000+0000",
      "volume": 2
    },
    {
      "date": "2014-06-09T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-08T00:00:00.000+0000",
      "volume": 1
    },
    {
      "date": "2014-06-03T00:00:00.000+0000",
      "volume": 3
    },
    {
      "date": "2014-06-05T00:00:00.000+0000",
      "volume": 2
    }
    ],
    "pageType": {
      "blog": 2,
      "facebook": 5,
      "forum": 2,
      "general": 2,
      "image": 0,
      "news": 5,
      "review": 0,
      "twitter": 0,
      "video": 0
    },
    "queries": [
    {
      "id": 1751295897,
      "name": "Berghain",
      "volume": 16
    }
    ]
  }
  ]
};

test('mapTopicsJsonToState: expect the correct topic object to be produced that is required by the react components', function (t) {

  let result = mapTopicsJsonToState(mockTopics.topics);

  let topicKeys = [
    'id',
    'label',
    'volume',
    'sentimentPositive',
    'sentimentNeutral',
    'sentimentNegative',
    'sentimentScore',
    'className'
  ];

  t.deepEqual(topicKeys, Object.keys(result[0]));
  t.end();
});

test('mapTopicsJsonToState: expect the the topics to not be in the same order', function (t) {

  let result = mapTopicsJsonToState(mockTopics.topics);

  t.notEqual(mockTopics.topics[0].id, result[0].id);
  t.end();
});
