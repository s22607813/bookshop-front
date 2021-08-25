<template lang="pug">
#app
  b-navbar(toggleable='lg' type='dark' id='header').position-fixed.w-100
    b-container(fluid)
      b-navbar-brand(to='/')
        div#title
          span(style="font-size: 3em").h1 圕&nbsp
          span.h4.font-weight-bold 二手書籍交易平台
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto.d-flex.align-items-lg-center
          b-nav-item(v-if="!user.isLogin" to='/login') 登入
          b-nav-item(v-if="user.isLogin && !user.isAdmin" to='/user')
            b-icon(icon="person-fill")
            |  會員中心
          b-nav-item(v-if="user.isLogin && user.isAdmin" to='/admin')
            b-icon(icon="person-fill")
            |  管理員中心
          b-nav-item.position-relative(v-if="user.isLogin && !user.isAdmin" to='/cart')
            //- #shoppingcart {{ cartLength }}
            b-icon(icon="cart-fill")
            |  購物車
          #line.d-none.d-lg-block
          b-nav-item(v-if="user.isLogin" @click="logout") 登出
          b-nav-item(v-if="!user.isLogin" to='/register') 註冊
  vue-page-transition(name="fade-in-up")
    router-view
  #footer
    b-container(fluid).px-5.pt-2
      b-row.px-3
        b-col.footer_border(cols="12" md="4").text-center.py-2
          h6.font-weight-bold 關於二手圕
          hr.mt-1.bg-white
          router-link(to='/about').colorbdbfc1 關於我們
          br
          router-link(to='/').colorbdbfc1 隱私權政策
          br
          router-link(to='/').colorbdbfc1 服務條款
          br
          router-link(to='/').colorbdbfc1.mr-2
            b-icon(icon="facebook")
          router-link(to='/').colorbdbfc1.mr-2
            b-icon(icon="twitter")
          router-link(to='/').colorbdbfc1.mr-2
            b-icon(icon="google")
          router-link(to='/').colorbdbfc1.mr-2
            b-icon(icon="instagram")
        b-col.footer_border(cols="12" md="4").text-center.py-2
          h6.font-weight-bold 書籍類別
          hr.mt-1.bg-white
          router-link(to='/productsLiterature').colorbdbfc1 文學類別
          br
          router-link(to='/productsmagazine').colorbdbfc1 雜誌類別
          br
          router-link(to='/productstextbook').colorbdbfc1 教科書類別
          br
          router-link(to='/productsother').colorbdbfc1 其他
        b-col(cols="12" md="4").text-center.py-2
          span.font-weight-bold 會員中心
          hr.mt-1.bg-white
          router-link(to='/register').colorbdbfc1 加入會員
          br
          router-link(to='/user').colorbdbfc1 會員資料
          br
          router-link(to='/').colorbdbfc1 客服信箱
      b-row
        b-col(cols="12").text-center.mb-4.mt-2
          span Copyright  &copy 2021 二手圕 All Rights Reserved
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      cartLength: ''
    }
  },
  methods: {
    async logout () {
      try {
        await this.axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('logout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '登出失敗'
        })
      }
    }
  },
  async mounted () {
    if (this.$store.state.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getinfo', data.result)
      this.cartLength = this.$store.state.user.cart
    } catch (error) {
      this.$store.commit('logout')
    }
  }
}
</script>
