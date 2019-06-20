import {getBookDetail,getBookComment} from '@api/api'
import {getBookDetailsType, getBookCommentType} from './actionType'

export const actionGetBookDetail = () => 
    async dispatch => {
        let data = await getBookDetail()
         data.bookState = data.isSerial ?  '连载中' : '完结'
         data.wordAll = (parseInt(data.wordCount/10000) + '万字')

         // 图片处理
         data.Img = decodeURIComponent(data.cover).replace('/agent/', "")
        dispatch({
            type: getBookDetailsType,
            value: data
        })
    }
  
export const actionGetBookComment = () => 
    async dispatch => {
        let data = await getBookComment()
        console.log(data, '34ddadsfsadfas235')
        dispatch({
            type: getBookCommentType,
            value: data
        })

    }

       

