import { useState } from 'react';
import { func } from 'prop-types';
import Button from '../shared/button/Button';
import FormInput from './input/FormInput';
import Card from '../shared/cards/Card';

function Form({ addTodo }) {
  const [content, setContent] = useState('');

  const handleAddTodo = () => {
    addTodo(content);
    setContent('');
  };
  return (
    <Card text='Add a task'>
      <FormInput content={content} setContent={setContent} />
      <Button onClick={handleAddTodo} text='Add' />
    </Card>
  );
}

Form.propTypes = {
  addTodo: func,
};

export default Form;
