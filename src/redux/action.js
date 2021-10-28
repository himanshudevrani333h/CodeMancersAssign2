// Three Actions are created for three row
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
        let pdata = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9024101704098faae70f606b58fbcafd")
        let data = await pdata.json();
        console.log("popular data", data.results);
        dispatch(PopularCreate(data.results));
        
    }

}

export const upcomingFetch =  ()=>{

    return async (dispatch)=>{
        let ucdata = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9024101704098faae70f606b58fbcafd")
        let ucresult = await ucdata.json();
        console.log("upcomingfetch",ucresult.results);
        dispatch(UpcomingCreate(ucresult.results))
    }
}


export const topratedFetch =  ()=>{

    return async (dispatch)=>{
        let trdata = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9024101704098faae70f606b58fbcafd")
        let tresult = await trdata.json();
        dispatch(TopRatedCreate(tresult.results))
    }
}

export const singleMovieFetch =  (movie_id)=>{
    
    return async (dispatch)=>{
       let obj = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9024101704098faae70f606b58fbcafd`)
       let data = await obj.json();
       console.log("single obj", data);
       dispatch(singleMovie(data));
    }
}