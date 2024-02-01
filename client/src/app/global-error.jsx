'use client';

import ServerError from "@/src/components/ServerError";

const GlobalError = ({ reset }) => {
    return (
        <html>
            <body>
                <div className='flex justify-center items-center mt-20'><ServerError /></div>
                <button className="mt-4 mb-4 flex justify-center items-center" onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}

export default GlobalError;