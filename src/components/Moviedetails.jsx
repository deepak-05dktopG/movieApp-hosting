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


    if (!showDetails) return <p className='Loading text-center align-content-center text-white' style={{height:"100vh"}}> <h1> Loading...</h1></p>; // Loading state

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
                    <div className='fs-5 p-2' style={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                </div>
            </div>
        </>
    );
}

export default Moviedetails;
