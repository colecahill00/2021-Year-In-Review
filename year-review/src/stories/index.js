import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavigationItems from '../Component/Navigation/NavigationItems'
import GenericPanelLayout from '../Component/GenericPanelLayout'

storiesOf('GenericPanelLayout', module).add("GenericPanelLayout",() => <GenericPanelLayout />)
