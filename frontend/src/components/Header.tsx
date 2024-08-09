import Navigate from "./Navigate.tsx";
import '../styles/Header.css'
export default function Header(){

    return (

        <>
          <div className="header-styler">
              <h1 id={"title-styler-h1"} className= "title-styler-h1"> Smart Time Track Pro  </h1>
              <h2 id="title-styler-h2">Software zur Verwaltung von Personal- und
                  Arbeitszeitdaten</h2>
          </div>
          <nav>
             <Navigate/>
          </nav>
        </>
    )
}