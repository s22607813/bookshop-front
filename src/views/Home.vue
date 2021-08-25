<template lang="pug">
b-container(fluid)#home.page
  b-row
    b-col.sidebar(cols="12" md="2").position-fixed.d-flex.justify-content-between.justify-content-md-start.align-items-center.flex-md-column.px-0
      b-btn.btn(to='/about' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-4.px-0 關 於 我 們
      b-btn.btn(to='/productsNew' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 新 書 上 架
      b-button-group.btn.p-0.border-0.mt-md-3.mx-2
        b-dropdown(exact exact-active-class="active" variant="" size="lg" text="書 籍 類 別 ").h-100.w-100
          b-dropdown-item(to='/productsLiterature' exact exact-active-class="active") 文 學
          b-dropdown-item(to='/productsmagazine' exact exact-active-class="active") 雜 誌
          b-dropdown-item(to='/productstextbook' exact exact-active-class="active") 教 科 書
          b-dropdown-item(to='/productsother' exact exact-active-class="active") 其 他
  b-row.down.offset-md-2
    vue-page-transition(name="fade-in-right").w-100
      router-view
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      products: []
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
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => product.checked)
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
