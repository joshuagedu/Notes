import {createReduxContainer} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import {withLocalize} from 'react-localize-redux';
import lodash from 'lodash';

import React from 'react';
import Main from './main';
import {NavigationServices} from './navigation-services';

export const RootNavigator = Main;

export const AppRedux = createReduxContainer(RootNavigator);

export const AppReduxContainer = props => (
  <AppRedux
    {...lodash.pick(props, ['dispatch', 'state'])}
    screenProps={{
      translate: props.translate,
    }}
    ref={ref => NavigationServices.setTopLevelNavigator(ref)}
  />
);

export default withLocalize(
  connect(state => ({
    state: state.navigation,
  }))(AppReduxContainer),
);
