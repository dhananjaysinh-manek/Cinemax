// import React, { Component } from "react";
// import { Link, Router } from "react-router-dom";


// import { moviesData } from "../common/Data";


// export class Section extends Component {
//   handleOnClick = (e, movieId) => {
//     e.preventDefault();
//     console.log(movieId);

//     Router.push(`moviesDetails/${movieId}`)
//   };

//   render() {
//     return (
//       <>
//         <section className="main-section">
//           <div className="container-fluid">
//             <div className="row">
//               {moviesData &&
//                 moviesData.map((item) => {
//                   console.log(item)
//                   return (
//                     <>
//                       <div className="col-lg-4" key={item.id}>
//                         <div
//                           className="main-section-text"
//                           onClick={(e) => this.handleOnClick(e, item.id)}
//                         > <Link to={`${item.id}`}>
//                             <img src={item.image} alt="image" /> </Link>

//                           <p>{item.title}</p>
//                           <h2>{item.name}</h2>
//                         </div>
//                       </div>

//                     </>
//                   );
//                 })}
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default Section;
