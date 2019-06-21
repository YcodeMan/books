
const tiemDiff = (oldDate, newDate) => {
   let tiemDiff =  new Date(newDate).getTime() - new Date(oldDate).getTime()
   let data = parseInt(tiemDiff / 1000 / 3600 / 24)
   let hour = parseInt((tiemDiff - data * 1000 * 3600 * 24) / 1000 / 3600)
   let minute = parseInt((tiemDiff - data * 1000 * 3600 * 24 - hour * 1000 * 3600) / 60 / 1000)
   return data > 0 ? data + '天' : hour > 0 ?  hour + '小时' : minute + '分钟'
}

export default tiemDiff