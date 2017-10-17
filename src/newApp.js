import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import store from '@pct_store';
import { AppNavigator } from '@pct_react_components/AppNavigator';
import Globals from '@pct_config/globals';

import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';