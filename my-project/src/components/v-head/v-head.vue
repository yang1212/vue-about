<template>
  <div class="header">
    <div class="background">
       <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
  </div>    
</template>
<script>
    export default {
        props: ['seller'],
        data: function() {
            return {
                message: 'hello'
            }
        }
    }
</script>
<style>
    .background {
        height: 140px;
    }
</style>