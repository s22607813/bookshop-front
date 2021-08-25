<template lang="pug">
b-container#orders
  b-table(:items="orders" :fields="fields")
    template(#cell(products)="data")
      h6(v-for="product in data.item.products") {{ product.product.name}}
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
          label: '商品明細'
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
