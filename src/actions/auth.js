import api from '../api';

export const authUser = (data) => {
    return async (dispatch) => {
        try
        {
            const authData = await api.post('/api/auth', { login: data.login, password: data.password });
            localStorage.setItem('token', authData.data);
            return true;
        }
        catch (e)
        {
            console.log(e);
            return false;
        }
    }
};

export const authVerify = (data) => {
    return async (dispatch) => {
        try
        {
            const authData = await api.get('/api/auth/verify');
            return authData.data;
        }
        catch (e)
        {
            return false;
        }
    }
};