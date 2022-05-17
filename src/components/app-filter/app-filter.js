import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Всі робітники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'moreThan1000', label: 'З/П більше 1000$'},
    ]
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'bth bth-light' : 'bth-outline-light'
        return (
            <button 
            className={`bth ${clazz}`}
            type="button" 
            key={name} 
            onClick={() => props.onFilterSelect(name) }>
                {label}
            </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;