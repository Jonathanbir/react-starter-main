/* eslint-disable react/react-in-jsx-scope */
import { ElementType } from 'react';
import { Form } from 'react-bootstrap';
import { FontColor } from '../../../util/enum/common/dataTables-font-color';
import { FormLabel } from '../FormLabel/index';
import { FormText } from '../FormText/index';

interface FormInfoProps {
  as?: ElementType<any>;
  controlId: string;
  color?: FontColor;
  label: string;
  name?: string;
  type?: string;
  textPrefix?: string;
  noLabel?: boolean;
  value?: string;
  className?: string;
  [key: string]: any;
}

export const FormInfo = (props: FormInfoProps) => {
  const {
    as,
    controlId,
    color,
    label,
    name,
    type,
    textPrefix,
    noLabel,
    value,
    className,
    ...remainProps
  } = props;

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Form.Group
      as={as}
      className={`form-cus-group ${className}`}
      {...remainProps}
      controlId={controlId}
    >
      {!noLabel && <FormLabel text={label} />}
      <FormText
        className={`${color ? `text-${color}` : ''}`}
        text={`${textPrefix || ''}${value || ''}`}
      />
    </Form.Group>
  );
};
