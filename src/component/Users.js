import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_users, delete_user } from "../action/users";
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Users extends Component{
    state = {
        users : ''
    };

    onDeleteUser = (username) => {
        this.props.dispatch(delete_user(username));
    };

    componentDidMount() {
        if(!this.props.data){
            this.props.dispatch(get_users());
        }
    }

    render() {
        const users = this.props.data;

        const list = <div className="container">
                <Table>
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((item, index) => {
                                return <tr key={index}>
                                    <td>
                                    {
                                        item.username+', '+item.location
                                    }
                                    </td>
                                    <td>
                                    <Button><Link to={'/view/' + index}>View</Link></Button>
                                    <Button onClick={() => this.onDeleteUser(item.username)}>Delete</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        return list;
    }
}

function MapStateToProps(data) {
    return {
        data: data
    }
}

export default connect(MapStateToProps)(Users);

