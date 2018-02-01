import api from '../api';
import { GET_TEACHERS, REMOVE_TEACHER, ADD_TEACHER, EDIT_TEACHER } from "./types";

export const getTeachers = () => {
    return async (dispatch) => {
        try
        {
            const teachers = await api.get('/api/teachers');

            dispatch({
                type: GET_TEACHERS,
                payload: teachers.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const removeTeacher = (id) => {
    return async (dispatch) => {
        try
        {
            const teacher = await api.delete(`/api/teachers/${id}`);

            dispatch({
                type: REMOVE_TEACHER,
                payload: id
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const addTeacher = (teacher) => {
    return async (dispatch) => {
        try
        {
            const formData = new FormData();
            for (let data in teacher)
                formData.append(data, teacher[data]);


            const newTeacher = await api.post('/api/teachers', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });


            dispatch({
                type: ADD_TEACHER,
                payload: newTeacher.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

export const editTeacher = (teacher) => {
    return async (dispatch) => {
        try
        {
            const formData = new FormData();
            for (let data in teacher)
                formData.append(data, teacher[data]);


            const editableTeacher = await api.put(`/api/teachers/${teacher.id}`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });


            dispatch({
                type: EDIT_TEACHER,
                payload: editableTeacher.data
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
};