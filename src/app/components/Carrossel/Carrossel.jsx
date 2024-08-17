'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./carrossel.module.css"

const Carrossel = ({ data }) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  useEffect(() => {
    let elem = carouselRef.current
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({ width, height })
    }
  }, [])

  return (
    <div>
      {/* Carousel container */}
      <div className={styles.carouselContainer}>
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{ left: -currentImg * carouselSize.width }}
          className={styles.carouselImages}
        >
          {data.map((v, i) => (
            <div key={i} className={styles.carouselImageWrapper}>
              <Image
                className={styles.carouselImage}
                alt={`carousel-image-${i}`}
                fill
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className={styles.carouselNavigation}>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`${styles.carouselButton} ${currentImg === 0 && 'disabledButton'}`}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`${styles.carouselButton} ${currentImg === data.length - 1 && 'disabledButton'}`}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Carrossel
