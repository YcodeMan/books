import React, { Component, Fragment } from 'react';
import Hammer from 'react-hammerjs'
import { withRouter } from 'react-router-dom'
import "./index.scss"
const BookList = (Warpper) =>
    class extends Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (
                <Warpper msg={this.props.val} />
            )
        }
    }

class bookContentCommon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { msg } = this.props
        msg = msg === undefined ? [] : msg

        let newMsg = msg.slice(0, 4)

        return (
            <div className="booklist">
                {
                    newMsg.map((item, index) => (
                        item.cover = decodeURIComponent(item.getIn(["cover"])).replace('/agent/', ""),
                        <Hammer onTap={this.ToBookDetails.bind(this, item.getIn(["_id"]))} key={index}>
                            <a id={item.getIn(["_id"])} className="booklistinfo" >
                                <img className="bookpic" src={item.cover} />
                                <div className="bookcontent">
                                    <h3>
                                        {item.getIn(['title'])}&nbsp;
                                        <span className={item.getIn(["allowMonthly"]) ? 'goon' : 'finish'}>{
                                            item.getIn(["allowMonthly"]) ? "连载" : "完结"
                                        }</span>
                                    </h3>
                                    <p className="bookmsg">{item.getIn(['shortIntro'])}</p>
                                    <p className="bookkinds">
                                        <span>{item.getIn(["majorCate"])} &nbsp;|&nbsp;<b>{item.getIn(["latelyFollower"])}</b>人气</span>
                                        <i>{item.getIn(['minorCate'])}</i>
                                    </p>
                                </div>
                            </a>
                        </Hammer>

                    )
                    )
                }
            </div>

        )
    }
    ToBookDetails(id) {
        this.props.history.push({ pathname: '/bookDetail', params: { id } })
        window.sessionStorage.setItem('id', id)
    }
}

export default BookList(withRouter(bookContentCommon))