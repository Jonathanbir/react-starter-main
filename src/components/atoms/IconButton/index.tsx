import { Button, ButtonProps } from 'react-bootstrap';

interface IconButtonProps extends ButtonProps {
  children: any;
  className: string;
}
export const IconButton = (props: IconButtonProps) => {
  const { children, className, ...lastProp } = props;

  return (
    <Button className={`icon-btn ${'' || className}`} {...lastProp}>
      {children}
    </Button>
  );
};
