const Content = (props) => (
    <div>
      {props.children}
      <br/><br/><br/><br/><br/><br/>
       <style jsx>{`
       div {
         padding-top: 10px;
         padding-bottom: 10px;
         padding-left: 20px;
       }
      `}</style>
    </div>
  )
  
  export default Content