import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

// import * as React from 'react';
// import { StackActions } from '@react-navigation/native';
// export const navigationRef = React.createRef();

// export function navigate(routeName, params) {
//   navigationRef.dispatch(
//     StackActions.replace({
//       routeName,
//       params,
//     })
//   );
// }
