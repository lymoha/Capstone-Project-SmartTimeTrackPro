
import '../styles/HomePage.css'
import DisplayEmployees from "./DisplayEmployees.tsx";
type HomePageProps = {
    setId: (id: string) => void;

}
export function HomePage(props:Readonly< HomePageProps>): JSX.Element {

    return (
        <>
          <div className="home-page">
          <DisplayEmployees setId={props.setId}/>
          </div>
        </>
    )
}