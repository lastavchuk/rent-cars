import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://64c1271ffa35860baea015c0.mockapi.io/cars',
});

export async function fetchAllCars() {
    const { data } = await instance.get('');
    return data;
}
export async function getCar(id) {
    const { data } = await instance.get(`/${id}`);
    return data;
}
export async function addCar(carData) {
    const { data } = await instance.post('', carData);
    return data;
}
export async function editCar(id, car) {
    const { data } = await instance.put(`/${id}`, car);
    return data;
}
export async function deleteCar(id) {
    const { data } = await instance.delete(`/${id}`);
    return data;
}
