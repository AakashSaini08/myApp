// import React from 'react'
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
//   return (
//     <div>
//         <h1>Hello Saini</h1>
//         <p> It is {props.date.toLocaleTimeString()}.</p>
//     </div>
//   );
// }
// function Tick(){
//     root.render( <Clock date={new Date()} />);
// }
// setInterval(Tick,1000);

// export default Clock


// import React from 'react'
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Tick(props) {
//   return (
//     <div>
//         <h1>Hello Saini</h1>
//         <p> It is {props.date.toLocaleTimeString()}.</p>
//     </div>
//   );
// }
// function Clock(){
//     root.render( <Tick date={new Date()} />);
// }

// // componentDidMount() {
// //     this.timerID = setInterval(
// //       () => this.Tick(),
// //       1000
// //     );
// //   }


// export default Clock


// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Clock />);