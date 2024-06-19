import React, { useEffect, useState } from "react";
import "~/assets/css/loading.css";

const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 1500);
    });
    return (
        <div className="loader-wrapper">
            {!loading && <img src="/image/TCDKTTT.jpg" alt="" width={300} height={300} />}
            <div className="loader"></div>
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
    );
};

export default LoadingScreen;
