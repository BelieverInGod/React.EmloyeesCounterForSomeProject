import './app-info.css'

const AppInfo = ({onCountData, onCountIncrease}) => {
    return (
        <div className="app-info">
            <h1 className="app_company">Учет сотрудников в компании:
            <div className="app_company_color">"Silicone_case_kovel"
            </div></h1>
            <h2>Загальна кількість працівникіів: {onCountData} </h2>
            <h2>Премію отримають: {onCountIncrease}</h2>
        </div>
    )
}

export default AppInfo;
