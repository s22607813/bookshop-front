<template lang="pug">
b-container(fluid)#book.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span(v-if="this.genre === 1").font-weight-bold.title 文學類別
        span(v-else-if="this.genre === 2").font-weight-bold.title 雜誌類別
        span(v-else-if="this.genre === 3").font-weight-bold.title 教科書類別
        span(v-else).font-weight-bold.title 其他
  hr
  b-row(align-v="stretch").mt-5
    b-col.book_img(cols="12" md="4").mb-4.pr-md-2.pr-lg-1
      img.w-100(:src="image")
    b-col(cols="12"  md="8").pl-lg-5.pl-md-4
      h1.text-left.mt-4.mb-4
        span(style="color: #495580").font-weight-bold {{ name }}
      h2.text-left.mb-4
        span(style="color: #495580").font-weight-bold 捐贈者：
      h3.text-left.mb-4
        span {{ from.name }}
      h2.text-left.mb-4
        span(style="color: #495580").font-weight-bold 說明：
      h4.text-left.mb-4
        textarea(disabled).w-100.p-2 {{ description }}
  hr
  b-row
    b-col(cols="12").mb-4.d-flex.justify-content-end
      b-button(href='#' variant='success' @click="addCart" v-if="this.$store.state.user.role !== 1"  style="height: 10vh; line-height: 10vh").button-size.w-50.mt-3
        #text_cart
        b-icon(icon="bag-check-fill")
        |  放入購物車
</template>

<script>
export default {
  name: 'book',
  data () {
    return {
      name: '',
      description: '',
      from: '',
      image: '',
      checked: '',
      genre: ''
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.description = data.result.description
      this.from = data.result.from
      this.checked = data.result.checked
      this.genre = data.result.genre
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      document.title = `${this.name} | 二手圕`
    } catch (error) {
      this.$router.push('/')
    }
  },
  methods: {
    async addCart () {
      if (this.$store.state.jwt.token.length === 0) {
        this.$router.push('/login')
        return
      }
      try {
        await this.axios.post('/users/cart', { product: this.$route.params.id }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '放入購物車'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '放入購物車失敗'
        })
      }
    }
  }
}
</script>
