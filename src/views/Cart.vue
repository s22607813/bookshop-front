<template lang="pug">
b-container(fluid)#cart.page.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 購物車
  hr.mb-5
  b-row
    b-col(cols="12")
      b-table(:items="cart" :fields="fields" ref="table" responsive).table-striped.table-bordered.text-left.mb-4
        template(#cell(image)="data")
          img(:src="data.item.image" style="height: 100px")
        template(#cell(action)="data")
          b-btn.w-50(variant="danger" @click="delProduct(data.index)" size="lg")
            b-icon(icon="trash-fill")
            |  刪除商品
  hr.mb-5
  b-row
    b-col(cols="12").mb-4.d-flex.justify-content-end
      b-btn(variant='success' @click="checkout" style="height: 10vh; line-height: 10vh").button-size.w-25.p-0
        b-icon(icon="cash")
        |  結帳
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cart: [],
      fields: [
        {
          key: 'image',
          label: '商品圖片'
        },
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'description',
          label: '商品說明'
        },
        {
          key: 'action',
          label: ''
        }
      ],
      donateAmount: ''
    }
  },
  methods: {
    async delProduct (index) {
      try {
        await this.axios.patch('/users/cart', { product: this.cart[index]._id }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.cart.splice(index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除商品失敗'
        })
      }
    },
    async checkout () {
      if (this.donateAmount > 0) {
        try {
          await this.axios.post('/orders', {}, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '結帳完成'
          })
          this.$router.push('/user/userboughtlist')
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '結帳失敗'
          })
        }
      } else {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '至少捐過一本書並通過審核後才能下單'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/cart', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.cart = data.result.map(item => {
        item = { ...item.product }
        item.image = `${process.env.VUE_APP_API}/files/${item.image}`
        return item
      })
      this.$store.commit('cart', data.result.length)
      // 使用者捐贈資料
      const donateAmount = await this.axios.get('/products/from/' + this.$store.state.user.id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      const changeAmount = donateAmount.data.result.filter(amount => amount.checked
      ).length
      this.donateAmount = changeAmount
      console.log(changeAmount)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
