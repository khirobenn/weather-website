import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
    return <div className="h-dvh w-dvw flex justify-center items-center bg-black">
        <ReactLoading type="spinningBubbles" color='#86efac'/>
    </div>
}

export default Loading;