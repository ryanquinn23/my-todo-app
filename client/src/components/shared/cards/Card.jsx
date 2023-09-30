import { node, string } from 'prop-types';
import Title from '../title/Title';

function Card({ children, text }) {
  return (
    <div className='card-container'>
      <Title text={text} />
      <div className='border-container'>{children}</div>
    </div>
  );
}
Card.propTypes = {
  children: node,
  text: string,
};

export default Card;
