import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonColors = 'primary' | 'secondary';

type ButtonSizes = 'large' | 'medium';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: ButtonColors;
  size?: ButtonSizes;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};
