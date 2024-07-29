
import {Link} from 'react-router-dom'
export default function Navigate(){

    return (
        <>
        <ul>
            <li>
             <Link to={"/"}> Home </Link>
            </li>
            <li>
                <Link to={"/add"}> Zum Login hier weiter</Link>
            </li>
        </ul>
        </>
    )
}