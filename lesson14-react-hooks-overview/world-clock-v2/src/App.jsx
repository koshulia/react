import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {isVisible && (
        <div>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </div>
      )}
    </>
  );
};

// class App extends Component {
//   state = {
//     visible: true,
//   };

//   toggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.toggle}>Toggle</button>

//         {this.state.visible && (
//           <div>
//             <Clock location="London" offset={0} />
//             <Clock location="Kyiv" offset={2} />
//             <Clock location="New York" offset={-5} />
//           </div>
//         )}
//       </>
//     );
//   }
// }

export default App;
