import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

function InputField({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  className,
  label,
  message,
}) {
  return (
    <div className={cx(className, 'form-group', message && 'invalid')}>
      <label htmlFor={id} className={cx('form-label')}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={cx('form-control')}
      />
      <span className={cx('form-message')}>{message}</span>
    </div>
  );
}

export default InputField;
