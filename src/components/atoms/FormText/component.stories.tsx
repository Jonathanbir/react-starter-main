/* eslint-disable react/jsx-props-no-spreading */
// https://github.com/storybookjs/storybook/blob/master/lib/core/docs/storiesOf.md
import { ComponentMeta, ComponentStory, storiesOf, Story } from '@storybook/react';
import withFormik from '@bbbtech/storybook-formik';
import { Col } from 'react-bootstrap';
import { FormText } from './index';

export default {
  title: 'Form/FormText',
  component: FormText,
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  // 初始化
  args: {
    text: '',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      config: {
        type: 'text',
      },
    },
  },
  parameters: {
    formik: {
      initialValues: {},
    },
  },
  decorators: [withFormik],
} as ComponentMeta<typeof FormText>;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: ComponentStory<typeof FormText> = args => <FormText {...args} />;
export const formText = Template.bind({});
