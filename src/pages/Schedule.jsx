import { Link } from "react-router-dom"
import Calendar from "../components/Calendar"


const Schedule = ( ) => {



    return (
        <div>
            <div>
                <h4> Select Appointment Date</h4>
                <Calendar />
            </div>
            <Link to={'/terms'} > Appointment Agreement </Link>
        </div>
    )
}

export default Schedule