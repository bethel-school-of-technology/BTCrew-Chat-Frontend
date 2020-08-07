import React from 'react'

export default class Signup extends React.Component{

      render() {
        return (
            <div className="wrapper">
            <form onSubmit={this.signup}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                         onChange={this.handleFormChange}
                         placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control"
                        onChange={this.handleFormChange}
                        placeholder="Enter Last Name"/> 
                    </div>
                    <div className="form-group">
                     <input type="text" className="form-control" 
                     onChange={this.handleFormChange}
                      placeholder="Enter UserName"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" 
                         onChange={this.handleFormChange}
                         placeholder="Enter Password"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}
