const defaultState = {
    pState : [],
     uState : [],
     tState : []
}


export const popularState = async( state =  defaultState, action)=>{
  switch(action.type){
    case "POPULAR_ACTION":
         let pdata = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9024101704098faae70f606b58fbcafd")
         let result = await pdata.json();
         defaultState.pState =  [...defaultState.pState,...result.results]
         console.log("line 14 reducer popular",defaultState.pState);
         return defaultState;
    case "TOPRATED_ACTION":
        let trdata = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9024101704098faae70f606b58fbcafd")
        let tresult = await trdata.json();
        defaultState.tState = [...defaultState.tState,...tresult.results]
        return defaultState;

    case "UPCOMING_ACTION":
        let ucdata = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9024101704098faae70f606b58fbcafd")
        let ucresult = await ucdata.json();
        defaultState.uState = [...defaultState.uState,...ucresult.results]
        return defaultState;
    default:
        return defaultState;
  }
}

// export const upcomingState = () =>{

// }

// export const topRatedState = () => {

// }