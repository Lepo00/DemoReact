export const increment=(value)=>{
    return {
        type: "INCREMENT",
        value: value
    }
}

export const signin=()=>{
    return {
        type: "SIGNIN"
    }
}

export const signout=()=>{
    return {
        type: "SIGNOUT"
    }
}