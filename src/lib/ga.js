import {
    GoogleAnalyticsTracker,
    GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

import gaProps from '@pct_config/ga_props';

let tracker = new GoogleAnalyticsTracker(gaProps.tracker);

export var analytics = {

    trackScreenView: function (screenName) {
        tracker.trackScreenView(screenName);
        tracker.trackEvent(screenName, screenName + '-action');
    },
    init: function () {
        GoogleAnalyticsSettings.setDispatchInterval(30);
        GoogleAnalyticsSettings.setDryRun(true);
    }
};
