import React from 'react';
import './Article.css';


const Design = ({data}) => {
    function NewlineText(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <p>{str}</p>);
        
        return newText;
    }

  return (
    <div className='article'>
        <div className="articleContainer">
        <div className='articleTitle'>{data.heading}</div>
            {data.map((article, index) => { 
                return(
                <div key={index}>
                    <div className='articleTitle'>{article.heading}</div>
                    <div className='articleContent'>
                    <p><NewlineText text={article.content} /></p>
                    </div>

                </div>
                )
            })}
        </div>
    </div>
  );
};

export default Design;
