import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emloyees-add-form/emloyees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Вова Ж' , salary: 5, increase: false, rise:true, id: 1},
                {name:'Діма В' , salary: 2500, increase: true, rise:false, id: 2},
                {name:'Саша С' , salary: 100, increase: false, rise:false, id: 3},
                {name:'Тимофій Ю' , salary: 1000, increase: false, rise:false, id: 4}
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 5
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            rise: false,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEMP = (items, term) => {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    
    FilterBTN = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const emloyees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData =  this.FilterBTN(this.searchEMP(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                        onCountData={emloyees}
                        onCountIncrease={increased} />
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}    />
                    <AppFilter 
                        filte={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList
                         data={visibleData}
                         onDelete={this.deleteItem}
                         onToggleProp={this.onToggleProp}   />
                <EmployeesAddForm 
                         onAdd={this.addItem} />
            </div>
        );
    }
};

export default App;