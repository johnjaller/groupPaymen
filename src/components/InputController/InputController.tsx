import { ChangeEvent, FC, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import styles from './InputController.module.scss';

const InputController: FC<InputControllerProps> = ({
  className,
  inputType = 'text',
  placeholder,
  value,
  inputProps,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.inputController} {...props}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};

export default InputController;

export type InputControllerProps = {
  className?: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  value: string;
} & HTMLAttributes<HTMLDivElement>;
