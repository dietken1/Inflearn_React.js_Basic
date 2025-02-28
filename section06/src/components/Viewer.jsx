import { useState } from "react";

const Viewer = () => {
    const [num, serNum] = useState(0);
    
    return (
        <>
            <div>현재 카운트 :</div>
            <h1>0</h1>
        </>
    );
}

export default Viewer;