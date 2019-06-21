import {getBookDetail,getBookComment} from '@api/api'
import {getBookDetailsType, getBookCommentType} from './actionType'
import timeDiff from '@filters/timeDiff'
 
export const actionGetBookDetail = (id) => 
    async dispatch => {
        let data = await getBookDetail(id)
         data.bookState = data.isSerial ?  '连载中' : '完结'
         data.wordAll = (parseInt(data.wordCount/10000) + '万字')
         // 图片处理
         data.Img = decodeURIComponent(data.cover).replace('/agent/', "")
        dispatch({
            type: getBookDetailsType,
            value: data
        })
    }
  
export const actionGetBookComment = (bookId) => 
    async dispatch => {
        let data = await getBookComment(bookId)
        data.reviews.map((item) =>{
           item.timeDiff = timeDiff(item.updated, new Date)
        })
        dispatch({
            type: getBookCommentType,
            value: data
        })

    }

       

