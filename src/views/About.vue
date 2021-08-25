<template lang="pug">
b-container(fluid)#about.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 關於我們
  hr.mb-5
  b-row.mb-4
    b-col.aboutHeight(cols="12" md="4" order="1").text-center.mb-5
      b-icon(icon="hand-thumbs-up" scale="2" style="color: #495580" animation="cylon").h-100.w-25
    b-col(cols="12" md="8" order="2").mb-5.px-5
      h3(style="color: #495580").font-weight-bold.text-center.text-md-left.my-3 建立一個友善的二手交易平台
      h5(style="letter-spacing: 2px;line-height: 2rem").mt-5 本網站的成立理念是藉由提供一個線上平台讓使用者在捐出二手書籍的同時，也能換取其他使用者所捐獻出的書籍，為了多促進使用者間的交易，本網站書本皆沒有標示價格，唯一的限制是使用者必須在捐獻一本書之後才有權限能夠換取其他書本。
    b-col(cols="12" md="8" order="4" order-md="3").mb-5.px-5
      h3(style="color: #495580").font-weight-bold.text-center.text-md-left.my-3 提升紙本書籍的再使用率
      h5(style="letter-spacing: 2px;line-height: 2rem").mt-5 近年來隨著現在科技的進步，大眾可以輕鬆地在網路上獲取各種資訊，不再需要仰賴紙本媒介，而電子書的問世，又加劇了傳統紙本書籍的沒落，希望透過二手書籍交易平台，再次創造紙本書籍的價值，讓使用者能透過交換的方式，使得紙本書籍更為活絡。
    b-col.aboutHeight(cols="12" md="4" order="3" order-md="4").text-center.mb-5
      b-icon(icon="book" scale="2" style="color: #495580" animation="fade").h-100.w-25
    b-col.aboutHeight(cols="12" md="4" order="5").text-center.mb-5
      b-icon(icon="heart" scale="2" style="color: #495580" animation="throb").h-100.w-25
    b-col(cols="12" md="8" order="6").mb-5.px-5
      h3(style="color: #495580").font-weight-bold.text-center.text-md-left.my-3 培養優良的讀書習慣
      h5(style="letter-spacing: 2px;line-height: 2rem").mt-5 希望藉由免費交換書籍，讓此網站的使用者能多閱覽不同種類的內容，接觸到更多不同領域的知識，進而發展自己的興趣潛能並養成熱愛閱讀的習慣。
</template>

<script>
export default {
  name: 'About'
}
</script>
