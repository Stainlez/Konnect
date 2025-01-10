import { getAllData } from '../api';

export async function loader() {
    try {
        // Fetch the data
        const services = await getAllData();
        
        // Optionally return the vans data if needed elsewhere
        return services;
    } catch (error) {
        console.error('Error fetching vans data:', error);
        throw new Error('Failed to load services');
    }
}

// export async function loader() {
//     const vans = await getAllData();
//     // return { vans };
//     console.log(vans)
// }

