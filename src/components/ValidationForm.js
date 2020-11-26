import React from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}

export default class ValidationForm extends React.Component {
    state = initialState

    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value})
    }

    validate = () => {
        let nameError = ""
        let emailError = ""
        let passwordError = ""

        if (!this.state.name) {
            nameError = "name can't be blank"
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email"
            console.log('emailerror')
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false
        }

        return true
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);
            this.setState(initialState)
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        placeholder="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <div style={{color: "red", fontSize:12}}>
                        {this.state.nameError}
                    </div>
                </div>
                <div>
                    <input
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{color: "red", fontSize:12}}>
                        {this.state.emailError}
                    </div>
                </div>
                <div>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{color: "red", fontSize:12}}>
                        {this.state.passwordError}
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}