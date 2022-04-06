import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCSS from '../cssModules/ProductDetail.module.css';

const Carousel = (props) => {
  const styles = props.currStyle.photos;
  console.log('========>', styles)

  const [currIndex, setCurrIndex] = useState(0);

  const next = () => {
    setCurrIndex(currIndex === styles.length - 1 ? 0 : currIndex + 1);
  }

  const prev = () => {
    setCurrIndex(currIndex === 0 ? 0 : currIndex - 1);
  }

  return (
    <div className={ProductCSS.carousel}>
      <div className={ProductCSS.verticalView}>
        {styles.map((photo, i) =>
          <img className={currIndex === i ? `${ProductCSS.verticalPhotos} ${ProductCSS.verticalSelected}` : ProductCSS.verticalPhotos} src={photo.url} alt='product style' key={i} />
        )}
      </div>
      <div className={ProductCSS.carouselView} style={{ transform: `translateX(-${currIndex * 100}%)` }}>
        {styles.map((photo, i) =>
          <div className={ProductCSS.carouselItem} key={i}>
            <img className={ProductCSS.spotlight} src={photo.url} alt='product style' />
          </div>
        )}
      </div>
      <button onClick={prev}>&lt;</button>
      <button onClick={next}>&gt;</button>
    </div>
  );
}

Carousel.propTypes = {
  currStyle: PropTypes.object,
  productId: PropTypes.number
}

export default Carousel;