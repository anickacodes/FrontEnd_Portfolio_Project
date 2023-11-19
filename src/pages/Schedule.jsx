import { Link } from "react-router-dom"
import Calendar from "../components/Calendar"


const Schedule = ( ) => {



    return (
        <div>
            <div>
                <h4> Book here</h4>
                <Calendar />
            </div>
            <Link to={'/book/terms'} > Terms & Conditions</Link>
        </div>
    )
}

export default Schedule