import { string, func } from 'prop-types';

function FormInput({ content, setContent }) {
  return (
    <div className='formInput-container'>
      <label>Add a task</label>
      <input
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
FormInput.propTypes = {
  content: string,
  setContent: func,
};

export default FormInput;
