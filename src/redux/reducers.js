
const defaultState = {
     pState : [],
     uState : [],
     tState : [],
}


export const reducer = async( state =  defaultState, action)=>{
  
  switch(action.type){
    case "POPULAR_ACTION":
      defaultState.pState = [ ...defaultState.pState,...action.payLoad]
      console.log("popular reducer",defaultState.pState);
      return defaultState;

    case "TOPRATED_ACTION":
      defaultState.tState = [...defaultState.tState,...action.payLoad];
         return defaultState;

    case "UPCOMING_ACTION":
      defaultState.uState = [...defaultState.uState,...action.payLoad];
        return defaultState;
    case "FIND_MOVIE":
      console.log("reducer single",action.payLoad); 
      return action.payLoad
          
    default:
        return defaultState;
  }
}
