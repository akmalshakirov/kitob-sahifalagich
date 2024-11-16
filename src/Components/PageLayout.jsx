import React, { useEffect, useRef, useState } from "react";
import limonLogo from "../Images/limon.png";
import siteIcon from "../Images/icon.png";
import printerIcon from "../Images/printer.png";
import warningIcon from "../Images/warning.png";

const PageLayout = () => {
    const [startPage, setStartPage] = useState("");
    const [endPage, setEndPage] = useState("");
    const [format, setFormat] = useState("book");
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [shapesClasses, setShapesClasses] = useState([
        "shape1",
        "shape2",
        "shape3",
    ]);

    useEffect(() => {
        const shapes = document.querySelectorAll(".shape");
        const wrapperRect = wrapperRef.current.getBoundingClientRect();

        shapes.forEach((shape, index) => {
            const rect = shape.getBoundingClientRect();

            if (
                rect.top < wrapperRect.top ||
                rect.bottom > wrapperRect.bottom ||
                rect.left < wrapperRect.left ||
                rect.right > wrapperRect.right
            ) {
                setShapesClasses((prev) => {
                    const newClasses = [...prev];
                    newClasses[index] += " no-animation";
                    return newClasses;
                });
            }
        });
    }, []);

    const handleMouseLeave = (e) => {
        e.classList.add("none-follow");
    };

    const handleMouseEnter = () => {
        setIsMouseLeave(false);
    };

    useEffect(() => {
        const checkDevToolsOpen = () => {
            const devToolsOpen =
                window.outerWidth - window.innerWidth > 100 ||
                window.outerHeight - window.innerHeight > 100;
            setIsDevToolsOpen(devToolsOpen);
        };

        window.addEventListener("resize", checkDevToolsOpen);

        checkDevToolsOpen();

        return () => window.removeEventListener("resize", checkDevToolsOpen);
    }, []);

    const [cursorPosition, setCursorPosition] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateCursor);
        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return (
        <div className='wrapper' ref={wrapperRef}>
            {shapesClasses.map((shapeClass, index) => (
                <div key={index} className={`shape ${shapeClass}`}></div>
            ))}
            <div
                className={`cursor-following ${
                    isDevToolsOpen ? "none-follow" : ""
                }`}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                }}
            />{" "}
            <div className='container'>
                <header className='header'>
                    <h1>
                        Kitob sahifalagich <img src={siteIcon} alt='icon' />
                    </h1>
                </header>

                <div className='form-section'>
                    <div className='printer-icon'>
                        <button>
                            <img src={printerIcon} alt='printer' />
                        </button>
                    </div>
                    <div className='form-inputs'>
                        <label>
                            Sahifalashning boshlanish soni
                            <input
                                type='number'
                                value={startPage}
                                onChange={(e) => setStartPage(e.target.value)}
                                placeholder='Boshlanish soni'
                            />
                        </label>

                        <label>
                            Sahifalashning tugash soni
                            <input
                                type='number'
                                value={endPage}
                                onChange={(e) => setEndPage(e.target.value)}
                                placeholder='Tugash soni'
                            />
                        </label>

                        <div className='format-section'>
                            <h3>Shakli:</h3>
                            <input
                                type='radio'
                                id='radio'
                                value='book'
                                name='radio'
                                checked={format === "book"}
                                onChange={() => setFormat("book")}
                            />
                            <label htmlFor='radio'>Kitob shaklida</label>

                            <input
                                type='radio'
                                id='radio2'
                                value='double'
                                name='radio'
                                checked={format === "double"}
                                onChange={() => setFormat("double")}
                            />
                            <label htmlFor='radio2'>Ikki tomonlama</label>
                        </div>
                    </div>
                </div>

                <div className='warning'>
                    <img src={warningIcon} alt='warning' />
                    <b>
                        Eslatma: Kitobcha shakliga keltirish uchun sahifalar
                        soni 4 ga bo'linadigan bo'lishi shart!
                    </b>
                </div>

                <div className='page-sides'>
                    <div className='side'>
                        <h3>Old tomoni</h3>
                        <textarea />
                    </div>
                    <div className='side'>
                        <h3>Orqa tomoni</h3>
                        <textarea />
                    </div>
                </div>

                <footer className='footer'>
                    <p>© Barcha huquqlar himoyalangan.</p>
                    <div className='footer-div'>
                        <p> Sayt yaratuvchisi: </p>
                        <a href='https://www.limon.uz/' target='_blank'>
                            <img
                                src={limonLogo}
                                alt='limon image'
                                className='limon-logotip'
                            />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PageLayout;
