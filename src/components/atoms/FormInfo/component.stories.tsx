// https://github.com/storybookjs/storybook/blob/master/lib/core/docs/storiesOf.md
import { ComponentMeta, ComponentStory, storiesOf, Story } from '@storybook/react';
import withFormik from '@bbbtech/storybook-formik';
import { Col } from 'react-bootstrap';
import { FormInfo } from './index';
import { FontColor } from '../../../util/enum/common/dataTables-font-color';

export default {
  title: 'Form/FormInfo',
  component: FormInfo,
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  // 初始化

  args: {
    controlId: 'name',
    label: '標籤',
    name: 'name',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: [FontColor.Pale_Red, FontColor.Warm_Grey],
    },
  },
  parameters: {
    formik: {
      initialValues: {
        name: '初始值',
      },
    },
  },
  decorators: [withFormik],
} as ComponentMeta<typeof FormInfo>;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: ComponentStory<typeof FormInfo> = args => <FormInfo {...args} />;
export const formInfo = Template.bind({});
