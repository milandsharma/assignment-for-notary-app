import React,{useState} from "react"
import axios from "axios"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person2Icon from '@mui/icons-material/Person2';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
function Left(){
    const [data,setData] = useState([
        {
            name:"name",
            email:"email",
            phone:"phone",
            address:"address",
            id:"id",
            PhotoURL:"photoURL",
        }
    ])
    axios.post("https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse").then((res)=>{
        const {response} = res.data;
        const {personalInfo,_id} = response;
        const {photoURL,businessDetails} = personalInfo;
        const {businessName,businessAddress,businessEmail,businessContactNumber} = businessDetails;
        setData((prevValue)=>{
            return{
                ...prevValue,
                name:businessName,
                email:businessEmail,
                phone:businessContactNumber,
                address:businessAddress,
                id:_id,
                PhotoURL:photoURL
            }
        })
    })
    return(
        <>    
        <div className="left">
        <div className="left-top">
        <div className="left-logo"><span><BoltRoundedIcon/></span><span>BeInsurance</span></div>
        <div className="left-top-image"><img src={`${data.PhotoURL}`} alt=""/></div>
        <div className="left-top-text"><h3>{data.name}</h3></div>
        </div>
        <div className="left-bottom">
            <ul>
            <li><span><EmailIcon fontSize="small"/></span><span><p>{data.email}</p></span></li>
            <li><span><LocalPhoneIcon fontSize="small"/></span><span><p>{data.phone}</p></span></li>
            <li><span><LocationOnIcon fontSize="small"/></span><span><p>{data.address}</p></span></li>
            <li><span><Person2Icon fontSize="small"/></span><span><p> {data.id}</p></span></li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Left