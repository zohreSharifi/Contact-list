import http from "./httpService"

export  const postContact=(contact)=>{
    return http.post("/contacts",contact)
}