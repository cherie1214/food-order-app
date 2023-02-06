import React from 'react';

import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 배달해 드립니다.</h2>
      <p>
        다양하게 제공되는 음식들 중 좋아하는 음식을 선택하세요. 집에서 맛있는 식사를 즐길 수 있습니다.
      </p>
      <p>
        모든 음식은 신선한 재료를 사용하며 숙련된 셰프의 손을 거쳐 즉시 조리됩니다.
      </p>
    </section>
  );
};

export default MealsSummary;