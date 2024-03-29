import React from 'react'
import {connect} from 'react-redux'
import PageHeader from '@common/pageHeader'
import CategoryUI from '@components/category/categoryUI'
import PageFooter from '@common/pageFooter'
import {actionCategory} from '@actions/catsAction/actionCreator'

class Category extends React.Component {
    constructor() {
        super()    
        this.state = {
            title: '分类',
            icon : {
                bookshelf:'bookshelf',
                index:'index',
            }
        }
    }
    componentDidMount(){
        this.props.getData();
    }
    render() {
        let {data} = this.props
        let {title,icon} = this.state
        return (
            <div>
                <PageHeader title={title} icon={icon}/>
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