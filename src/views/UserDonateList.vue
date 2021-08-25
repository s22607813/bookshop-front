<template lang="pug">
b-container(fluid)#userdonatelist.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 捐贈紀錄
  hr.mb-5
  b-row
    b-col(cols="12").mb-4
      b-table(:items="products" :fields="fields" responsive).table-striped.table-bordered.text-left
        template(#cell(image)="data")
          img(:src="data.item.image" style="height: 100px")
        template(#cell(genre)="data")
          span(v-if="data.item.genre === 1") 文學
          span(v-else-if="data.item.genre === 2") 雜誌
          span(v-else-if="data.item.genre === 3") 教科書
          span(v-else) 其他
        template(#cell(checked)="data")
          .text-success(v-if="data.item.checked").font-weight-bold
            b-icon(icon="check2-all").mr-1
            span 已審核
          .text-danger(v-else="!data.item.checked").font-weight-bold
            b-icon(icon="clock-fill").mr-1
            span 審核中
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        {
          key: 'image',
          label: '書本圖片'
        },
        {
          key: 'name',
          label: '書本名稱'
        },
        {
          key: 'description',
          label: '書本說明'
        },
        {
          key: 'genre',
          label: '書本類別'
        },
        {
          key: 'checked',
          label: '審核狀態'
        }
      ]
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/from/' + this.$store.state.user.id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      })
      console.log(this.products)
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
