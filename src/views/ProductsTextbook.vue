<template lang="pug">
b-container(fluid)#productstextbook.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 教科書類別
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in products" :key="product._id").mb-4
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/genre/' + 3, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      })
      console.log(data)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
