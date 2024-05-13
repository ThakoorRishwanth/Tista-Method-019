import React, { useContext, useRef, useState } from 'react';
import { BikeDetailsContext } from './Context';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import '../css/bike.css'
import { Link } from 'react-router-dom';

function Bikes(): JSX.Element {
    // Destructure the context value
    const { bikeDetails } = useContext(BikeDetailsContext);
    const colors: string = bikeDetails.activecolor;
    const url: string = bikeDetails.activeurl;
    const [urls, setColor] = useState<string>(url);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [lastMouseX, setLastMouseX] = useState<number>(0);
    const ref = useRef<HTMLImageElement>(null); 
    const iframeRef = useRef<HTMLIFrameElement>(null);
    console.log(bikeDetails, "bikedetails")
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordions: { title: string, content: { [key: string]: string }[] }[] = [
        { title: 'Dimensions', content: [{ "LENGTH": "2,415 mm" }, { "SEAT HEIGHT": "680 mm" }, { "GROUND CLEARANCE": "120 mm" }, { "RAKE": "30" }] },
        { title: 'Performance', content: [{ "LENGTH": "2,415 mm" }, { "SEAT HEIGHT": "680 mm" }, { "GROUND CLEARANCE": "120 mm" }, { "RAKE": "30" }] },
        { title: 'Engine', content: [{ "LENGTH": "2,415 mm" }, { "SEAT HEIGHT": "680 mm" }, { "GROUND CLEARANCE": "120 mm" }, { "RAKE": "30" }] },
        { title: 'Drive Train', content: [{ "LENGTH": "2,415 mm" }, { "SEAT HEIGHT": "680 mm" }, { "GROUND CLEARANCE": "120 mm" }, { "RAKE": "30" }] }
    ];

    function changecolor(ind: number): void {
        const newUrl = bikeDetails.urls.filter((ele: string, inds: number) => {
            if (ind === inds) {
                return ele;
            }
        })
        setColor(newUrl[0]);
        console.log(urls)
    }

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
        setIsMouseDown(true);
        setLastMouseX(event.clientX);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (isMouseDown && ref.current) {
            const currentMouseX = event.clientX;
            const movementX = currentMouseX - lastMouseX;
            const rotationIncrement = movementX * 0.5; // Adjust rotation speed as needed

            const newRotation = (ref.current.style.transform
                ? parseInt(ref.current.style.transform.replace('rotateY(', '').replace('deg)', ''), 10)
                : 0) + rotationIncrement;

            if (ref.current) {
                ref.current.style.transform = `rotateY(${newRotation}deg)`;
            }
            setLastMouseX(currentMouseX);
        }
    };

    const toggleAccordion = (index: number): void => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const handleMouseUp = (): void => {
        setIsMouseDown(false);
    };

    const handleVideoEnded = (): void => {
        if (iframeRef.current) {
            iframeRef.current.src += 'https://www.youtube.com/embed/428oA3WiKk8?autoplay=1&mute=1&controls=0';
        }
    };

    console.log(colors)
    return (
        <>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/428oA3WiKk8?autoplay=1&mute=1&controls=0"
                    title="Harley Davidson"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; muted"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    ref={iframeRef}
                    onEnded={handleVideoEnded}
                ></iframe>


            </div >
            <section id='imageshow'>
                <div onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp} >
                    <img src={urls} alt="bikeimage1" ref={ref} />
                </div>
                <aside>
                    <h1>{bikeDetails.title}</h1>
                    <p>{bikeDetails.price}</p>
                    <div className='borders'></div>
                    <div style={{ marginLeft: '10%', color: 'black', fontFamily: 'fantasy', marginTop: '10px', fontSize: '20px' }}>Trim:{colors}<div style={{ width: '20px', height: '20px', backgroundColor: colors, border: '1px solid black', marginLeft: '2px' }}></div></div>
                    <section id='colors'>
                        <div style={{ display: 'flex', marginTop: '18px', color: 'black', fontFamily: 'fantasy', fontSize: '20px' }}>Colors:
                            {bikeDetails.colors.map((ele: string, ind: number) => {
                                return <div className="bikecolors" key={ind} style={{ width: '20px', height: '20px', backgroundColor: ele, border: '1px solid black', marginLeft: '4px', marginTop: '6px' }} onClick={() => changecolor(ind)}></div>
                            })}
                        </div>
                        <div className='borders'></div>
                    </section>

                    <Accordion allowToggle>
                        <AccordionItem mt={'15px'} w={'200px'}>
                            <h2>
                                <AccordionButton ml={'45px'} mr={'8px'} w={'200px'}>
                                    <Box as='span' flex='1' textAlign='left' fontSize='17px'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} border={'1px solid black'} cursor={'pointer'} textAlign={'center'} ml={'60px'}>
                                Base color: {bikeDetails.price}
                            </AccordionPanel>
                            <AccordionPanel pb={4} border={'1px solid black'} cursor={'pointer'} textAlign={'center'} ml={'60px'}>
                                vivid color:{bikeDetails.price} +15000 INR
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem w={'200px'}>
                            <h2>
                                <AccordionButton ml={'45px'} mr={'8px'}>
                                    <Box as='span' flex='1' textAlign='left' fontSize='17px'>
                                        Shopping Tool
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <Link to={'/users'}><AccordionPanel pb={4} border={'1px solid black'} cursor={'pointer'} textAlign={'center'} ml={'65px'} >
                                Test Ride
                            </AccordionPanel></Link>
                            <Link to={'/user'}><AccordionPanel pb={4} border={'1px solid black'} cursor={'pointer'} textAlign={'center'} ml={'65px'}>
                                Finance
                            </AccordionPanel></Link>
                        </AccordionItem>
                    </Accordion>

                </aside>
            </section >
            <section id='heroine3' style={{ marginTop: '10px' }}>
                <img width={'100%'} src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/story/hc-mid-thd.jpg?impolicy=myresize&rw=1000" alt="bike-img2" />
            </section>
            <section id='features'>
                <h1>Key Features</h1>
                <div>
                    <div>
                        <img src="https://www.harley-davidson.com/content/dam/h-d/images/bike-description/uprightPosition.svg" alt="" />
                        <p>Upright riding position</p>
                    </div>
                    <div>
                        <img src="https://www.harley-davidson.com/content/dam/h-d/images/bike-description/floorBoardFootControls.svg" alt="" />
                        <p>Floorboards</p>
                    </div>
                    <div>
                        <img src="https://www.harley-davidson.com/content/dam/h-d/images/bike-description/passengerSeat.svg" alt="" />
                        <p>Passenger seat</p>
                    </div>
                    <div>
                        <img src="https://www.harley-davidson.com/content/dam/h-d/images/bike-description/saddlebagStorage.svg" alt="" />
                        <p>Saddlebags</p>
                    </div>
                    <div>
                        <img src="https://www.harley-davidson.com/content/dam/h-d/images/bike-description/detachableFairing.svg" alt="" />
                        <p>Detachable windshield</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="accordion-container">
                    {accordions.map((accordion, index) => (
                        <div className="accordion" key={index}>
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <span className="accordion-title">{accordion.title}</span>
                                {openAccordion === index ? <FaMinus /> : <FaPlus />}
                            </div>
                            {openAccordion === index && (
                                <div className="accordion-content">
                                    <ul>
                                        {accordion.content.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <strong>{Object.keys(item)[0]}:</strong> {Object.values(item)[0]}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Bikes;
