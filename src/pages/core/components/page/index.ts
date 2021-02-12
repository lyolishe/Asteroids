import { memo } from 'react';
import { compose } from 'redux';

import { PAGE_SETTINGS } from '../../consts';
import Page from './Page';
import { onLoad } from './preloader';
import { Props, OwnProps } from './types';

export default compose<Props>(
  asPage({
    ...PAGE_SETTINGS,
  }),
  preload<OwnProps>({ onLoad, isReload: false }),
)(memo<Props>(Page));
