/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
// https://github.com/storybookjs/storybook/blob/master/lib/core/docs/storiesOf.md
import { ComponentMeta, ComponentStory, storiesOf, Story } from '@storybook/react';
import withFormik from '@bbbtech/storybook-formik';
import { Col } from 'react-bootstrap';
import { FormLabel } from './index';
import { FontColor } from '../../../util/enum/common/dataTables-font-color';

export default {
  title: 'Form/FormLabel',
  component: FormLabel,
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  // 初始化
  args: {
    text: '標籤',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    formik: {
      initialValues: {},
    },
  },
  decorators: [withFormik],
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = args => <FormLabel {...args} />;
export const formLabel = Template.bind({});
