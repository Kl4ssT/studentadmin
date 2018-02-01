import api from '../api';
import {ADD_DEPARTMENT, EDIT_DEPARTMENT, GET_DEPARTMENTS, REMOVE_DEPARTMENT} from "./types";

export const getDepartments = () => {
    return async (dispatch) => {
        try
        {
            const departments = await api.get('/api/departments');

            dispatch({
                type: GET_DEPARTMENTS,
                payload: departments.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const removeDepartment = (id) => {
    return async (dispatch) => {
        try
        {
            const teacher = await api.delete(`/api/departments/${id}`);

            dispatch({
                type: REMOVE_DEPARTMENT,
                payload: id
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const addDepartment = (department) => {
    return async (dispatch) => {
        try
        {
            const formData = new FormData();
            for (let data in department)
                formData.append(data, department[data]);


            const newDepartment = await api.post('/api/departments', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            dispatch({
                type: ADD_DEPARTMENT,
                payload: newDepartment.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const editDepartment = (department) => {
    return async (dispatch) => {
        try
        {
            const formData = new FormData();
            for (let data in department)
                formData.append(data, department[data]);


            const editableDepartment = await api.put(`/api/departments/${department.id}`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });


            dispatch({
                type: EDIT_DEPARTMENT,
                payload: editableDepartment.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};