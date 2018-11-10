import React, { Component } from 'react'
import Page from "../components/Page"
import Header from "../components/Header"
import Content from "../components/Content"
import Link from 'next/link'
import BikeCard from "../components/BikeCard"

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [
                { id: "1", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-1.png" },
                { id: "2", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-2.png" },
                { id: "3", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-3.png" },
                { id: "4", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-4.png" },
                { id: "2", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-2.png" },
                { id: "1", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-1.png" },
                { id: "4", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-4.png" },
                { id: "1", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-1.png" },
                { id: "2", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-2.png" },
                { id: "3", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-3.png" },
                { id: "4", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-4.png" },
                { id: "2", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-2.png" },
                { id: "1", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-1.png" },
                { id: "4", name: "Schwinn Women's Cruiser", address: "5555 Beeler Street, Pittsburgh, PA 15217", rate: "5", imageUrl: "/static/sample-bike-4.png" },
            ]
        }
    }

    render() {
        var listBikes = this.state.bikes.map(function (bike) {
            return (
                <Link href={`/preview?id=${bike.id}`}>
                    <div>
                        <BikeCard id={bike.id} name={bike.name} address={bike.address} rate={bike.rate} imageUrl={bike.imageUrl} />
                    </div>
                </Link>
            );
        });
        return (
            <Page>
                <Header />
                <Content>
                    {listBikes}
                </Content>
            </Page>
        );
    }
}