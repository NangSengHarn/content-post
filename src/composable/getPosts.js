import { ref } from 'vue'
import {db} from "../firebase/config"
let getPosts=()=>{

    let posts=ref([]);
    let error=ref();

    let load=async()=>{
      try{

        //let response=await fetch("http://localhost:3000/post")
          let response=await db.collection("posts").get()
              
        if (response.status===404){
          throw new Error("Oops! URL not found")
        }
        
        //let data=await response.json();
        //posts.value=data;
        posts.value=response.docs.map((doc)=>{
          return {id:doc.id,...doc.data()}
        })
      }catch(err){
          error.value=err.message;
      }
    }
    return {posts,error,load};
}
export default getPosts;