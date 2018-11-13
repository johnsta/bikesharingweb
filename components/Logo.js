const Logo = (props) => (
  <div>
    <object data="/static/logo.svg" type="image/svg+xml">
      <div><img src="/static/bike.png" alt="Adventure Works Cycles" /></div>
      <div><img src="/static/aw-title.png" alt="Adventure Works Cycles" /></div>
      <div><img src="/static/cycle-subtitle.png" alt="Adventure Works Cycles" /></div>
    </object>
  <style jsx>{`
      img {
        padding-top:15px;
      }
      `}</style>
  </div>
)

export default Logo