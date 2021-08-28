<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border:3px solid transparent;
    border-radius: 50%;
    border-top-color:plum;
    animation: spin 1s infinite;
}
@keyframes spin {
    to{transform: rotate(360deg);}
}
</style>