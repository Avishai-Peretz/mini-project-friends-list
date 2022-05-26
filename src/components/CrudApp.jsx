import React, { Component } from 'react';
import { data } from './js/data.js';
import CreateItem from './jsx/CreateItem';
import UpdateItem from './jsx/UpdateItem';
import DeleteItem from './jsx/DeleteItem';
import './css/display.css'
import './css/fonts.css'
import './css/style.css'
import TodoList from './jsx/TodoList';
import Inputs from './jsx/Inputs';
import Header from './jsx/Header';
import Spinner from './jsx/Spinner';


class CrudApp extends Component {
    constructor() {
        super();
        this.setState = this.setState.bind(this)
    }
    state = {
        todoItems: [],
        inputValue: {name: "", picture: ""},
        selectedItem: null,
        inputPlaceholder: "Create Item",
        spinner: false,
    } 
    async componentDidMount() {
        this.setState({spinner: false})
        await this.setState({ todoItems: await data() });
        await this.setState({spinner: true})
    }
    
    
    render() {
        const tip = this.state.selectedItem ? "Tip: To Unselect Please click on the list item one more time" : "Tip: If you want to update/delete, please click on the list item"
        const { inputValue, todoItems, selectedItem, spinner } = this.state
        return (
            <div className="crud-container column-c-c">
                <Spinner spinner={spinner} />
                <Header title="My Friends List" />
                <div className="todo-changes column-c-c">
                    <Inputs inputValue={inputValue} setState={this.setState} />
                    <div className="todo-btn-container row-c-c">
                        <CreateItem
                            setState={this.setState}
                            inputValue={inputValue}
                            todoItems={todoItems}
                            selectedItem={selectedItem}
                            />
                        <DeleteItem
                            setState={this.setState}
                            todoItems={this.state.todoItems}
                            selectedItem={selectedItem}
                            />
                        <UpdateItem
                            setState={this.setState}
                            inputValue={inputValue}
                            todoItems={todoItems}
                            selectedItem={selectedItem}
                            />
                    </div>
                </div>
                <span className="txt-36 bold txt_red">{tip}</span>
                <TodoList
                    todoItems={todoItems}
                    setState={this.setState}
                    selectedItem={selectedItem} />
            </div>
        );
    }
}

export default CrudApp;
