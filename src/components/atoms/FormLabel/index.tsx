/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import * as _ from 'lodash';
import './style.scss';

interface FormLabelProps {
  text: string;
  className?: string;
  required?: boolean; // 是否為必填
}
export const FormLabel = (props: FormLabelProps) => {
  const { text, className, required } = props;

  return (
    <>
      {!_.isEmpty(text) && !_.isEmpty(text.trim()) ? (
        <Form.Label className={`${className}`}>{`${text}${required ? '(*)' : ''}`}</Form.Label>
      ) : (
        <Form.Label className="no-label">無資料</Form.Label>
      )}
    </>
  );
};
