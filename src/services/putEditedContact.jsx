import http from "./httpService"
export const putEditedContact=(id,editedContact)=>{
    return http.put(`./contacts/${id}`,editedContact)
}
