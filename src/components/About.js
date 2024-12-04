import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        border : "1 px solid white"
    });

    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border : "1 px solid white"
            });
            setBtnText('Enable Dark Mode');
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border : "1 px solid black"
            });
            setBtnText('Enable Light Mode');
        }
    };

    return (
        <div className="container" style={myStyle}>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        style={myStyle}
                        className="accordion-collapse collapse show"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by
                            default, until the collapse plugin adds the appropriate classes that we
                            use to style each element. These classes control the overall appearance,
                            as well as the showing and hiding via CSS transitions. You can modify
                            any of this with custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go within the{' '}
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        style={myStyle}
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        style={myStyle}
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button
                    onClick={toggleStyle}
                    type="button"
                    className="btn btn-dark"
                >
                    {btnText}
                </button>
            </div>
        </div>
    );
}
