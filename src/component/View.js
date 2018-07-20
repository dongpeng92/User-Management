import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {fetch_user, get_users} from "../action/users";
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class View extends Component{

    componentDidMount() {
        if(!this.props.data){
            this.props.dispatch(get_users());
        }
        console.log(this.props.data);
    }

    render() {
        return <div className="container">
            {
                (this.props.data && (
            <ListGroup>
                <ListGroupItem>
                    {
                        this.props.data[this.props.match.params.id].username
                    }
                </ListGroupItem>
                <ListGroupItem>
                    {
                        this.props.data[this.props.match.params.id].location
                    }
                </ListGroupItem>
            </ListGroup>
                ))
            }

            <Button><Link to={'/users'}>Go Back</Link></Button>
        </div>
    }
}

function mapStateToProps(data) {
    return {
        data: data
    }
}

export default connect(mapStateToProps)(withRouter(View));