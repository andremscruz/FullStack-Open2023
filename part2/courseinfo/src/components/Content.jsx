import Part from './Part';

const Content = (props) => {
  return (
    <ol>
      {props.parts.map(part => (
        <li key={part.id}>
            <Part name={part.name} exercises={part.exercises}
            />
        </li>
      ))}
    </ol>
  );
};

export default Content;