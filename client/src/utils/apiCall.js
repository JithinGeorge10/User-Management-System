import { apiClient } from "../lib/api-client"
import { VERIFY_JWT } from "./Constants"

export async function verifyJWT(){
    try {
       const res=await apiClient.get(VERIFY_JWT) 
       console.log({res})
       return res.data
    } catch (error) {
    throw new Error(error.message)
    }
}