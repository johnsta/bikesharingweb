const SigninFormLayout = (props) => (
    <div>
        <div className="center">
            {props.children}
        </div>
        <style jsx>{`
        .center {
            text-align:center;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
        `}</style>
    </div>
)

export default SigninFormLayout