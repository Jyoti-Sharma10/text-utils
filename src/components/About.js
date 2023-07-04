import React from 'react'

export default function About(props) {

  let myStyle = {
    backgroundColor: props.mode === 'dark'?'black':'white', 
    color: props.mode === 'dark'?'white':'black'
  }

  return (
<div className="accordion" id="accordionExample" style={myStyle}>
    <h2 className='my-3'>About Us</h2>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils is the ultimate tool for analyzing your text with utmost efficiency. Whether you need to determine the word count, character count, or estimate the reading time of your text, 
       TextUtils has got you covered. With its powerful features, it empowers you to gain valuable insights from your content effortlessly. Say goodbye to manual calculations and let TextUtils do the work for you. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      That's right, you can harness the full potential of TextUtils without any cost. Unlocking valuable insights from your text has never been more accessible. Enjoy the freedom of unlimited usage, unrestricted by any payment barriers. Experience the convenience, accuracy, and affordability of TextUtils today.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is designed to be compatible with a wide range of browsers, ensuring accessibility and convenience for all users. Whether you prefer Chrome, Firefox, Safari, Edge, or any other popular browser, you can rely on TextUtils to work seamlessly. TextUtils is there to assist you in analyzing your text effectively. Enjoy a consistent and reliable experience with TextUtils, regardless of your browser preference.
      </div>
    </div>
  </div>
</div>
  )
}
