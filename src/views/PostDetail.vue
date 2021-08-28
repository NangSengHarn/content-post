<template>

<div class="post">
  <div v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">
        {{tag}}
    </div>
  </div>
  <div v-else>
      <Spinner></Spinner>
  </div>
</div>
  
</template>

<script>
import Spinner from '../components/Spinner'
import getSinglePost from "../composable/getSinglePost"
import {useRoute} from "vue-router"
export default {
  components: { Spinner },
    props:["id"],
    setup(props){
        let route=useRoute();

        let {post,error,load}=getSinglePost(route.params.id);
        load();
        return {post,error};

    }

}
</script>

<style>
</style>