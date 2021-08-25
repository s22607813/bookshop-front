<template lang="pug">
b-container(fluid)#productsnew.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 新書上架
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in products" :key="product._id").mb-4
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductNew',
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
      // 新書上架
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).reverse()
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
