<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 20px;
    height: 20px;
    margin: 30px auto;
    border:5px solid transparent;
    border-radius: 50%;
    border-top-color:#bbb;
    animation: spin 1s infinite;
}
@keyframes spin {
    to{transform: rotate(360deg);}
}
</style>