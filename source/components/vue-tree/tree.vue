<style>

</style>

<template>
  <div>{{aa}}</div>

</template>

<script>

export default {
    data(){
        return{
            aa:"Hello world"
        }
    },
    created(){
        danielchan()
    },
    methods:{
        danielchan(){
            const aa = {a:1,b:2,c:3};
            var cc = {...aa,cc:4}
            let dd = `asdf${cc}`;
            
            return dd.repeat(4);
        }
    }
};
</script>