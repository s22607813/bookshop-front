<template lang="pug">
b-container(fluid)#userboughtlist.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 收購紀錄
  hr.mb-5
  b-row
    b-col(cols="12").mb-4
      b-table(:items="orders" :fields="fields" responsive).table-striped.table-bordered.text-left
        template(#cell(products)="data")
          h6(v-for="product in data.item.products") {{ product.product.name }}
</template>

<script>
export default {
  name: 'orders',
  data () {
    return {
      orders: [],
      fields: [
        {
          key: '_id',
          label: '訂單編號'
        },
        {
          key: 'products',
          label: '商品名稱'
        },
        {
          key: 'date',
          label: '訂購時間'
        }
      ]
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/orders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(order => {
        order.date = new Date(order.date).toLocaleString()
        return order
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
