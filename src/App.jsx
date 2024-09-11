

// const App = () => {
//   const postFormData = (event)=>{
//     event.preventDefault();
//   }
//   return (
//     <div>
//       <form onSubmit={postFormData}>
//         <input type="text" placeholder="name"/>
//         <button>submit</button>
//       </form>
      
//     </div>
//   );
// };

// export default App;


//react hook

import { useRef } from "react";

const App = () => {
  let myHeadline = useRef();
  const change = () =>{
  myHeadline.current.innerText = "Hello useRef";
  myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";

  }
  return (
    <div>
      <h1 ref={myHeadline}>Hello Bangladesh</h1>
      <button onClick={change}>click</button>
    </div>
  );
};

export default App;