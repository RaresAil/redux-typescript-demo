import { connect, ConnectedProps } from 'react-redux';
import View from './View';

import {
  mapStateToProps,
  StateProps
} from './Model';

const connector = connect<StateProps>(
  mapStateToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(View);
