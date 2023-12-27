
import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
        
        setIsPending(true)

        const controller = new AbortController();

        async function getData(){
            
            try {
                const res = await fetch(url,{signal:controller.signal});
            const resData = await res.json();
            setData(resData);
            setIsPending(false);
            setError(null);
            } catch (err) {
                setError(err);
                setIsPending(false);
            }

        }

        getData();

        return ()=>{
            controller.abort();
        }

    },[url])

    return {data,isPending,error};

}

export default useFetch