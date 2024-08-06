import '../styles/Navi-Styler.css'
import {Link} from 'react-router-dom'
export default function Navigate(){

    return (
        <>
            <ul id={"navi"}>
                <li id={"navi01"}>
                    <Link to={"/"}> Hauptseite </Link>
                </li>
                <li id={"navi02"}>
                    <Link to={"/add/"}>Elemente Hinzufügen</Link>
                </li>
                <li id={"navi03"}>
                    <Link to={"/update-employees/"}> Mitarbeiter Daten </Link>
                </li>
                <li>
                    <Link to={"/timeManager/"}> An-und Abmelden </Link>

                </li>

            </ul>
        </>
    )
}