import React, { Component } from 'react';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import serializeForm from 'form-serialize';
import { create_user } from "../action/users";
import { withRouter, Prompt } from 'react-router-dom';
import { connect } from 'react-redux';

class Create extends Component{
    state = {
        username: '',
        location: '',
        valid: true
    };

    createUser = (event) => {
        event.preventDefault();
        console.log(serializeForm(event.target, {hash: true}));
        var userobj = serializeForm(event.target, {hash: true});

        this.props.dispatch(create_user(userobj));

        this.setState ({
            username : '',
            location : '',
            valid : true
        }, () => {
            this.props.history.push('/users');
        })

    };

    componentDidMount() {

    }

    trackInput = (event) => {
        var updateState = {};
        updateState[event.target.name] = event.target.value;
        updateState.valid = false;
        this.setState(updateState);
    };

    render() {
        return <div className="container">
            <Prompt when={this.state.valid === false} message="Leaving page will loose your data"/>
            <form onSubmit={this.createUser}>
                <ControlLabel> Username </ControlLabel>
                <FormControl onChange={this.trackInput} name="username" type="text" placeholder="Username"/><br/>
                <ControlLabel> Location </ControlLabel>
                <FormControl onChange={this.trackInput} name="location" type="text" placeholder="Location"/><br/>
                <Button type="submit">Create</Button>
            </form>
        </div>;
    }
}

function mapStateToProps(data) {
    return {
        data: data
    }
}

export default connect(mapStateToProps)(withRouter(Create));
