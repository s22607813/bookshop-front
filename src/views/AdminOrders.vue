<template lang="pug">
b-container(fluid)#adminorders.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 訂單管理
  hr.mb-5
  b-row
    b-col.mb-4
      b-table(:items="orders" :fields="fields").text-left.table-striped.table-bordered
        template(#cell(name)="data")
          | {{ data.item.user.name }}
        template(#cell(account)="data")
          | {{ data.item.user.account }}
        template(#cell(products)="data")
          h6(v-for="product in data.item.products") {{ product.product.name }}
</template>

<script>
export default {
  name: 'AdminOrders',
  data () {
    return {
      orders: [],
      fields: [
        {
          key: '_id',
          label: '訂單編號'
        },
        {
          key: 'name',
          label: '會員暱稱'
        },
        {
          key: 'account',
          label: '會員帳號'
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
      const { data } = await this.axios.get('/orders/all', {
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
