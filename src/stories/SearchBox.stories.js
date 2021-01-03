import React from 'react';

import SearchBox from '../SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Home/SearchBox',
  component: SearchBox,
};
const Template = (args) => <SearchBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
