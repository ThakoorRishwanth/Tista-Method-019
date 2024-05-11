import React, { useContext, useRef, useState } from 'react';
import { BikeDetailsContext } from './Context';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react';

function Bikes() {
    // Destructure the context value
    const { bikeDetails, setBikeDetails } = useContext(BikeDetailsContext);
    const colors = bikeDetails.color;
    const url = bikeDetails.activeurl;
    const [urls, setColor] = useState<string>(url);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [lastMouseX, setLastMouseX] = useState<number>(0);
    const ref = useRef(null);
    const iframeRef = useRef(null);
    console.log(bikeDetails, "bikedetails")

    function changecolor(ind: number,): void {
        let newUrl = bikeDetails.urls.filter((ele, inds) => {
            if (ind == inds) {
                return ele;
            }
        })
        setColor(newUrl);
        console.log(urls)
    }
    const handleMouseDown = (event) => {
        setIsMouseDown(true);
        setLastMouseX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const currentMouseX = event.clientX;
            const movementX = currentMouseX - lastMouseX;
            const rotationIncrement = movementX * 0.5; // Adjust rotation speed as needed

            const newRotation = (ref.current.style.transform
                ? parseInt(ref.current.style.transform.replace('rotateY(', '').replace('deg)', ''), 10)
                : 0) + rotationIncrement;

            ref.current.style.transform = `rotateY(${newRotation}deg)`;
            setLastMouseX(currentMouseX);
        }
    };


    const handleMouseUp = () => {
        setIsMouseDown(false);
    };
    const handleVideoEnded = () => {
        iframeRef.current.src += 'https://www.youtube.com/embed/428oA3WiKk8?autoplay=1&mute=1&controls=0';
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    mute="1"
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
                    <div style={{ marginLeft: '10%', color: 'black', fontFamily: 'sans-serif', marginTop: '10px' }}>Trim:{colors}<div style={{ width: '20px', height: '20px', backgroundColor: colors, border: '1px solid black', marginLeft: '2px' }}></div></div>
                    <section id='colors'>
                        <div style={{ display: 'flex', marginTop: '8px' }}>Colors:
                            {bikeDetails.colors.map((ele, ind) => {
                                return <div className="bikecolors" style={{ width: '20px', height: '20px', backgroundColor: ele, border: '1px solid black', marginLeft: '4px' }} onClick={() => changecolor(ind)}></div>
                            })}
                        </div>
                        <div className='borders'></div>
                    </section>
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split pricebtn" data-bs-toggle="dropdown" aria-expanded="false">
                        Prices <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu pricebtnbtn">
                        <li>Base color: {bikeDetails.price}</li>
                        <li>vivid color:{bikeDetails.prive} +15000 INR</li>
                    </ul>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Test Ride</div>
                            </div>
                            <div id="flush-collapsetwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Financing </div>
                            </div>
                        </div>

                    </div>


                </aside>
            </section >
        </>
    );
}

export default Bikes;

