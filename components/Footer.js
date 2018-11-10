const Footer = (props) => (
  <div className="footer-container">
    <div className="footer-content">
        {props.children}
    </div>
    <style jsx global>{`
       .footer-content {
         bottom: 10px;
         position: fixed;
         text-align:center;
       }
       .footer-container {
         background-color: #fff;
         position: fixed;
         bottom: 0px;
         width: 100%;
         height: 140px;
         padding-top: 10px;
         padding-bottom: 10px;
         padding-left: 20px;
        -webkit-mask-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 10%,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 1) 100%
          );
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