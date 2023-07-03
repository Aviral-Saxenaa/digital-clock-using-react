import React, { useState } from "react";

const App=()=>{

        let date=new Date().toLocaleTimeString();

        const [ctime,setCtime]=useState(date);

        setInterval(function(){
                let ntime=new Date().toLocaleTimeString();
                setCtime(ntime);
        },1000)

        return(
                <>
                        <h1>{ctime}</h1>
                </>
        )

}

export default App;