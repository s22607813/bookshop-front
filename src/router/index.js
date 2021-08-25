import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    // 首頁
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
        meta: {
          title: '二手圕'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '關於我們 | 二手圕'
        }
      },
      {
        path: '/productsNew',
        name: 'ProductsNew',
        component: () => import(/* webpackChunkName: "productsNew" */ '../views/ProductsNew.vue'),
        meta: {
          title: '新書上架 | 二手圕'
        }
      },
      {
        path: '/productsLiterature',
        name: 'ProductsLiterature',
        component: () => import(/* webpackChunkName: "productsLiterature" */ '../views/ProductsLiterature.vue'),
        meta: {
          title: '文學類別 | 二手圕'
        }
      },
      {
        path: '/productsmagazine',
        name: 'ProductsMagazine',
        component: () => import(/* webpackChunkName: "productsmagazine" */ '../views/ProductsMagazine.vue'),
        meta: {
          title: '雜誌類別 | 二手圕'
        }
      },
      {
        path: '/productstextbook',
        name: 'ProductsTextbook',
        component: () => import(/* webpackChunkName: "productstextbook" */ '../views/ProductsTextbook.vue'),
        meta: {
          title: '教科書類別 | 二手圕'
        }
      },
      {
        path: '/productsother',
        name: 'ProductsOther',
        component: () => import(/* webpackChunkName: "productsother" */ '../views/ProductsOther.vue'),
        meta: {
          title: '其他類別 | 二手圕'
        }
      },
      {
        path: '/book/:id',
        name: 'Book',
        component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
        meta: {
          title: '商品 | 二手圕'
        }
      }
    ]
  },
  // 登入
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入 | 二手圕'
    }
  },
  // 註冊
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊 | 二手圕'
    }
  },
  // 購物車
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '購物車 | 二手圕',
      login: true,
      user: true
    }
  },
  // 訂單
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
    meta: {
      user: true,
      title: '訂單 | 二手圕',
      login: true
    }
  },
  // 會員中心
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    children: [
      {
        path: '',
        name: 'UserData',
        component: () => import(/* webpackChunkName: "user" */ '../views/UserData.vue'),
        meta: {
          login: true,
          user: true,
          title: '會員中心 | 二手圕'
        }
      },
      {
        path: 'userdonate',
        name: 'UserDonate',
        component: () => import(/* webpackChunkName: "userdonate" */ '../views/UserDonate.vue'),
        meta: {
          login: true,
          user: true,
          title: '捐贈書籍 | 二手圕'
        }
      },
      {
        path: 'userdonatelist',
        name: 'UserDonateList',
        component: () => import(/* webpackChunkName: "userdonate" */ '../views/UserDonateList.vue'),
        meta: {
          login: true,
          user: true,
          title: '捐贈清單 | 二手圕'
        }
      },
      {
        path: 'userboughtlist',
        name: 'UserBoughtList',
        component: () => import(/* webpackChunkName: "userboughtlist" */ '../views/UserBoughtList.vue'),
        meta: {
          login: true,
          user: true,
          title: '收購清單 | 二手圕'
        }
      }
    ]
  },
  // 管理員
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminUserList',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminUserList.vue'),
        meta: {
          login: true,
          admin: true,
          title: '會員管理 | 二手圕'
        }
      },
      {
        path: 'adminorders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "adminorders" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理 | 二手圕'
        }
      },
      {
        path: 'admindonatelist',
        name: 'AdminDonateList',
        component: () => import(/* webpackChunkName: "admindonatelist" */ '../views/AdminDonateList.vue'),
        meta: {
          login: true,
          admin: true,
          title: '審核清單 | 二手圕'
        }
      },
      {
        path: 'adminproducts',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "adminproducts" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '書籍管理 | 二手圕'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && store.state.user.account.length === 0) {
    next('/login')
  } else if (to.meta.admin && store.state.user.role !== 1) {
    next('/')
  } else if (to.meta.user && store.state.user.role !== 0) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
