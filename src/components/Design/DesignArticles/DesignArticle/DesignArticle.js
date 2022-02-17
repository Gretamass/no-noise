import React from 'react';
import './DesignArticle.css';
import ArticleSimple from '../../../Articles/Article/ArticleSimple';
import { akustikaData } from '../../../Articles/Article/data';

const Design = () => {
  return (
    <div className='services'>

        <ArticleSimple  data={akustikaData} />   
    </div>
  );
};

export default Design;
