import React from 'react'

import Jumbotron from './Jumbotron'

export default class About extends React.Component {
  render() {
    const title = 'Join'
    return (
      <div>
        <Jumbotron title={title} />

        <div className="card">
          <div className="card-block">

            <form method="post" action="/users/join">

              <div className="form-group">
                <label htmlFor="join-name">Name</label>
                <input id="join-name" type="text" className="form-control" placeholder="Name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="join-email">Email</label>
                <input id="join-email" type="email" className="form-control" placeholder="Email address" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="join-password">Password</label>
                <input id="join-password" type="password" className="form-control" placeholder="Password" name="password" required />
              </div>

              <div className="form-group">
                <label htmlFor="join-password2">Confirm Password</label>
                <input id="join-password2" type="password" className="form-control" placeholder="Re-type password" name="password2" required />
              </div>

              <button type="submit" className="btn btn-outline-success">Submit</button>

            </form>

          </div>
        </div>
      </div>
    )
  }
}
