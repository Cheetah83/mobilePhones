import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/phones';

export const phoneServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const phones = Object.values(result);
    
        return phones;
    };
    
    const getOne = async (phoneId) => {
        const result = await request.get(`${baseUrl}/${phoneId}`);
    
        return result;
    };
    
    const create = async (phoneData) => {
        const result = await request.post(baseUrl, phoneData);
    
        console.log(result);
    
        return result;
    };

    const edit = (phoneId, data) => request.put(`${baseUrl}/${phoneId}`, data);

    const deletePhone = (phoneId) => request.delete(`${baseUrl}/${phoneId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePhone,
    };
}