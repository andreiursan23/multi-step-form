import { ButtonProps } from '../../typings/buttons';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant,
  className,
  iconLeft = false,
  iconRight = false,
  ...rest
}) => {
  const sizeClass = size === 'medium' ? 'btn-medium' : 'btn-large';

  const variantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      default:
        return 'btn-primary';
    }
  };

  return (
    <button className={`btn ${sizeClass} ${variantClass()} ${className}`} {...rest}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      <p className="w-max">{children}</p>
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
