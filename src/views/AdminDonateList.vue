<template lang="pug">
b-container(fluid)#admindonatelist.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 審核清單
  hr.mb-5
  b-row
    b-col(cols="12").mb-4
      b-table(:items="products" :fields="fields" ref="product" responsive).text-left.table-striped.table-bordered
        template(#cell(image)="data")
          img(:src="data.item.image" style="height: 100px")
        template(#cell(from)="data")
          span {{ data.item.from.name }}
        template(#cell(genre)="data")
          span(v-if="data.item.genre === 1") 文學
          span(v-else-if="data.item.genre === 2") 雜誌
          span(v-else-if="data.item.genre === 3") 教科書
          span(v-else) 其他
        template(#cell(checked)="data")
          .text-danger.font-weight-bold
            b-icon(icon="clock-fill").mr-1
            span 審核中
        template(#cell(checkButton)="data")
          b-btn(variant="success" @click="checked(data.index)")
            b-icon(icon="patch-check-fill").mr-1
            span 審核
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
          key: 'from',
          label: '捐贈者'
        },
        {
          key: 'checked',
          label: '審核狀態'
        },
        {
          key: 'checkButton',
          label: '審核'
        }
      ]
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        return product
      }).filter(product => !product.checked)
      this.$refs.product.refresh()
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得商品失敗'
      })
    }
  },
  methods: {
    async checked (index) {
      try {
        this.products[index].checked = true
        await this.axios.patch('/products/' + this.products[index]._id, { checked: true }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const { data } = await this.axios.get('/products')
        this.products = data.result.map(product => {
          product.image = `${process.env.VUE_APP_API}/files/${product.image}`
          return product
        }).filter(product => !product.checked)
        this.$refs.product.refresh()
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '審核成功'
        })
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '審核失敗'
        })
      }
    }
  }
}
</script>
