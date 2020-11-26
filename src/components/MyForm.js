import React from "react";

export default class MyForm extends React.Component {
    state = {
        name: '',
        favoritePet: '',
        rememberMe: false,
        greeting: 'Ms.'
    };
    
    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <textarea
                    name="favoritePet"
                    value={this.state.favoritePet}
                    onChange={this.handleChange}
                />
                <input
                    name="rememberMe"
                    type="checkbox"
                    checked={this.state.rememberMe}
                    onChange={this.handleChange}
                />
                <div>
                    <select name="title" value={this.state.greeting} onChange={this.handleChange}>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Miss.</option>
                        <option>Mrs.</option>
                        <option>Mx.</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}