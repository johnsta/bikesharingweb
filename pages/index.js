import React, { Component } from 'react';
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Link from 'next/link';

export default class extends Component {
    render() {
        return (
            <Page>
                <Header>
                    Header
                </Header>
                <Content>
                    <h2>Home</h2>
                    
                    <Link href="/about">
                        <a>Go to about</a>
                    </Link>{'  '}
                </Content>
                <Footer>
                    <p>Footer</p>
                </Footer>
            </Page>
        );
    }
}