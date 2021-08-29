
import { ref } from "vue";
import {db} from "../firebase/config";

let getSinglePost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try{
           
            //let response=await fetch("http://localhost:3000/post/"+id);
            let response= await db.collection("posts").doc(id).get();
            if(response.status===404){
                throw new Error("not found that exact url");
            }
            //let data=await response.json();
            //post.value=data;
            post.value={id:response.id,...response.data()}
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load}
}
export default getSinglePost;