import React from 'react';

import AddressForm from '../AddressForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Home/AddressForm',
  component: AddressForm,
};
const Template = (args) => <AddressForm {...args} />;
export const Basic = Template.bind({});
Basic.args = {
};
