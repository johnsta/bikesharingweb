import React, { Component } from 'react'
import Page from "../components/Page"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Content from "../components/Content"
import Link from 'next/link'
import SigninFormLayout from '../components/SigninFormLayout'
import Logo from '../components/Logo'
import FormTextbox from '../components/FormTextbox'
import FormButton from '../components/FormButton'

export default class Signin extends Component {
    render() {
        return (
            <Page>
                <Content>
                    <SigninFormLayout>
                        <Logo />
                        <br /><br /><br />
                        <form>
                            <FormTextbox inputType="email" inputID="inputEmail" placeholder="Email" />
                            <FormTextbox inputType="password" inputID="inputPassword" placeholder="Password" />
                            <br />
                            <FormButton>Sign in</FormButton>
                            <div>
                                <Link href="/"><a>Sign up</a></Link>
                            </div>
                        </form>
                    </SigninFormLayout>
                </Content>
                <style jsx>{`
                form {
                    width: 85%;
                    margin-left: auto;
                    margin-right: auto;
                }
                `}</style>
            </Page>
        );
    }
}