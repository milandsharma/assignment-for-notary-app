import react from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputDetail from "./inputDetail"
function ThirdForm(){
    return(
        <div>
            <div className="right-middle-top">
                <div className="right-middle-top-head">
                    <span><AccountCircleIcon/></span> <span><p>Signing Location</p></span>
                </div>
                <hr/>
                <div className="right-middle-top-body">
                <InputDetail label="Enter Signing Location" placeholder="Enter location" name="Location"/>
                <InputDetail label="Date" placeholder="Date" name="date"/>
                <InputDetail label="Time" placeholder="time" name="time"/>
                </div>
                <button className="btn btn-primary w-50 mx-auto mt-3">Schedule Appointment</button>
            </div>
        </div>
    )
}
export default ThirdForm