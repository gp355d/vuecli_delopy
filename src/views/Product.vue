<template>
    <div>
        <h2>單一產品頁面</h2>
        <h3>{{product.title}}</h3>
        <p>{{product.description}}</p>
        
    </div>
</template>
<script>

export default {
    data(){
        return{
            product:{}
        };
    },

    created(){
        const id = this.$route.params.id;
         this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((response) => {
        this.isLoading = false
        console.log(response)
        this.product = response.data.data;
      })
        console.log(this.$route.params.id);
    }
}
</script>