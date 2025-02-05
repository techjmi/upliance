import React from 'react';

const Service = () => {
    const services = [
        { id: 1, name: 'Biryani', description: 'Aromatic rice dish with spices and meat.' },
        { id: 2, name: 'Paneer Tikka', description: 'Grilled paneer cubes marinated with spices.' },
        { id: 3, name: 'Butter Chicken', description: 'Creamy tomato-based curry with chicken.' },
        { id: 4, name: 'Dal Makhani', description: 'Creamy black lentils cooked with spices.' },
        { id: 5, name: 'Palak Paneer', description: 'Spinach curry with paneer cheese.' },
    ];

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
           
            <h2 className="text-2xl font-semibold mb-4">Food Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">{service.name}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
