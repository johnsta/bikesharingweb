const Footer = (props) => (
    <div>
      {props.children}
       <style jsx>{`
       div {
         background-color: #B5D3E7;
         position: fixed;
         bottom: 0px;
         width: 100%;
         height: 80px;
         padding-top: 10px;
         padding-bottom: 10px;
         padding-left: 20px;
       }
      //  @media (min-width: 768px) {
      //   div {
      //     padding-top: 20px;
      //     padding-left: 60px;
      //     height: 120px;
      //   }
      }
      `}</style>
    </div>
  )
  
  export default Footer