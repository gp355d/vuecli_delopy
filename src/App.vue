<template>
  <div id="app">
          <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">產品列表</router-link> |
       <router-link to="/cart">購物車</router-link>
       <router-link to="/admin/products">後臺產品列表</router-link>
    </div>
    123
    <router-view/>
    489
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    // this.isLoading = true
    // setTimeout(() => {
    //   this.isLoading = false
    // }, 5000)
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((response) => {
        this.isLoading = false
        console.log(response)
      })
      .catch((error) =>{
        this.isLoading = false
      })
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
