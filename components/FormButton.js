import React, { Component } from 'react'
import Router from 'next/router'

export default class FormButton extends React.Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        Router.push('/');
    }

    render() {
        return (
            <div>
                <button type="submit" className="btn" onClick={this.handleClick}>{this.props.children}</button>
                <style jsx>{`
                    .btn {
                        opactiy: 1;
                        background-color: #E67938;
                        border-color: #E67938;
                        width: 100%;
                        border-radius: 100px;
                        color: #fff;
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                `}</style>
            </div>
        )
    }
}