import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,baseUrl, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [ytbId,setYtbId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const movieTrailer = (id)=>{
        
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
           if(response.data.results.length!==0){
            setYtbId(response.data.results[0])
           }else{
            alert('Trailer not available')
           }
        })
    }
    return (
        <div className='rowPost'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie)=>
                    <img onClick={()=>movieTrailer(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl+movie.poster_path}`} alt="poster" />
                    )
                }
               
            </div>
           {
            ytbId && <YouTube opts = {opts} videoId = {ytbId.key}/>
           }
        </div>
    )
}

export default RowPost