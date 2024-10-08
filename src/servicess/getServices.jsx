
export const getServices = async () => {
    const res = await fetch('http://localhost:3000/services/api/get-all');
    if (!res.ok) {
        throw new Error('Failed to fetch services');
    }
    const services = await res.json(); // Await here to get the JSON data
    return services;
}

export const getServicesDetail = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const service = await res.json();  // Ensure to await the response properly
    console.log('Service details:', service); // Log the fetched data
    return service;
};
