export const GET_USERS = 'GET_USERS';
export const DELETE_USERS = 'DELETE_USERS';
export const CREATE_USER = 'CREATE_USER';

export function get_users() {
    return (dispatch) => {
        fetch('http://localhost:4000/getusers')
            .then((resp) => resp.json())
            .then(respJSON => {
                dispatch({
                    type: GET_USERS,
                    users: respJSON
                })
            })
    }
}

export function delete_user(username) {
    return (dispatch) => {
        fetch(`http://localhost:4000/deleteuser?username=${username}`)
            .then(
                dispatch({
                    type: DELETE_USERS,
                    data: username
                })
            )
    }
}

export function create_user(userObj) {
    return (dispatch) => {
        fetch('http://localhost:4000/createuser',{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)})
            .then(dispatch({
                type: CREATE_USER,
                user: userObj
            }));
    }
}

