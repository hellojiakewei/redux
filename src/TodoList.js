import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/index'
import {getInputValue, addInputValue, deleteItem} from './store/actionCreate'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        store.subscribe(this.handleNewValue.bind(this))
    }

    render() {
        return (
            <div>
                <div style={{width: '600px'}}>
                    <Input placeholder={'hello'} onChange={this.handleInputChange} value={this.state.inputValue}/>
                    <Button type={"primary"} onClick={this.addInputValueToList.bind(this)}>点击</Button>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handItemDelete.bind(this, index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }

    handleInputChange(e) {
        const action = getInputValue(e.target.value)
        store.dispatch(action)
    }

    addInputValueToList() {
        const action = addInputValue()
        store.dispatch(action)
    }

    handleNewValue() {
        this.setState(store.getState())
    }

    handItemDelete(index) {
        const action = deleteItem(index)
        store.dispatch(action)
    }

    componentDidMount() {
        // axios.post('/user/login').then((res)=>{
        //   console.log(res.data.data)
        // })
        const instance = axios.create({
            baseURL: 'http://192.168.29.80:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.post('/user/login').then((res) => {
            console.log(res.data.data)
        })
    }
}

export default TodoList
