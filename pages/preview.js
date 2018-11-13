import Page from "../components/Page"
import Header from "../components/Header"
import Content from "../components/Content"
import Field from "../components/Field"
import FormNote from "../components/FormNote"
import FormButton from "../components/FormButton"
import Map from "../components/Map"
import Link from 'next/link'
import Footer from '../components/Footer'
import { withRouter } from 'next/router'


var bike = {
    id: "1", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217",
    rate: "1.68", imageUrl: "/static/sample-bike-medium.png", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4
};

const Preview = withRouter((props) => (
    <Page>
        <Header />
        <Content>
            <div className="details-container">
                <img src={bike.imageUrl} alt="photo of bike" />
                <div className="title">{bike.name}</div>
                <div className="owner">Owned by {bike.owner}</div>
                <Field label="Price per hour" value={"$" + bike.rate} />
                <FormNote text="Charging card ending with 1732" />
                <Field label="Suggested rider height (meters)" value={bike.riderHeight} />
                <Field label="Max weight (kg)" value={bike.maxWeight} />
                <Field label="Pick-up/return address" value={bike.address} />
                <Map />
            </div>
        </Content>
        <Footer>
            <FormButton>Rent bike</FormButton>
            <FormNote text="*You won't be charged until you return the bike" />
        </Footer>
        <style jsx global>{`
            .footer-content {
                width: 80%;
                margin-left: auto;
                margin-right: auto;
            }
        `}</style>
        <style jsx>{`
            img {
                width: 100%;
                max-width: 400px;
            }
            .details-container {
                padding-top: 11px;
                letter-spacing: 0.5px;
            }
            .title {
                font-size: 18px;
                padding-top: 10px;
                letter-spacing: 1px;
                font-weight: 600;
            }
            .owner {
                font-size: 13px;
            }
        `}</style>
    </Page>
))

export default Preview