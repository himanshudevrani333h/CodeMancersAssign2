// Three Actions are created for three row
const API_KEY = process.env.REACT_APP_API_KEY;
export const PopularCreate = (arr)=>{
  
    return {
        type: "POPULAR_ACTION",
        payLoad:arr
    }
}

export const UpcomingCreate = (arr)=>{
    return {
        type: "UPCOMING_ACTION",
        payLoad:arr
    }
}

export const TopRatedCreate = (arr)=>{
    return {
        type: "TOPRATED_ACTION",
        payLoad: arr
    }
}

export const singleMovie = (obj)=>{
 return {
     type: "FIND_MOVIE",
     payLoad : obj
 }
}


export const pupularFetch = ()=>{

    return  async (dispatch)=>{
        let pdata = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        let data = await pdata.json();
        dispatch(PopularCreate(data.results));
        
    }

}

export const upcomingFetch =  ()=>{

    return async (dispatch)=>{
        let ucdata = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
        let ucresult = await ucdata.json();
        dispatch(UpcomingCreate(ucresult.results))
    }
}


export const topratedFetch =  ()=>{

    return async (dispatch)=>{
        let trdata = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
        let tresult = await trdata.json();
        dispatch(TopRatedCreate(tresult.results))
    }
}

export const singleMovieFetch =  (movie_id)=>{
    
    return async (dispatch)=>{
       let obj = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`)
       let data = await obj.json();
       dispatch(singleMovie(data));
    }
}