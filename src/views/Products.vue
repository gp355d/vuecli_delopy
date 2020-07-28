<template>
<div>
    <h2>這是產品頁面</h2>
    <table>
        <tr v-for="item in products" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.origin_price}}</td>
            <td><a href="#" @click.prevent="gopage(item)">連結</a></td>
<!-- <router-link :to="`/product/${item.id}`">連結</router-link> -->
<!-- <button @click="gopage(item)">連結</button> -->
        </tr>
    </table>
</div>
</template>
<script>
export default {
    data(){
        return {
            products:[]
        }
    },
        methods:{
        gopage(item){
            this.$router.push(`/product/${item.id}`)
        }
    },
    created(){
        console.log(process.env.VUE_APP_UUID)
        this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((response) => {
        this.isLoading = false
        console.log(response)
        this.products = response.data.data;
      })
      .catch((error) => {
          this.isLoading = false
      })
    }
};
</script>