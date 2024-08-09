import '../styles/Navi-Styler.css'
import {Link} from 'react-router-dom'
export default function Navigate(){

    return (
        <>
            <ul className={"navi"}>
                <li className={"navi02"}>
                    <Link to={"/"} className={"navi01"}> Hauptseite </Link>
                </li>
                <li className={"navi02"}>
                    <Link to={"/add/"} className={"navi01"}>Mitarbeiter Hinzufügen</Link>
                </li>
                <li className={"navi02"}>
                    <Link to={"/update-employees/"} className={"navi01"}> Mitarbeiterdaten Bearbeiten </Link>
                </li>
                <li className={"navi02"}>
                    <Link to={"/timeManager/"} className={"navi01"}> An-und Abmelden </Link>

                </li>

            </ul>
        </>
    )
}