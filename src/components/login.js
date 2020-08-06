import React from 'react'

export default class Login extends React.Component{
  render() {
    return (
        <div className="wrapper">
            <form onSubmit={this.login}>
                
                <div className="form-group">
                    <input type="text" className="form-control" 
                    onChange={this.handleFormChange}
                    placeholder="Enter UserName" />
                </div>
                <div className="form-group">
                <input type="password" className="form-control" 
                onChange={this.handleFormChange}
                placeholder="Enter Password"/>
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit Login" className="btn btn-success btn-block" />
                </div>
            </form>
        </div>
    )
}
}