<template>

<div class="post">
  <div v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">
        {{tag}}
      </div>
      <button class="delete" @click="deletePost">delete</button>
  </div>
  <div v-else>
      <Spinner></Spinner>
  </div>
</div>
  
</template>

<script>
import Spinner from '../components/Spinner'
import getSinglePost from "../composable/getSinglePost"
import {useRoute,useRouter} from "vue-router"
import {db} from '../firebase/config'
export default {
  components: { Spinner },
    props:["id"],
    setup(props){
        let route=useRoute();
        let router=useRouter();
        let {post,error,load}=getSinglePost(route.params.id);
        load();
        let deletePost=async()=>{
          let id=props.id;
          await db.collection("posts").doc(id).delete();
          router.push("/");
        }

        return {post,error,deletePost};

    }

}
</script>

<style>
button.delete {
  margin: 30px auto;
  color: rgb(247, 137, 137);
}
</style>