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
        let {data} = this.props
        return (
            <div>
                <PageHeader />
                   {/* { Object.keys(data).forEach( item => {
                        console.log(item,data[item])
                        let arr = data[item];

                        // if (item == 'male') {//title='男生'
                        // console.log(111);
                        //     return <a>hhh</a>
                        // }
                        item == 'male'?<a>hhh</a>:''
                            
                    })} */}
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