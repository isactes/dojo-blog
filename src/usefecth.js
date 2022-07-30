import { useState, useEffect } from "react";

const useFetch = (url)  => {
    const [data, setData] =useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
           fetch(url, { signal: AbortController.signal })
           .then(res => {
               if(!res.ok){
                   throw Error('Could not fecth');
               }
               return res.json();
           })
           .then(data => {
               setData(data)
               setPending(false);
               setError(null);
           })
           .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setPending(false)
               setError(err.message);
            }
           })
        }, 1000); 
        return () => abortCont.abort();
   },[url]);
   return { data, isPending, error };
}

export default useFetch;