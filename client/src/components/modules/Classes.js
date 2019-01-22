
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Input, 
  Label, 
  Menu,
  Container,
  Rail,
} from "semantic-ui-react";
import styles from '../../css/app.css'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div> DIS IS A TEST </div>,
//     main: () => <h2>Class1</h2>
//   },
//   {
//     //path: '/u/profile?'+user._id,
//     sidebar: () => <div>test</div>,
//     main: () => <h2>Class2</h2>
//   },
//   {
//     path: '/logout',
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Class3</h2>
//   }
// ];


class Classes extends Component {
  constructor(props) {
      super(props);
  }

  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Menu fluid vertical className="classes-menu">
        <Menu.Item name='class1' active={activeItem === 'class1'} onClick={this.handleItemClick}>
          <Label color='blue'>1</Label>
          Class1
        </Menu.Item>
        <Menu.Item name='class2' active={activeItem === 'class2'} onClick={this.handleItemClick}>
          <Label>5</Label>
          Class2
        </Menu.Item>
        <Menu.Item name='class3' active={activeItem === 'class3'} onClick={this.handleItemClick}>
          <Label>1</Label>
            Class3
        </Menu.Item>
      </Menu>
    )
  }
}
export default Classes;


// function SidebarExample() {
//   return (
    
//     <Router>
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             padding: "10px",
//             width: "40%",
//             background: "#f0f0f0"
//           }}
//         >
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/class1">Test</Link>
//             </li>
//             <li>
//               <Link to="/class2">Test1</Link>
//             </li>
//           </ul>

//           {routes.map((route, index) => (
//             // You can render a <Route> in as many places
//             // as you want in your app. It will render along
//             // with any other <Route>s that also match the URL.
//             // So, a sidebar or breadcrumbs or anything else
//             // that requires you to render multiple things
//             // in multiple places at the same URL is nothing
//             // more than multiple <Route>s.
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.sidebar}
//             />
//           ))}
//         </div>

//         <div style={{ flex: 1, padding: "10px" }}>
//           {routes.map((route, index) => (
//             // Render more <Route>s with the same paths as
//             // above, but different components this time.
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.main}
//             />
//           ))}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default SidebarExample;