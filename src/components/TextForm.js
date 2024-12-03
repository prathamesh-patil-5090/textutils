import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder={text} value={text} onChange={handleOnChange} htmlFor="exampleInputText1" rows="8"/>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
    </>
  )
}
TextForm.propTypes = {heading: PropTypes.string
}

TextForm.defaultProps = {heading: "Text Area"
}
