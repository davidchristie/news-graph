import React from 'react'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLogin" style={{minWidth: '300px'}}>

          <form role="form" method="post" action="/users/login" acceptCharset="UTF-8" id="login-nav">

            <div className="dropdown-item">
               <label className="sr-only" htmlFor="email">Email address</label>
               <input type="email" className="form-control" id="email" name="email" placeholder="Email address" required />
            </div>

            <div className="dropdown-item">
               <label className="sr-only" htmlFor="password">Password</label>
               <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
            </div>

            <div className="dropdown-item">
               <button type="submit" className="btn btn-outline-success btn-block">Sign in</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

// <div className="dropdown">
//   <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//     <b>Login</b> <span className="caret"></span>
//   </a>
//   <ul className="dropdown-menu">
//     <li>
//         <div className="col-xs-12">
//
//            <form className="form" role="form" method="post" action="/users/login" acceptCharset="UTF-8" id="login-nav">
//
//               <div className="form-group">
//                  <label className="sr-only" htmlFor="email">Email address</label>
//                  <input type="email" className="form-control" id="email" name="email" placeholder="Email address" required />
//               </div>
//
//               <div className="form-group">
//                  <label className="sr-only" htmlFor="password">Password</label>
//                  <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
//               </div>
//
//               <div className="form-group">
//                  <button type="submit" className="btn btn-default btn-block">Sign in</button>
//               </div>
//
//            </form>
//         </div>
//     </li>
//   </ul>
// </div>
