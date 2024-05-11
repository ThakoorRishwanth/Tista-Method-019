import { Spinner } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bikes from './Bikes';
import { BikeDetailsContext } from './Context';

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
interface initial {
    title: string;
    activeurl: string;
    price: string;
    activecolor: string;
    colors: string[];
    urls: string[];
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
const obj:initial={};
function MotorCycle() {
    const { user_id } = useParams();
    const [spanHovered, setSpanHovered] = useState<boolean>(false);
    const [isColorDropdownOpen, setColorDropdownOpen] = useState<boolean>(false);
    const [isTypeDropdownOpen, setTypeDropdownOpen] = useState<boolean>(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState<boolean>(false);
    const [isEngineCCDropdownOpen, setEngineCCDropdownOpen] = useState<boolean>(false);
    const [imagehover, setImageHover] = useState<boolean>(false);
    const [imagehover2, setImageHover2] = useState<boolean>(false);
    const [imagehover3, setImageHover3] = useState<boolean>(false);
    const [imagehover4, setImageHover4] = useState<boolean>(false);
    const [imagehover5, setImageHover5] = useState<boolean>(false);
    const [datas, setData] = useState<BikeData[]>([]);
    const [biketypes, setType] = useState<typeData>({ types: [] });
    const [bikeInfo, setBikeInfo] = useState<bikeInfo[]>([]);
    const [colors, setColors] = useState<string>('');
    const [colors2, setColors2] = useState<string>('');
    const [colors3, setColors3] = useState<string>('')
    const [colors4, setColors4] = useState<string>('')
    const [colors5, setColors5] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");
    const [value4, setValue4] = useState<string>("");
    const [filterdata, setFilterDatas] = useState<BikeData[]>([])
    const [btnclick1, setbtnClick1] = useState<boolean>(false);
    const [btnclick2, setbtnClick2] = useState<boolean>(false);
    const [btnclick3, setbtnClick3] = useState<boolean>(false);
    const [btnclick4, setbtnClick4] = useState<boolean>(false);
    const [prevFilterData, setPrevFilterData] = useState<BikeData[]>([]);
    const [query1, setQuery1] = useState("");
    const [query2, setQuery2] = useState("");
    const [query3, setQuery3] = useState("");
    const [query4, setQuery4] = useState("");
    let{ bikeDetails, setBikeDetails}=useContext(BikeDetailsContext);
    const imageurl1: string[] = ['https://cdp.azureedge.net/products/USA/HD/2023/MC/TOUR/ROAD_GLIDESUP1-SUP/50/REEF_BLUE/2000000001.jpg',
        "https://cdn.powergo.ca/media/catalog/2024/4/a752993f2bc147ba820e8af34977e4ee_1024x768_webp/2024-harley-davidson-road-glide-white-onyx-pearl-chrome-finish-0.webp",
        "https://cdp.azureedge.net/products/USA/HD/2022/MC/TOUR/ROAD_GLIDE_LIMITED/50/MINERAL_GREEN_METALLIC_CHROME_OPTION/2000000001.jpg",
        "https://cdp.azureedge.net/products/USA/HD/2022/MC/CVO/CVO_ROAD_GLIDE/50/WICKED_ORANGE_PEARL/2000000002.jpg"
    ];

    const imageurl2: string[] = ['https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-street-glide/2024-street-glide-m13/360/2024-street-glide-m13-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-street-glide/2024-street-glide-m07/360/2024-street-glide-m07-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-street-glide/2024-street-glide-m14/360/2024-street-glide-m14-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-street-glide/2024-street-glide-m12/360/2024-street-glide-m12-motorcycle-01.jpg?impolicy=myresize&rw=1600'
    ]
    const imageurl3: string[] = ['https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-fat-bob-114/2024-fat-bob-114-m04b/360/2024-fat-bob-114-m04b-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-fat-bob-114/2024-fat-bob-114-m02b/360/2024-fat-bob-114-m02b-motorcycle-01.jpg?impolicy=myresize&rw=1600'
    ]
    const imageurl4: string[] = ['https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m04/360/2024-heritage-classic-114-m04-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m02/360/2024-heritage-classic-114-m02-motorcycle-01.jpg?impolicy=myresize&rw=1600',


    ]
    const imageurl5: string[] = ['https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-breakout-117/2024-breakout-117-m04/360/2024-breakout-117-m04-motorcycle-01.jpg?impolicy=myresize&rw=1600',
        'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-breakout-117/2024-breakout-117-m02/360/2024-breakout-117-m02-motorcycle-01.jpg?impolicy=myresize&rw=1600'


    ]
    const img1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcwT3zy-XTEYSnKNltrpIoGmaLRCLg3QZHw&usqp=CAU";
    const img2: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaz-JbqYbsUy9Vc7fCv9OIekAufHh4MVFAQ&usqp=CAU"
    const img3: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHgkondoSCmDLzKFOY8-8OGXi1rL2mpQyrQ&usqp=CAU"
    const img4: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeGKDxFU-JDKZOf8i9M-L6OT3XA2Yfh9KRA&usqp=CAU&reload=on"
    console.log(user_id);
    async function fetchData() {
        setLoading(true);
       
        try {
            const res = await fetch(`https://tista-method-019-1.onrender.com/motorcycles?${query1}&&${query2}&&${query3}`);
            const data = await res.json();
            setData(data);
            setFilterDatas(data);
            const uniqueTypes = Array.from(new Set(data.map(ele => ele.type)));
            setType({ types: uniqueTypes });
            setLoading(false)
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
        fetchBikeData();
        fetchData()
    }, [query1,query2,query3]);

    console.log(datas);
    const handleColorDropdownToggle = () => {
        setColorDropdownOpen(prevState => !prevState);
        setTypeDropdownOpen(false);
        setPriceDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };

    const handleTypeDropdownToggle = () => {
        setTypeDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setPriceDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };


    const handlePriceDropdownToggle = () => {
        setPriceDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setTypeDropdownOpen(false);
        setEngineCCDropdownOpen(false);
    };

    const handleEngineCCDropdownToggle = () => {
        setEngineCCDropdownOpen(prevState => !prevState);
        setColorDropdownOpen(false);
        setTypeDropdownOpen(false);
        setPriceDropdownOpen(false);
    };





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
                                    <p onClick={() => {
                                        console.log("Clicked Black"); // Log statement to check if the click event is firing
                                        setValue2('Black');
                                        setbtnClick2(true);
                                        setQuery2("color=Black");
                                       
                                    }}>Black</p>
                                    <p onClick={() => {
                                        console.log("Clicked Grey"); // Log statement to check if the click event is firing
                                        setValue2('Grey');
                                        setbtnClick2(true);
                                        setQuery2("color=Grey");
                                       
                                    }}>Grey</p>
                                    <p onClick={() => {
                                        console.log("Clicked Orange"); // Log statement to check if the click event is firing
                                        setValue2('Orange');
                                        setbtnClick2(true);
                                        setQuery2("color=Orange");
                                    }}>Orange</p>
                                    <p onClick={() => {
                                        console.log("Clicked Blue"); // Log statement to check if the click event is firing
                                        setValue2('Blue');
                                        setbtnClick2(true);
                                        setQuery2("color=Blue");
                                    }}>Blue</p>


                                </div>
                                <div>
                                    <p onClick={() => {setValue2('Green');setbtnClick2(true);setQuery2("color=Green"); }}>Green</p>
                                    <p onClick={() => {setValue2('Green');setbtnClick2(true);setQuery2("color=Red"); }}>Red</p>
                                    <p onClick={() => {setValue2('Green');setbtnClick2(true);setQuery2("color=Yellow"); }}>Yellow</p>
                                    <p onClick={() => {setValue2('Green');setbtnClick2(true);setQuery2("color=Silver"); }}>Silver</p>
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
                        <button style={{ width: '130px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} onClick={handlePriceDropdownToggle} >Price Range<span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isPriceDropdownOpen &&
                            <section id='price-range-drop'>
                                <p onClick={() => { setValue('Rs500000-$1000000'); setbtnClick1(true); setQuery1("price_gte=500000&price_lte=1000000") }}>Rs500000-Rs1000000</p>
                                <p onClick={() => { setValue('Rs1000000-$1500000'); setbtnClick1(true); setQuery1("price_gte=1000000&price_lte=1500000") }}>Rs1000000-Rs1500000</p>
                                <p onClick={() => { setValue('Rs1500000-$2000000'); setbtnClick1(true); setQuery1("price_gte=1500000&price_lte=20000000") }}>Rs1500000-Rs2000000</p>
                            </section>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='ccfilter'>
                        <button style={{ width: '130px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} onClick={handleEngineCCDropdownToggle}>Engine CC<span style={{ marginLeft: '3px' }} className="material-symbols-outlined">expand_more</span></button>
                        {isEngineCCDropdownOpen &&
                            <section id='engine-cc-drop'>
                                <input type="radio" name='name' onClick={()=>{setValue3("7cc-500cc");setQuery3("engine_displacement_gte=7&engine_displacement_lte=500");setbtnClick3(true)}} />
                                <label htmlFor="cc">7cc-500cc</label><br></br>
                                <input type="radio" name='name' onClick={()=>{setValue3("500cc-1000cc");setQuery3("engine_displacement_gte=501&engine_displacement_lte=1000");setbtnClick3(true)}}  />
                                <label htmlFor="cc1">500cc-1000cc</label><br></br>
                                <input type="radio" name='name' onClick={()=>{setValue3("1000cc-2000cc");setQuery3("engine_displacement_gte=1000&engine_displacement_lte=2000");setbtnClick3(true)}}  />
                                <label htmlFor="cc2">1000cc-2000cc</label>

                            </section>
                        }
                    </div>
                </section>
                <div className={isLoading ? "Loading loading-spinner-container" : "notLoading"}>
                    {isLoading &&
                        <div className='loading-spinner'></div>

                    }
                </div>
            </div>
            <>
                {datas.length > 0 && datas.length < 20 &&
                    <div style={{ width: '100%', height: '70px', backgroundColor: '#EEECEB', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        {btnclick1 ? (
                            <div className={btnclick1 ? "filterdata" : ''}>
                                <span className={btnclick1 ? "btn1cliked material-symbols-outlined" : ""} onClick={() => { setbtnClick1(false);setQuery1("")}}>close</span>
                                <p>{value}{'('}{datas.length}{')'}</p>
                            </div>
                        ) : null}
                        {btnclick2 ? (
                            <div className={btnclick2 ? "filterdata2" : ''}>
                                <span className={btnclick2 ? "btn1cliked2 material-symbols-outlined" : ""} onClick={() => { setbtnClick2(false); setQuery2("")}}>close</span>
                                <p>{value2}{'('}{datas.length}{')'}</p>
                            </div>
                        ) : null}
                        {btnclick3 ? (
                            <div className={btnclick3 ? "filterdata3" : ''}>
                                <span className={btnclick3 ? "btn1cliked3 material-symbols-outlined" : ""} onClick={() => { setbtnClick3(false); setQuery3("")}}>close</span>
                                <p>{value3}{'('}{datas.length}{')'}</p>
                            </div>
                        ) : null}
                    </div>

                }
            </>
            <div style={{ position: 'relative' }}>
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-h-d-x-440/story/x440-header-thd.jpg?impolicy=myresize&rw=1800" alt="img-2" style={{ width: '100%' }} />
                <div style={{ position: 'absolute', top: '350px', left: '100px', color: 'white' }}>
                    <h1>Harley-Davidson X™ </h1>
                    <p>Lightweight and agile, built to<br /> conquer the urban grid.</p>
                </div>
            </div>
            <div style={{ height: '500px', backgroundColor: '#EEECEB', marginTop: '0px', position: 'relative', width: '100%' }}>
                <section style={{ position: 'absolute', top: '50px', left: '50px', width: '400px', }} className={imagehover ? "imagehover" : "notimagehover"} onMouseEnter={() => setImageHover(true)} onMouseLeave={() => { setImageHover(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors === "img1" ? img1 : colors === "img2" ? img2 : colors === "img3" ? img3 : img4} alt="bikeimage" style={{ width: '100%' }} />
                            <h2 style={{ textAlign: 'center' }}>{bikeInfo[0].Title}</h2>
                            <p style={{ textAlign: 'center' }}>{bikeInfo[0].Price}</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>4 colors Available</p>
                            </section>
                            <section className='diff-color' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors("img1")} ></div>
                                <div onMouseEnter={() => setColors("img2")}></div>
                                <div onMouseEnter={() => setColors("img3")}></div>
                                <div onMouseEnter={() => setColors("img4")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors === "img1" ? "Blue Burst" : colors === "img2" ? "White Onyx Pearl" : colors === "img3" ? "Alpine Green" : "Whiskey Fire"}</p>
                        </>
                    }
                </section>
            </div>
            <section style={{ position: 'relative' }}>
                <img style={{ width: '100%' }} src="https://www.harley-davidson.com/content/dam/h-d/images/category-images/2024/tall-hero/touring-thd.jpg?impolicy=myresize&rw=1800" alt="heroine-3" />
                <div style={{ position: 'absolute', top: '440px', left: '100px', color: 'white' }}>
                    <h1>Grand American Touring</h1>
                    <p>The category we've created from the ground up.<br /> Go the distance, in style. Discover the wide-open<br /> world and freedom for the soul on bikes only<br /> Harley-Davidson could build.</p>
                </div>
            </section>
            <div style={{ height: '500px', backgroundColor: '#EEECEB', marginTop: '0px', position: 'relative', width: '100%', display: 'flex', gap: '20px' }}>
                <section style={{ position: 'absolute', top: '50px', left: '550px', width: '400px', height: '400px' }} className={imagehover ? "imagehover" : "notimagehover"} onMouseEnter={() => setImageHover(true)} onMouseLeave={() => { setImageHover(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors === "img1" ? imageurl2[0] : colors === "img2" ? imageurl2[1] : colors === "img3" ? imageurl2[2] : imageurl2[3]} alt="bikeimage" style={{ width: '100%', height: "50%" }} />
                            <h2 style={{ textAlign: 'center' }}>{bikeInfo[2].Title}</h2>
                            <p style={{ textAlign: 'center' }}>{bikeInfo[2].Price}</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>4 colors Available</p>
                            </section>
                            <section className='diff-color' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors("img1")}
                                  
                                ></div>
                                <div onMouseEnter={() => setColors("img2")}></div>
                                <div onMouseEnter={() => setColors("img3")}></div>
                                <div onMouseEnter={() => setColors("img4")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors === "img1" ? "Blue Burst" : colors === "img2" ? "White Onyx Pearl" : colors === "img3" ? "Alpine Green" : "Whiskey Fire"}</p>
                        </>
                    }
                </section>
                <section style={{ position: 'absolute', top: '50px', left: '50px', width: '400px', height: '400px' }} className={imagehover2 ? "imagehover2" : "notimagehover2"} onMouseEnter={() => setImageHover2(true)} onMouseLeave={() => { setImageHover2(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors2 === "img11" ? imageurl1[0] : colors2 === "img22" ? imageurl1[1] : colors2 === "img33" ? imageurl1[2] : imageurl1[3]} alt="bikeimage" style={{ width: '100%', height: "50%" }} />
                            <h2 style={{ textAlign: 'center' }}>{bikeInfo[1].Title}</h2>
                            <p style={{ textAlign: 'center' }}>{bikeInfo[1].Price}</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>4 colors Available</p>
                            </section>
                            <section className='diff-color' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors2("img11")} onClick={()=>{
                                    setBikeDetails({
                                        title: bikeInfo[1].Title,
                                        activeurl: imageurl1[0],
                                        price: bikeInfo[1].Price,
                                        color: 'blue',
                                        colors: ['blue', 'white', 'green', 'orange'],
                                        urls: [
                                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcwT3zy-XTEYSnKNltrpIoGmaLRCLg3QZHw&usqp=CAU',
                                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaz-JbqYbsUy9Vc7fCv9OIekAufHh4MVFAQ&usqp=CAU',
                                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHgkondoSCmDLzKFOY8-8OGXi1rL2mpQyrQ&usqp=CAU',
                                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeGKDxFU-JDKZOf8i9M-L6OT3XA2Yfh9KRA&usqp=CAU&reload=on'
                                        ]
                                      })
                                }}></div>
                                <div onMouseEnter={() => setColors2("img22")}></div>
                                <div onMouseEnter={() => setColors2("img33")}></div>
                                <div onMouseEnter={() => setColors2("img44")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors2 === "img1" ? "Blue Burst" : colors2 === "img2" ? "White Onyx Pearl" : colors2 === "img3" ? "Alpine Green" : "Whiskey Fire"}</p>
                        </>
                    }
                </section>
            </div>
            <div style={{ position: 'relative' }}>
                <img style={{ width: '100%' }} src="https://www.harley-davidson.com/content/dam/h-d/images/category-images/2024/tall-hero/cruiser-thd.jpg?impolicy=myresize&rw=1800" alt="heroine-4" />
                <div style={{ position: 'absolute', top: '440px', left: '100px', color: 'white' }}>
                    <h1>Cruiser</h1>
                    <p>Authentic heritage meets modern technology for<br /> power, style, and the unadulterated riding<br /> experience – around town or along country roads.</p>
                </div>
            </div>
            <div style={{ height: '500px', backgroundColor: '#EEECEB', marginTop: '0px', position: 'relative', width: '100%', display: 'flex', gap: '20px' }}>
                <section style={{ position: 'absolute', top: '50px', left: '50px', width: '400px', height: '400px' }} className={imagehover3 ? "imagehover3" : "notimagehover3"} onMouseEnter={() => setImageHover3(true)} onMouseLeave={() => { setImageHover3(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors3 === "img5" ? imageurl3[0] : imageurl3[1]} alt="bikeimage" style={{ width: '100%', height: "50%" }} />
                            <h2 style={{ textAlign: 'center' }}>FAT BOB™ 114</h2>
                            <p style={{ textAlign: 'center' }}>Starting at INR. 21,49,000</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>2 colors Available</p>
                            </section>
                            <section className='diff-color2' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors3("img5")}></div>
                                <div onMouseEnter={() => setColors3("img6")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors3 === "img5" ? "Black" : "White Onyx Pearl"}</p>
                        </>
                    }
                </section>
                <section style={{ position: 'absolute', top: '50px', left: '520px', width: '400px', height: '400px' }} className={imagehover4 ? "imagehover4" : "notimagehover4"} onMouseEnter={() => setImageHover4(true)} onMouseLeave={() => { setImageHover4(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors4 === "img7" ? imageurl4[0] : imageurl4[1]} alt="bikeimage" style={{ width: '100%', height: "50%" }} />
                            <h2 style={{ textAlign: 'center' }}>HERITAGE CLASSIC</h2>
                            <p style={{ textAlign: 'center' }}>Starting at INR. 27,19,000</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>2 colors Available</p>
                            </section>
                            <section className='diff-color2' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors4("img7")}></div>
                                <div onMouseEnter={() => setColors4("img8")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors4 === "img7" ? "Black" : "White Onyx Pearl"}</p>
                        </>
                    }
                </section>
                <section style={{ position: 'absolute', top: '50px', left: '1000px', width: '400px', height: '400px' }} className={imagehover5 ? "imagehover5" : "notimagehover5"} onMouseEnter={() => setImageHover5(true)} onMouseLeave={() => { setImageHover5(false) }}>
                    {bikeInfo.length > 0 &&
                        <>
                            <img src={colors5 === "img9" ? imageurl5[0] : imageurl5[1]} alt="bikeimage" style={{ width: '100%', height: "50%" }} />
                            <h2 style={{ textAlign: 'center' }}>FAT BOB™ 114</h2>
                            <p style={{ textAlign: 'center' }}>Starting at INR. 30,99,000</p>
                            <section >
                                <p style={{ textAlign: 'center' }}>2 colors Available</p>
                            </section>
                            <section className='diff-color2' style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                <div onMouseEnter={() => setColors5("img9")}></div>
                                <div onMouseEnter={() => setColors5("img10")}></div>
                            </section>
                            <p style={{ textAlign: 'center' }}>Active color:{colors5 === "img9" ? "Black" : "White Onyx Pearl"}</p>
                        </>
                    }
                </section>
            </div>
            <div id='bottomPage'>
                <section>
                    <div>
                        <h1>Go soul searching</h1>
                    </div>
                    <div> <p>From stripped-down bobbers to full-fairing touring, we can help find the right bike for you.</p></div>
                    <div> <button>HELP ME CHOOSE</button></div>



                </section>
                <section>
                    <h1>Explore all 2023 Motorcycles</h1>
                    <p>Celebrate a legacy of power, style, and 120 years of innovation.</p>
                    <div className="button-container" onMouseEnter={() => setSpanHovered(true)} onMouseLeave={() => setSpanHovered(false)}>
                        <button>SEE THE BIKES</button>
                        <span className={spanHovered ? 'arrow-right hovered' : 'arrow-right'}>&rarr;</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MotorCycle;
