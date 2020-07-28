import { connect, ConnectedProps } from 'react-redux';
import View from './View';
import './style.css';

import {
  mapStateToProps,
  mapDispatchToProps,
  StateProps,
  DispatchProps
} from './Model';

const connector = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(View);