import react from "react"

function InputDetail(props){
    return(
        <>
            <div class="form-group">
                <label for="formGroupExampleInput">{props.label}</label>
                <input onChange={props.onChange} type="text" class="form-control" placeholder={props.placeholder} name={props.name} />
                </div>
        </>
    )
}
export default InputDetail