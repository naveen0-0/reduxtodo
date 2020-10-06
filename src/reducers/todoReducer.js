export default (state=[{title : "Naveen",done:false}],action)=>{
    switch(action.type){
        case "ADDTODO":
            return [
                ...state, action.payload
            ]
        case "CHANGETODOCOMPLETE":
            return action.payload
        default:
            return state;
    }
}