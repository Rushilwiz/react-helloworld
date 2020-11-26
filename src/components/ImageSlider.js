import React from "react";

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "https://i.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s",
            "https://i.picsum.photos/id/852/200/200.jpg?hmac=4UHLpiS9j3YDnvq-w-MqnP5-ymiyvMs6BNV5ukoTRrI",
            "https://i.picsum.photos/id/1013/200/200.jpg?hmac=mW7QsQSZWgWOm8DAQ2zj3vcwbLk6w_AkeUOvEx7zI24",
            "https://i.picsum.photos/id/164/200/200.jpg?hmac=UA4QhIt441pdFJ6Uam2yCxzda_KjWgQgy8fYs_-NFEM",
        ],
        index: 0
    };

    handleNext = () => {
        this.setState({
            index: this.state.index+1
        })
    };

    render () {
        return (
            <div>
                <img
                    style={{
                        width: 200,
                        height: 200
                    }}
                    src={this.state.images[this.state.index]}
                />
                <br/>
                <button onClick={() => {
                    this.setState({
                        index: this.state.index-1
                    })
                }}>
                    previous
                </button>
                <button onClick={this.handleNext}>next</button>
            </div>
        )
    }
}