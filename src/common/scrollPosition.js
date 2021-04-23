const doc = document
let cache = {}

const scrollPosition = {
  // 保存滚动条位置
  save (path) {
    cache[path] = doc.documentElement.scrollTop || doc.body.scrollTop
  },
  // 恢复滚动条位置
  recover () {
    const path = this.$route.path
    this.$nextTick(function () {
      setTimeout(() => {
        doc.documentElement.scrollTop = doc.body.scrollTop = cache[path] || 0
      }, 10)
    })
  },
  // 设置滚动条到顶部
  goTop () {
    this.$nextTick(function () {
      doc.documentElement.scrollTop = doc.body.scrollTop = 0
    })
  }
}

export default scrollPosition
