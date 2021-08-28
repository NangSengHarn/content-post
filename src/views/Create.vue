<template>
  <form @submit.prevent="addPost">
      <label>Title</label>
      <input type="text" required v-model="title" class="fontColor">

      <label>Body</label>
      <textarea required v-model="body" class="fontColor"></textarea>

      <label>Tags(hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" class="fontColor">
        <div v-for="tag in tags" :key="tag" class="pill">{{tag}}</div>
      <button>add post</button>
  </form>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';
export default {
    setup(){
        let router=useRouter();
        let title=ref("");
        let body=ref("");
        let tag=ref("");
        let tags=ref([]);

        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value="";
        }

        let addPost=async()=>{
            await fetch("http://localhost:3000/post",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(
                    {
                        title:title.value,
                        body:body.value,
                        tags:tags.value
                    }
                )
            })
            //redirect router to home page
            router.push("/")
        }

        return {title,body,tag,handleKeydown,tags,addPost}
    }

}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align:left;
}
.fontColor {
    color: grey;
}
input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid grey;
}
textarea{
    height: 160px;
}
label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size:20px;
    color:honeydew;
    margin-bottom: 10px;
}
label::before{
    content:"";
    display: block;
    width: 100%;
    height:100%;
    background: plum;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;

}
button{
    display: block;
    margin-top: 30px;
    background:violet;
    color:rgb(144, 144, 144);
    border:none;
    padding:8px 16px;
    font-size:18px;
}
.pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color:rgb(165, 164, 164);
    background:rgb(236, 194, 236);
    padding: 8px;
    border-radius:20px;
    font-size: 14px;
}
</style>