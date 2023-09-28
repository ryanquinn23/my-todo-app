import { string, object } from 'prop-types';

function InputText({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type='text' {...register} />
      {errors[registerName]?.type === 'required' && (
        <span className='error'>Required field</span>
      )}
      {errors[registerName]?.type === 'pattern' && (
        <span className='error'>Email address invalid</span>
      )}
      {errors[registerName]?.type === 'maxLength' && (
        <span className='error'>Max 30 characters</span>
      )}
    </>
  );
}

InputText.propTypes = {
  label: string,
  register: object,
  errors: object,
  registerName: string,
};

export default InputText;
