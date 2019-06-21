import React, {Fragment,useState } from 'react'
import styled from './index.scss'
import {connect} from 'react-redux'
import Hammer from 'react-hammerjs'

const bookIntorduction = ({bookDetail,handleTap, dir}) => {
    let [flag, setflag] = useState(true)
    return (
        <Fragment>
            
                <Hammer onTap={() => setflag(flag = !flag) }>
                <div className='introduction'>
                    <p className={flag ? '' : styled.active}>{bookDetail.getIn(['longIntro'])}</p>
                    {
                        flag ? <span className={styled.arrow}>v</span> 
                        : <span className={styled.arrow}>^</span>
                    }
                    
                    
                    </div>
                </Hammer>
            
            <div>
                <a>
                    <div className="catalogue">
                        <span>目录</span>
                        <b>
                            <span>{bookDetail.getIn(['bookState'])}</span>
                             {bookDetail.getIn(['lastChapter'])}
                             <i>&gt;</i>
                            
                        </b>
                    </div>
                </a>
            </div>
        </Fragment>

    )
}

let Tooggledir = true

const mapStateToProps = (state) => ({
    bookDetail: state.getIn(['bookDetails', 'bookDetail']),
    dir: Tooggledir
})
   


const mapDispatchToProps = (dispatch) => ({
    handleTap(e) {
        Tooggledir = !Tooggledir
        console.log(this, e)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(bookIntorduction)