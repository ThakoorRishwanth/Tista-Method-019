import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import '../css/Dashboard.css'
import Sidebar from './Sidebar';

interface BikeData {
    id: number;
    name: string;
    type: string;
    engine_displacement: string;
    price: string;
    color: string;
    image_url: string;
    description: string;
    features: string[];
}

function reducer(state: BikeData, action: { type: string, payload: any }): BikeData {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload };
        case 'type':
            return { ...state, type: action.payload };
        case 'engine_displacement':
            return { ...state, engine_displacement: action.payload };
        case 'price':
            return { ...state, price: action.payload };
        case 'color':
            return { ...state, color: action.payload };
        case 'image_url':
            return { ...state, image_url: action.payload };
        case 'description':
            return { ...state, description: action.payload };
        case 'features':
            return { ...state, features: action.payload.split(',') };
        default:
            return state;
    }
}

function AddData() {
    const initialState: BikeData = {
        id: 0,
        name: "",
        type: "",
        engine_displacement: "",
        price: "",
        color: "",
        image_url: "",
        description: "",
        features: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [data, setData] = useState<BikeData[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) {
        dispatch({ type, payload: e.target.value });
    }
    async function HandleSubmit() {
        const data = await axios.post('https://tista-method-019-1.onrender.com/motorcycles', state);
        setData([...data, data.data]); 
        console.log(data.data)
    }
    async function fetchData() {
        try {
            const res = await fetch("https://tista-method-019-1.onrender.com/motorcycles")
            const data = await res.json();
            setData(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    initialState.id = Date.now();
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data);
    return (
        <div style={{display:'flex'}}>
            <Sidebar/>
        <div style={{ display: 'flex' }}>
            <div id='form'>
                <div>
                    <h1>Enter bike Details Here</h1>
                    <div>
                        <label htmlFor="name">Enter Name: </label>
                        <input type="text" placeholder='Enter name' value={state.name} onChange={(e) => handleChange(e, 'name')} />
                    </div>
                    <div>
                        <label htmlFor="type">Enter Type: </label>
                        <input type="text" placeholder='Enter type' value={state.type} onChange={(e) => handleChange(e, 'type')} />
                    </div>
                    <div>
                        <label htmlFor="engine_displacement">Enter Engine Displacement: </label>
                        <input type="text" placeholder='Enter engine displacement' value={state.engine_displacement} onChange={(e) => handleChange(e, 'engine_displacement')} />
                    </div>
                    <div>
                        <label htmlFor="price">Enter Price: </label>
                        <input type="text" placeholder='Enter price' value={state.price} onChange={(e) => handleChange(e, 'price')} />
                    </div>
                    <div>
                        <label htmlFor="color">Enter Color: </label>
                        <input type="text" placeholder='Enter color' value={state.color} onChange={(e) => handleChange(e, 'color')} />
                    </div>
                    <div>
                        <label htmlFor="image_url">Enter Image URL: </label>
                        <input type="text" placeholder='Enter image URL' value={state.image_url} onChange={(e) => handleChange(e, 'image_url')} />
                    </div>
                    <div>
                        <label htmlFor="description">Enter Description: </label>
                        <input type="text" placeholder='Enter description' value={state.description} onChange={(e) => handleChange(e, 'description')} />
                    </div>
                    <div>
                        <label htmlFor="features">Enter Features with ',': </label>
                        <input type='text' value={state.features.join(',')} onChange={(e) => handleChange(e, 'features')} />
                    </div>
                    <button onClick={HandleSubmit}>Add Data</button>
                </div>
            </div>
            <div id='formdata'>
                <div id='headings'>
                    <div>ID</div>
                    <div>Name</div>
                    <div>Image</div>
                    <div>Type</div>
                    <div>Enginee Disdivlacement</div>
                    <div>price</div>
                    <div>Color</div>
                </div>
                {data.length > 0 &&
                    data.map((ele, ind) => {
                        return <div className='Datapresent' key={ind}>
                            <div>{ele.id}</div>
                            <div>{ele.name}</div>
                            <div><img src={ele.image_url} alt="" /></div>
                            <div>{ele.type}</div>
                            <div>{ele.engine_displacement}</div>
                            <div>{ele.price}</div>
                            <div>{ele.color}</div>
                        </div>

                    })
                }
            </div>
        </div>
    </div>
    );
}

export default AddData;
