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
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <PageHeader />
                <CategoryUI/>
                <PageFooter />
            </div>
        )
    }
}

const mapStateToProprs = state => ({
    data: state.getIn(['category'])
})

const mapDispatchToProps = dispatch=> ({
    getData: () => dispatch(actionCategory())
})

export default connect(mapStateToProprs,mapDispatchToProps)(Category)