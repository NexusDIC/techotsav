"use client";

import React from "react";

const Prizes: React.FC = () => {
    return (
        <div className="prizes-container">
            <h1 className="overall-title text-4xl sm:text-5xl text-center text-white font-bold mb-8 text-shadow-2">
                Prize Pool up to 25000 Rupees
            </h1>
            <div className="prizes grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1st Prize (On small screens, show this first) */}
                <div className="prize-item text-center order-1 md:order-2">
                    <img src="/imgs/first.png" alt="1st Prize" className="prize-image mx-auto transition-transform duration-500 ease-in-out transform hover:scale-105" />
                    <h2 className="prize-title text-4xl sm:text-5xl text-center text-white font-bold mb-8 text-shadow-2">
                        1st Prize
                    </h2>
                </div>

                {/* 2nd Prize */}
                <div className="prize-item text-center order-2 md:order-1">
                    <img src="/imgs/second.png" alt="2nd Prize" className="prize-image mx-auto transition-transform duration-500 ease-in-out transform hover:scale-105" />
                    <h2 className="prize-title text-4xl sm:text-5xl text-center text-white font-bold mb-8 text-shadow-2">
                        2nd Prize
                    </h2>
                </div>

                {/* 3rd Prize */}
                <div className="prize-item text-center order-3">
                    <img src="/imgs/third.png" alt="3rd Prize" className="prize-image mx-auto transition-transform duration-500 ease-in-out transform hover:scale-105" />
                    <h2 className="prize-title text-4xl sm:text-5xl text-center text-white font-bold mb-8 text-shadow-2">
                        3rd Prize
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Prizes;
