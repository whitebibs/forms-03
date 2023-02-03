import React from "react";

export class Login extends React.Component{
    state={
        username: "", 
        password: "",
        remember: false
    }
    handleInputChange= (event) => {
        const {name, value, type, checked} = event.target

        this.setState({
            [name] : type === "checkbox" ? checked : value  
        })
    }

    onLogin(){
    console.log(this.state)
    }

    render(){
        return(
            <div>
                <div>
                    <button
                     onClick={this.onLogin}
                     disabled={this.state.username && this.state.password ? false : true}>
                     Login
                    </button>
                </div>
                <div>
                    <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    />
                    <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}