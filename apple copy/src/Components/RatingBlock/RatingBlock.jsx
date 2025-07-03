// import React, { useState } from "react";

// const RatingBlock = () => {
//   const [rating, setRating] = useState(0);

//   const incrementRating = () => {
//     setRating((prevRating) => prevRating + 1);
//   };

//   const decrementRating = () => {
//     setRating((prevRating) => prevRating - 1);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.controls}>
//         <button onClick={incrementRating} style={styles.button}>
//           Increment
//         </button>
//         <button onClick={decrementRating} style={styles.button}>
//           Decrement
//         </button>
//       </div>

//       <div style={styles.display}>
//         <p>Your rated this product is: {rating}</p>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import styles from "./RatingBlock.module.css";

const RatingBlock = () => {
  const [rating, setRating] = useState(0);

  const incrementRating = () => {
    setRating((prevRating) => prevRating + 1);
  };

  const decrementRating = () => {
    setRating((prevRating) => Math.max(0, prevRating - 1)); // Prevent negative ratings
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button
          onClick={incrementRating}
          className={`${styles.button} ${styles.primary}`}
        >
          Increment
        </button>
        <button
          onClick={decrementRating}
          className={`${styles.button} ${styles.danger}`}
        >
          Decrement
        </button>
      </div>

      <div className={styles.display}>
        <p>Your rated this product is: {rating}</p>
      </div>
    </div>
  );
};

export default RatingBlock;