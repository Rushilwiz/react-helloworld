import React, { Component } from 'react';

class FetchRandomUser extends Component {
    state = {
        loading: true,
        people: []
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.people) {
            return <div>didn't get a person</div>;
        }
    
        return (
            <div>
                {this.state.people.map(person => (
                <div key={person.name.first + person.name.last}>
                    <div>{person.name.title} {person.name.first} {person.name.last}</div>
                    <img src={person.picture.large} />
                </div>
                ))}
            </div>
        );
    }
}

export default FetchRandomUser;