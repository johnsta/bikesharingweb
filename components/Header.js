import Link from 'next/link'

const Header = (props) => (
        <div className="row">
            <div className="col">
                <Link href="/signin">
                    <span className="lnr lnr-menu"></span>
                </Link>
            </div>
            <div className="col">
                <Link href="/">
                <img src="/static/title.png" alt="Adventure Works Cycles"/>
                </Link>
            </div>
            <div className="col"></div>
        <style jsx>{`
        img {
            height: 32px;
            width: 217px
        }
        .row {
            padding-top: 12px;
            background-color: #fff;
            min-height: 48px;
            box-shadow:0px 2px 10px rgba(65, 65, 65, 0.25);
        }
        div {
          padding: 0;
          margin: 0;
        }
        .container {
            background-color: #fff;
            min-height: 48px;
            box-shadow:0px 2px 10px rgba(65, 65, 65, 0.25);
        }
        .lnr-menu {
            font-size:22px;
            color: #4D6059;
            padding-left:10px;
        }
      `}</style>
    </div>
)

export default Header