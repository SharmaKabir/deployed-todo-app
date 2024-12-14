// const ProgressBar = ({ progress }) => {
//   const colors = [
//     'rgb(255, 214, 161)',
//     'rgb(255, 175, 163)',
//     'rgb(108, 115, 148)',
//     'rgb(141, 181, 145)',
//   ]
//   const randomColor = colors[Math.floor(Math.random() * colors.length)]

//   console.log(randomColor)

//   return (
//     <div className="outer-bar">
//       <div
//         className="inner-bar"
//         style={{ width: `${progress}%`, backgroundColor: randomColor }}
//       ></div>
//     </div>
//   )
// }

// export default ProgressBar
const ProgressBar = ({ progress }) => {
  let color;

  if (progress === 100) {
    color = 'purple';
  } else if (progress > 50) {
    color = 'green';
  } else if (progress > 25) {
    color = 'yellow';
  } else {
    color = 'red';
  }

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ProgressBar;