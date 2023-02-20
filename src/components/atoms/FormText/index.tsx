/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import './style.scss';

interface FormTextProps {
  text: string | number;
  className?: string;
}
export const FormText = (props: FormTextProps) => {
  const { className } = props;

  return <div className={`formText ${className || 'formText__warm-grey'}`}>{props.text}</div>;
};
