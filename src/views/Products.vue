<template lang="pug">
b-container(fluid)#products.text-dark.px-5
  //- 新書
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 新書上架
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in products" :key="product._id").mb-3
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
  b-row
    b-col(cols="12").text-right
      router-link(to="/productsNew").h5.brown
        span More &nbsp
        b-icon(icon="play-fill")
  //- 文學
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 文學類別
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in productsLiterature" :key="product._id").mb-3
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
  b-row
    b-col(cols="12").text-right
      router-link(to="/productsLiterature").h5.brown
        span More &nbsp
        b-icon(icon="play-fill")
  //- 雜誌
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 雜誌類別
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in productsMagazine" :key="product._id").mb-3
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
  b-col(cols="12").text-right
      router-link(to="/productsmagazine").h5.brown
        span More &nbsp
        b-icon(icon="play-fill")
  //- 教科書
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 教科書類別
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in productsTextbook" :key="product._id").mb-3
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
  b-col(cols="12").text-right
      router-link(to="/productstextbook").h5.brown
        span More &nbsp
        b-icon(icon="play-fill")
  //- 其他
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 其他
  hr
  b-row
    b-col(cols="12" sm="6" md="4" xl="2" v-for="product in productsOther" :key="product._id").mb-3
      router-link(:to="'/book/'+ product._id")
        ProductCard(:product="product")
  b-col(cols="12").text-right.mb-4
      router-link(to="/productsother").h5.brown
        span More &nbsp
        b-icon(icon="play-fill")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      products: [],
      productsLiterature: [],
      productsMagazine: [],
      productsTextbook: [],
      productsOther: []
    }
  },
  components: {
    ProductCard
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  async mounted () {
    try {
      // 新書上架
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).reverse().slice(0, 6)
      // 文學
      const data2 = await this.axios.get('/products/genre/' + 1, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.productsLiterature = data2.data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).slice(0, 6)
      // 雜誌
      const data3 = await this.axios.get('/products/genre/' + 2, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.productsMagazine = data3.data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).slice(0, 6)
      // 教科書
      const data4 = await this.axios.get('/products/genre/' + 3, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.productsTextbook = data4.data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).slice(0, 6)
      // 其他
      const data5 = await this.axios.get('/products/genre/' + 4, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.productsOther = data5.data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked).slice(0, 6)
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
