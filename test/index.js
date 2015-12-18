var requireTest = require.context('./', true, /\.test\.js$/);
requireTest.keys().forEach(requireTest);