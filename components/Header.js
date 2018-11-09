const Header = (props) => (
    <div>
      {props.children}
      <style jsx>{`
        div {
          background-color: #B5D3E7;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 20px;
          min-height: 40px;
        }
      `}</style>
    </div>
  )
  
  export default Header