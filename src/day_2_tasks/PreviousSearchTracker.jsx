import React, { useEffect, useState,useRef} from 'react'


const PreviousSearchTracker = () => {

    const [ search,setSearch] = useState("");

    const previousSearch = useRef("");

    useEffect(() => {
    previousSearch.current= search;



    }, [search]);

  return (
    <div>
        
    <h2>Previous Search Tracker</h2>



    <input type='text' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>

        <h3> Curent Search:{Search}</h3>

        <h3>Previous Search:{previousSearch.current}</h3>
        </div>
  )
}

export default PreviousSearchTracker
