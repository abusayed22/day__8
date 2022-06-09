import axios from "axios";
import * as types from "../type/type";


const get_data = (data) => {
    return {
        type:types.GET_DATA,
        payload:data
    }
}
export const pre_get_data = () => {
    return(dispatch) => {
        axios.get("api/students/")
        .then(res => {
            dispatch(get_data(res.data.students))
        })
        .catch(err => console.log(err))
    }
}

const delete_data = () => {
    return {
        type:types.DELETE_DATA
    }
}
export const pre_delete_data = (id) => {
    return (dispatch) => {
        axios.delete(`api/students/${id}`)
        .then( res => {
            dispatch(delete_data())
            dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}

const get_single_state = (data) => {
    return {
        type:types.GET_SINGLE_STATE,
        payload:data
    }
}
export const pre_get_single_state = (id) => {
    return dispatch => {
        axios.get(`api/students/${id}`)
        .then( res => {
            dispatch(get_single_state(res.data.student))
        })
        .catch(err => console.log(err))
    }
}


const edit_update = () => {
    return {
        type:types.EDIT_UPDATE
    }
}
export const pre_edit_update = (id,allStudents) => {
    return dispatch => {
        axios.put(`api/students/${id}`,allStudents)
        .then(res => {
            dispatch(edit_update())
            dispatch(get_data())
        })
        .catch(err => console.log(err))
}
}

const post_data = () => {
    return {
        type:types.POST_DATA
    }
}
export const pre_post_data = () => {
    return dispatch => {
        axios.post("api/students/")
        .then(res => {
            dispatch(post_data())
        })
        .catch(err => console.log(err))
    }
}