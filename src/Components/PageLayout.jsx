import React, { useEffect, useState } from "react";

const PageLayout = () => {
    const [startPage, setStartPage] = useState("");
    const [endPage, setEndPage] = useState("");
    const [format, setFormat] = useState("book");

    // (function () {
    //     let devtoolsOpen = false;
    //     const threshold = 160;

    //     setInterval(function () {
    //         const widthThreshold =
    //             window.outerWidth - window.innerWidth > threshold;
    //         const heightThreshold =
    //             window.outerHeight - window.innerHeight > threshold;

    //         if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
    //             devtoolsOpen = true;
    //             document.body.style.overflow = "visible";
    //         } else if (!widthThreshold && !heightThreshold && devtoolsOpen) {
    //             devtoolsOpen = false;
    //             document.body.style.overflow = "hidden";
    //         }
    //     }, 100);
    // })();

    const [cursorPosition, setCursorPosition] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateCursor);
        // window.addEventListener("mouseleave");
        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return (
        <div className='wrapper'>
            <div className='shape shape1'></div>
            <div className='shape shape2'></div>
            <div className='shape shape3'></div>
            <div
                className='cursor-following'
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
                        Kitob sahifalagich{" "}
                        <img src='src/Images/icon.png' alt='icon' />
                    </h1>
                </header>

                <div className='form-section'>
                    <div className='printer-icon'>
                        <button>🖨️</button>
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
                    <b>
                        ⚠️ Eslatma: Kitobcha shakliga keltirish uchun sahifalar
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
                    © Barcha huquqlar himoyalangan.
                    <div className='footer-div'>
                        <p> Sayt yaratuvchisi: </p>
                        <a href='https://www.limon.uz/' target='_blank'>
                            <img src='src/Images/limon.png' alt='limon image' />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PageLayout;
