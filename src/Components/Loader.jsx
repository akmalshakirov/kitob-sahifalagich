import React, { useState, useEffect } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 222);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-container ${loading ? "active" : ""}`}>
            <div className='spinner'></div>
        </div>
    );
};

export default Loader;
