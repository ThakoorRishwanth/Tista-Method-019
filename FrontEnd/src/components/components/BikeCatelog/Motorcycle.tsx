import React, { useEffect, useState } from 'react';

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

interface typeData {
    types: string[];
}
interface bikeInfo {
    Title: "string",
    Title_URL: "string",
    Image: "string",
    Price: "string",
    Price1: "string",
    Label: "string",
    colorselectoritem_container: "string",
    colorselectoritem_container2: "string",
    colorselectoritem_container3: "string",
    colorselectoritem_container4: "string",
    colorselectoritem_container5: "string",
    colorselectoritem_container6: "string",
    activecolortext: "string"
}

function MotorCycle() {
    const [spanHovered, setSpanHovered] = useState<boolean>(false);
    const [isColorDropdownOpen, setColorDropdownOpen] = useState<boolean>(false);
    const [isTypeDropdownOpen, setTypeDropdownOpen] = useState<boolean>(false);
    const [isBrandDropdownOpen, setBrandDropdownOpen] = useState<boolean>(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState<boolean>(false);
    const [isEngineCCDropdownOpen, setEngineCCDropdownOpen] = useState<boolean>(false);
    const [imagehover, setImageHover] = useState<boolean>(false);
    const [datas, setData] = useState<BikeData[]>([]);
    const [biketypes, setType] = useState<typeData>({ types: [] });
    const [bikeInfo, setBikeInfo] = useState<bikeInfo[]>([]);
    const [colors, setColors] = useState<string>('')

    const img1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcwT3zy-XTEYSnKNltrpIoGmaLRCLg3QZHw&usqp=CAU";
    const img2: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaz-JbqYbsUy9Vc7fCv9OIekAufHh4MVFAQ&usqp=CAU"
    const img3: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHgkondoSCmDLzKFOY8-8OGXi1rL2mpQyrQ&usqp=CAU"
    const img4: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeGKDxFU-JDKZOf8i9M-L6OT3XA2Yfh9KRA&usqp=CAU&reload=on"

    async function fetchData() {
        try {
            const res = await fetch("https://tista-method-019-1.onrender.com/motorcycles");
            const data = await res.json();
            setData(data);
            const uniqueTypes = Array.from(new Set(data.map(ele => ele.type)));
            setType({ types: uniqueTypes });
        } catch (err) {
            console.log(err);
        }
    }
    async function fetchBikeData() {
        try {
            const res = await fetch("https://tista-method-019-1.onrender.com/Bike")
            const data = await res.json();
            setBikeInfo(data);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        fetchData();
        fetchBikeData();
    }, []);


    const handleColorDropdownToggle = () => {
        setColorDropdownOpen(prevState => !prevState);
        setTypeDropdownOpen(false);
        setBrandDropdownOpen(false);
        setPriceDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };

    const handleTypeDropdownToggle = () => {
        setTypeDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setBrandDropdownOpen(false);
        setPriceDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };


    const handlePriceDropdownToggle = () => {
        setPriceDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setTypeDropdownOpen(false);
        setBrandDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };

    const handleEngineCCDropdownToggle = () => {
        setEngineCCDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setTypeDropdownOpen(false);
        setBrandDropdownOpen(false);
        setPriceDropdownOpen(false);
    };
    function filterdata(min: number, max: number) {
        const filteredData = datas.filter(item => {
            const displacement = parseInt(item.engine_displacement);
            return displacement >= min && displacement <= max;
        });
        setData(filteredData);

    }
    return (
        <div>
            <section id='moto-home'>
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/category-images/2024/tall-hero/index-header-thd.jpg?impolicy=myresize&rw=1280" alt="moto-img1" />
                <h1>2024<br /> MOTORCYCLES</h1>
            </section>
            <section id='moto-bikes' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <ul style={{ display: 'flex', gap: '16px' }}>
                    <li>SEE ALL</li>
                    <li>HARLEY-DAVIDSON X</li>
                    <li>GRAND AMERICAN TOURING</li>
                    <li>CRUISER</li>
                    <li>ADVENTURE TOURING</li>
                    <li>SPORT</li>
                </ul>
                <div className="button-container" onMouseEnter={() => setSpanHovered(true)} onMouseLeave={() => setSpanHovered(false)}>
                    <button>HELP ME CHOOSE</button>
                    <span className={spanHovered ? 'arrow-right hovered' : 'arrow-right'}>&rarr;</span>
                </div>
            </section>
            <hr style={{ marginLeft: '7px', marginRight: '7px' }}></hr>
            <div style={{ display: 'flex', gap: '200px' }}>
                <section style={{ marginLeft: '7.5%', marginTop: '0px' }}>
                    <h2>Filter:</h2>
                </section>

                <section className='filter' style={{ marginTop: '20px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <button style={{ width: '100px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} onClick={handleColorDropdownToggle}>Color<span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isColorDropdownOpen &&
                            <section id='color-drop'>
                                <div>
                                    <p>Black</p>
                                    <p>Grey</p>
                                    <p>Orange</p>
                                    <p>Blue</p>
                                </div>
                                <div>
                                    <p>Green</p>
                                    <p>Red</p>
                                    <p>Yellow</p>
                                    <p>Silver</p>
                                </div>
                            </section>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='type-filter'>
                        <button style={{ width: '100px', background: 'white', display: 'flex', alignItems: 'center' }} onClick={handleTypeDropdownToggle}>Types <span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isTypeDropdownOpen &&
                            <section id='biketype' style={{ display: 'flex', flexWrap: 'wrap', width: '150px' }}>
                                {
                                    biketypes.types.length > 0 &&
                                    biketypes.types.map((type, index) => {
                                        return <p key={index}>{type}</p>;
                                    })
                                }
                            </section>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='pricefilter'>
                        <button style={{ width: '130px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} onClick={handlePriceDropdownToggle}>Price Range<span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isPriceDropdownOpen &&
                            <section id='price-range-drop'>
                                <p>$20000-$25000</p>
                                <p>$25000-$30000</p>
                                <p>$35000-$40000</p>
                                <p>$45000-500000</p>
                            </section>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='ccfilter'>
                        <button style={{ width: '130px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} onClick={handleEngineCCDropdownToggle}>Engine CC<span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isEngineCCDropdownOpen &&
                            <section id='engine-cc-drop'>
                                <input type="radio" name='name' onChange={() => filterdata(500, 1000)} />
                                <label htmlFor="cc">500cc-1000cc</label><br></br>
                                <input type="radio" name='name' onChange={() => filterdata(500, 1000)} />
                                <label htmlFor="cc1">1000cc-1500cc</label><br></br>
                                <input type="radio" name='name' onChange={() => filterdata(500, 1000)} />
                                <label htmlFor="cc2">1500cc-2000cc</label>

                            </section>
                        }
                    </div>
                </section>
            </div>
            <div>
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-h-d-x-440/story/x440-header-thd.jpg?impolicy=myresize&rw=1800" alt="img-2" style={{width:'100%'}}/>
            </div>
            <div style={{ height: '500px', backgroundColor: '#EEECEB' ,marginTop:'0px', position:'relative', width:'100%'}}>
                <section  style={{position:'absolute', top:'50px', left:'50px', width:'400px', }} className={imagehover?"imagehover":"notimagehover"} onMouseEnter={()=>setImageHover(true)} onMouseLeave={()=>{setImageHover(false)}}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors === "img1" ? img1 : colors === "img2" ? img2 : colors === "img3" ? img3 : img4} alt="bikeimage" style={{width:'100%'}} />
                            <h2 style={{textAlign:'center'}}>{bikeInfo[0].Title}</h2>
                            <p style={{textAlign:'center'}}>{bikeInfo[0].Price}</p>
                            <section >
                                <p style={{textAlign:'center'}}>4 colors Available</p>
                            </section>
                            <section className='diff-color' style={{ display: 'flex', gap: '4px', justifyContent:'center'}}>
                                <div onMouseEnter={() => setColors("img1")}></div>
                                <div onMouseEnter={() => setColors("img2")}></div>
                                <div onMouseEnter={() => setColors("img3")}></div>
                                <div onMouseEnter={() => setColors("img4")}></div>
                            </section>
                            <p style={{textAlign:'center'}}>Active color:{colors === "img1" ? "Blue Burst" : colors === "img2" ? "White Onyx Pearl" : colors === "img3" ? "Alpine Green" : "Whiskey Fire"}</p>
                        </>
                    }
                </section>
            </div>
        </div>
    );
}

export default MotorCycle;
