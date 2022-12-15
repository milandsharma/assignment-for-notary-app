import React, { useState } from "react";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Left from "./left.jsx";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputDetail from "./inputDetail"
import Input from "./input.jsx";

function Main() {
  axios
    .post(
      "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse"
    )
    .then((res) => {
      console.log(res.data);
    });


    const [data,setData]=useState({
        No_of_signature:"",
        files:"",
        signers:"",
        witness:"",
        fullName:"",
        PhoneNumber:"",
        Email:"",
        CompanyName:"",
        AgentName:"",
        AgentPhoneNumber:"",
        AgentEmail:"",
        LoanNo:"",
        PropertyAddress:"",
        Location:"",
        date:"",
        time:""
      })
      console.log(data)
    const [display,setDisplay] = useState("flex")
    const [secondDisplay,setSecondDisplay] = useState("none")
    const [thirdDisplay,setThirdDisplay] = useState("none")
    const [flex,setFlex] = useState("row")

      function handleChange(event){
        const {name,value}=event.target;
        setData((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
      }
    const [count,setCount] = useState(0)
    function handleClick(){
      axios.post("https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails",data).then((res)=>{
        const {msg} = res.data;
        if(msg === "Appointment Details saved"){
          setDisplay("none")
          setSecondDisplay("flex")
          setFlex("column")
          setCount(count+1)
        if(count === 1){
          setDisplay("none")
          setSecondDisplay("none")
        setThirdDisplay("flex")
          setFlex("column")
        }
        }
      })
    }
    function handleSecondClick(){
       axios.post("https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails",data).then((res)=>{
        const {msg} = res.data;
        if(msg === "Appointment Details saved"){
          alert("Appointment Scheduled")
        }
       })
    }
    function handleBack(){
      setDisplay("flex")
      setSecondDisplay("none")
        setThirdDisplay("none")
    }


  return (
    <div className="main">
      <div>
        <Left />
      </div>
      <div className="right">
        <div className="right-top">
          <div className="right-top-left">
            <div style={{"cursor":"pointer"}} onClick={handleBack} className="arrow">
              <span>
                <ArrowBackIosIcon fontSize="small" />
              </span>
            </div>
          </div>
          <div className="right-top-right">
            <h3>New Appointment Request</h3>
            <p>Same great coverage for less</p>
          </div>
        </div>
        <div className="right-middle">
          <div className="index">
            <span className="small"></span>
            <span className="line"></span>
            <span className="number">
              <p>1</p>
            </span>
            <span className="line"></span>
            <span className="number">
              <p>2</p>
            </span>
            <span className="line"></span>
            <span className="number">
              <p>3</p>
            </span>
            <span className="line"></span>
            <span className="number">
              <p>4</p>
            </span>
            <span className="line"></span>
            <span className="small"></span>
          </div>
        </div>
        <div style={{"overflow":"auto","flexDirection":`${flex}`}} className="right-middle-sign">
        <div style={{"display":`${display}`}} className="right-bottom-form">
          <div className="right-bottom-form-left">
            <div className="form-shape">
              <h3>Notary Signing Agent</h3>
              <div className="right-form-para">
                <span>
                  <p>Suitable for those who have purchased a brand new car</p>
                </span>
                <span>
                  <p>per year</p>
                </span>
              </div>
              <div className="right-bottom-view-detail">
                <span>
                  <h6>View detail</h6>
                </span>
                <span>
                  <ArrowForwardTwoToneIcon />
                </span>
              </div>
            </div>
            <div className="form-shape">
              <h3>Remote Online Notary</h3>
              <div className="right-form-para">
                <span>
                  <p>
                    Suitable for those who already have a valid third party
                    cover
                  </p>
                </span>
                <span>
                  <p>per year</p>
                </span>
              </div>
              <div className="right-bottom-view-detail">
                <span>
                  <h6>View detail</h6>
                </span>
                <span>
                  <ArrowForwardTwoToneIcon />
                </span>
              </div>
            </div>
            <div className="form-shape">
              <h3>Mobile General Notary</h3>
              <div className="right-form-para">
                <span>
                  <p>Suitable for those who use the car infrequently</p>
                </span>
                <span>
                  <p>per year</p>
                </span>
              </div>
              <div className="right-bottom-view-detail">
                <span>
                  <h6>View detail</h6>
                </span>
                <span>
                  <ArrowForwardTwoToneIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="right-bottom-form-right">
            <div className="right-bottom-right-form">
              <div className="right-bottom-right-form-heading">
                <h3>Calculate your Costs for RON!</h3>
              </div>
              <div className="right-bottom-right-form-input">
                <Input
                onChange={handleChange}
                  label="No of Extra Signatures"
                  paragraph="Please enter zero,if only one signature is required"
                  name="signature"
                />
                <Input
onChange={handleChange}                
label="How Many Files will you be uploading in the session"
                name="files"
                />
                <Input
onChange={handleChange}                label= "Number of Signers"
                name="signers"
                />
                <Input
onChange={handleChange}                label="Do you Need Witness ?"
                paragraph="Do Not enter anything if you`re bring your own Witness"
                name="witness"
                />
              </div>
              <span><h3>Your Approximate Quote: $59</h3></span>
            </div>
          </div>
        </div>
        <div style={{"display":`${secondDisplay}`,"flexDirection":"column"}}>
         <div className="right-middle-top">
                <div className="right-middle-top-head">
                    <span><AccountCircleIcon/></span> <span><p>Signer Details</p></span>
                </div>
                <hr/>
                <div className="right-middle-top-body">
                <InputDetail onChange={handleChange} label="Full Name" placeholder="Full name" name="fullName"/>
                <InputDetail onChange={handleChange} label="Phone Number" placeholder="Phone Number" name="PhoneNumber"/>
                <InputDetail onChange={handleChange} label="Email" placeholder="Email" name="Email"/>
                </div>
            </div>
            <div className="right-middle-top">
                <div className="right-middle-top-head">
                    <span><AccountCircleIcon/></span> <span><p>Title Company Details</p></span>
                </div>
                <hr/>
                <div className="right-middle-top-body">
                <InputDetail onChange={handleChange} label="Company Name" placeholder="Company name" name="CompanyName"/>
                <InputDetail onChange={handleChange} label="Agent Name" placeholder="Agent name" name="AgentName"/>
                <InputDetail onChange={handleChange} label="Phone Number" placeholder="Phone Number" name="AgentPhoneNumber"/>
                <InputDetail onChange={handleChange} label="Email" placeholder="Email" name="AgentEmail"/>
                </div>
            </div>

            <div className="right-middle-top">
                <div className="right-middle-top-head">
                    <span><AccountCircleIcon/></span> <span><p>Order Info</p></span>
                </div>
                <hr/>
                <div className="right-middle-top-body">
                <InputDetail onChange={handleChange} label="Escrow#/Loan No" placeholder="Loan No" name="LoanNo"/>
                <InputDetail  onChange={handleChange} label="Property Address" placeholder="Property Address" name="PropertyAddress"/>
                </div>
            </div>
    </div>


    <div>
            <div style={{"display":`${thirdDisplay}`}} className="right-middle-top">
                <div className="right-middle-top-head">
                    <span><AccountCircleIcon/></span> <span><p>Signing Location</p></span>
                </div>
                <hr/>
                <div className="right-middle-top-body">
                <InputDetail onChange={handleChange} label="Enter Signing Location" placeholder="Enter location" name="Location"/>
                <InputDetail onChange={handleChange} label="Date" placeholder="Date" name="date"/>
                <InputDetail onChange={handleChange} label="Time" placeholder="time" name="time"/>
                </div>
                <button onClick={handleSecondClick} className="btn btn-primary w-50 mx-auto mt-3">Schedule Appointment</button>
            </div>
        </div>
        </div>
        <div onClick={handleClick} className="right-bottom">
            <div  className="right-bottom-next"><span>Next Step</span><span><ArrowForwardTwoToneIcon/></span></div>
        </div>
      </div>
    </div>
  );
}
export default Main;
