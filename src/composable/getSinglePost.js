
import { ref } from "vue";

let getSinglePost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try{
            await new Promise((resolve,reject)=>{
                setTimeout(resolve,1000);
            })
            let response=await fetch("http://localhost:3000/post/"+id);
            if(response.status===404){
                throw new Error("not found that exact url");
            }
            let data=await response.json();
            post.value=data;
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load}
}
export default getSinglePost;