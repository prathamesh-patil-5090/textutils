import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [rawText, setRawText] = useState('');
    const [formattedText, setFormattedText] = useState('');
    const handleUpClick = () => {
        let newText = rawText.toUpperCase();
        setRawText(newText);
        setFormattedText(newText);
    };

    const handleLoClick = () => {
        let newText = rawText.toLowerCase();
        setRawText(newText);
        setFormattedText(newText);
    };

    const handleItalicClick = () => {
        setFormattedText(`<em>${rawText}</em>`); 
    };

    const handleOnChange = (event) => {
        let newText = event.target.value;
        setRawText(newText);
        setFormattedText(newText);
    };
    const countWords = (inputText) => {
        return inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;
    };
    return (
        <>
            <div className="container" style = {{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style = {{backgroundColor: props.mode === 'dark'? 'grey':'white' , color: props.mode === 'dark'? 'white':'black'}}
                        className="form-control"
                        placeholder="Enter Text here"
                        value={rawText}
                        onChange={handleOnChange}
                        id="exampleInputText1"
                        rows="8"
                    />
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary" onClick={handleItalicClick}>
                    Convert to Italics
                </button>
            </div>
            <div className="container my-3" style = {{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>
                    <strong>Your Text Summary</strong>
                    <br />
                    {countWords(rawText)} words and {rawText.length} characters
                </p>
                <h1>Preview</h1>
                {/* Render italicized text safely */}
                <p dangerouslySetInnerHTML={{ __html: formattedText } }/>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
};
