const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

// const Content = (props) => {
//   const { parts } = props;

//   const renderParts = () => {
//     return parts.map(part => {
//       return (
//         <p>{part.name} {part.exercises}</p>
//       )
//     })
//   }

//   return renderParts();
// }

const Part = (props) => {
  return (
    <p> {props.partName} {props.partExercises}</p>
  )
}

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      <Part partName={parts[0].name} partExercises={parts[0].exercises} />
      <Part partName={parts[1].name} partExercises={parts[1].exercises} />
      <Part partName={parts[2].name} partExercises={parts[2].exercises} />
    </div>
  );
}

const Total = (props) => {
  const { parts } = props;

  const calculateTotalExercises = () => {
    let total = 0;
    parts.forEach(part => {
      total += part.exercises
    })
    return total;
  }
  return <p> Number of exercises {calculateTotalExercises()}</p>;
}



const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [
    {
      name: part1,
      exercises: exercises1
    },
    {
      name: part2,
      exercises: exercises2
    },
    {
      name: part3,
      exercises: exercises3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
