import React from 'react'
import {connect} from 'react-redux'
import PageHeader from '@common/pageHeader'
import CategoryUI from '@components/category/categoryUI'
import PageFooter from '@common/pageFooter'
import {actionCategory} from '@actions/catsAction/actionCreator'

class Category extends React.Component {
    constructor(porps) {
        super(porps)
        this.props.getData();
        this.state = {
            head: {
                title: '分类'
            }
        }
    }
    render() {
        let {data} = this.props
        let {head} = this.state
        return (
            <div>
                <PageHeader data={head}/>
                <CategoryUI data={data}/>
                <PageFooter />
            </div>
        )
    }
}

const mapStateToProprs = state => ({
    data: state.getIn(['category','category']).toJS(),
})

const mapDispatchToProps = dispatch=> ({
    getData: () => {
        dispatch(actionCategory())
    }
})

export default connect(mapStateToProprs,mapDispatchToProps)(Category)