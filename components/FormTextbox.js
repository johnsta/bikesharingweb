const FormTextbox = (props) => (
    <div>
        <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input type={props.inputType} className="form-control" id={props.inputID} placeholder={props.placeholder}></input>
        </div>
        <style jsx>{`
        input {
            font-size: 14px;
        }
        `}</style>
    </div>
)

export default FormTextbox