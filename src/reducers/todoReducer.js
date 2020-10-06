export default (state=[{title : "Naveen",done:false}],action)=>{
    switch(action.type){
        case "ADDTODO":
            return [
                ...state, action.payload
            ]
        default:
            return state;
    }
}