import {getBookDetail} from '@api/api'
import {getBookDetailsType} from './actionType'

export const actionGetBookDetail = () => 
    async dispatch => {
        let data = await getBookDetail()
         data.bookState = data._gg ? '完结' : '连载中'
         data.wordAll = (parseInt(data.wordCount/10000) + '万字')
        dispatch({
            type: getBookDetailsType,
            value: data
        })
    }
  


       

