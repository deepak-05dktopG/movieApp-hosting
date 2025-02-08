import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Moviecard from './Moviecard';
import axios from 'axios';

function Moviedetails({
    poster_path1,
    moviename,
    handlewatchlist,
    movieobj,
    handleremove,
    watchlist,
}) {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null);





    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`); // Fetching specific show details
                setShowDetails(response.data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        fetchShowDetails();
    }, [id]);


    if (!showDetails) return <p className='Loading text-center align-content-center text-white' style={{ height: "100vh" }}> <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg></p>; // Loading state

    return (
        <>
            {/* <div className='showdetails d-flex flex-wrap row justify-content-evenly' style={{ height: "", overflow: "hidden" }}>
                <div className='col-5'>
                    <img width={550} src={showDetails.image.original} alt="" />
                </div>
                <div className='  col-7 text-white p-2 d-flex flex-column '>
                    <div className='d-flex flex-column'>
                        <h2 className='text-danger fw-bold'>Title: <span className='h1 text-success'>{showDetails.name}</span></h2>
                        <h2 className='text-danger'>Language:  <span className='text-warning'> {showDetails.language} </span></h2>
                        <h2 className='text-danger'>Genres: <span className='text-warning'> {showDetails.genres.join(', ')} </span></h2>
                        <h2 className='text-danger'>Rating: <span className='text-warning'> {showDetails.rating?.average || 'N/A'} </span></h2>
                        <h2 className='text-danger'>Realese Date: <span className='text-warning'> {showDetails.premiered} </span></h2>
                    </div>
                    <div className='fs-5' dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                </div>
            </div> */}



            <div className='showdetails d-flex align-items-center justify-content-evenly' style={{ height: "", overflow: "hidden" }}>

                <div className='mt-2 '>
                    <img width={400} className='rounded-4 border border-2 border-success' src={showDetails.image.original} alt="" />
                </div>


                <div className='text-white p-2 d-flex flex-column '>
                    <div className='p-3 d-flex flex-column'>
                        <h1 className='text-success fw-bold'> <span className='text-danger h2'>Title:</span> {showDetails.name}</h1>
                        <h2 className='text-danger'>Language:  <span className='text-warning'> {showDetails.language} </span></h2>
                        <h2 className='text-danger'>Genres: <span className='text-warning'> {showDetails.genres.join(', ')} </span></h2>
                        <h2 className='text-danger'>Rating: <span className='text-warning'> {showDetails.rating?.average || 'N/A'} </span></h2>
                        <h2 className='text-danger'>Realese Date: <span className='text-warning'> {showDetails.premiered} </span></h2>
                    </div>
                    <div className='fs-5 p-2' style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                </div>
            </div>
        </>
    );
}

export default Moviedetails;
