import React, { useEffect, useState } from "react";
import PageLayout from "./Components/PageLayout";
import Loader from "./Components/Loader";

function App() {
    return (
        <div className='app'>
            <Loader />
            <PageLayout />
        </div>
    );
}

export default App;
