import '../styles/Navi-Styler.css'
import {Link} from 'react-router-dom'
export default function Navigate(){

    return (
        <>
            <div className="app">
            <ul className={"navi"}>
                <li id ={"navi02"}>
                    <Link to={"/"} className={"navi01"}> Hauptseite </Link>
                </li>
                <li id ={"navi02"}>
                    <Link  className={"navi02"} to={"/add/"}>Mitarbeiter Hinzufügen</Link>
                </li>
                <li id ={"navi02"}>
                    <Link to={"/update-employees/"} className={"navi02"}> Mitarbeiterdaten Bearbeiten </Link>
                </li>
            </ul>
            </div>
        </>
    )
}