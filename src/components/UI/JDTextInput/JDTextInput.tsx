import { TJDTextInputProps } from '../types';

import styles from './JDTextInput.module.css';

export const JDTextInput: React.FC<TJDTextInputProps> = ({
  className,
  type = 'text',
  name,
  value,
  placeholder,
  rightSection,
  required = false,
  error = false,
  onChange,
}) => {
  return (
    <div className={styles.inputWrapperRoot}>
      <div className={styles.inputWrapper}>
        <input
          className={
            className +
            ' ' +
            styles.inputElem +
            ' ' +
            (error ? styles.error : '')
          }
          style={rightSection ? { paddingInlineEnd: '2.125rem' } : undefined}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
        {rightSection && (
          <div className={styles.inputSection}>{rightSection}</div>
        )}
      </div>
    </div>
  );
};
