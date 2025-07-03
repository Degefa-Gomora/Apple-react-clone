

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./iphone.css";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setProducts(() => data.products);
//       })
//       .catch(() => console.log(`Err: unable to fetch!`));
//   }, []);


//   let order = 1;

//   return (
//     <div style={{ paddingTop: "80px" }}>
      
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>
//           {products.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.product_img;
//             let Brief = product.product_brief_description;
//             let StartPrice = product.starting_price;
//             let PriceRange = product.price_range;
//             let productPage = "/iphone/" + id;

//             // let order1 = 2;
//             // let order2 = 1;
//             // if (order !== 1) {
//             //   order1 = 1;
//             //   order2 = 2;
//             //   order--;
//             // } else {
//             //   order++;
//             // }
//             let order1 = order !== 1 ? 1 : 2; //If order is not equal to 1, then order1 = 1; otherwise, order1 = 2.
//             let order2 = order !== 1 ? 2 : 1; //If order is not 1, then order2 = 2; otherwise, order2 = 1.
//             order += order === 1 ? 1 : -1;//If order === 1, increment order by 1 (i.e., order++)Else, decrement order by 1 (i.e., order--)

//             return (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100 my-5"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={img} alt={title} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Iphone;




// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";

// // // function Iphone() {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     fetch("/iphones.json")
// // //       .then((res) => res.json())
// // //       .then((products) => {
// // //         setProducts(() => products.products);
// // //       });
// // //   }, []);

// // //   console.log(products);
// // //   let order = 1;
// // //   return (
// // //     <div>
// // //       <section className="internal-page-wrapper top-100">
// // //         <div className="container">
// // //           <div className="row justify-content-center text-center">
// // //             <div className="col-12">
// // //               <div className="title-wraper bold">Iphones</div>
// // //               <div className="brief-description">
// // //                 The best for the brightest.
// // //               </div>
// // //             </div>
// // //           </div>
// // //           {products.map((product) => {
// // //             let id = product.product_url;
// // //             let title = product.product_name;
// // //             let img = product.product_img;
// // //             let Brief = product.product_brief_description;
// // //             let StartPrice = product.starting_price;
// // //             let PriceRange = product.price_range;
// // //             let productPage = "/iphone/" + id;

// // //             let order1 = 1;
// // //             let order2 = 2;
// // //             if (order !== 1) {
// // //               order1 = 2;
// // //               order2 = 1;
// // //               order--;
// // //             } else {
// // //               order++;
// // //             }

// // //             let productDiv = (
// // //               <div
// // //                 key={id}
// // //                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
// // //               >
// // //                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
// // //                   <div className="product-title">{title}</div>
// // //                   <div className="product-brief">{Brief}</div>
// // //                   <div className="starting-price">
// // //                     {`Starting at ${StartPrice}`}
// // //                   </div>
// // //                   <div className="monthly-price">{PriceRange}</div>
// // //                   <div className="links-wrapper">
// // //                     <ul>
// // //                       <li>
// // //                         <Link to={productPage}>Learn more</Link>
// // //                       </li>
// // //                     </ul>
// // //                   </div>
// // //                 </div>

// // //                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
// // //                   <div className="prodict-image">
// // //                     <img src={img} alt="" />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //             return productDiv;
// // //           })}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // // export default Iphone;

// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";

// // // function Iphone() {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     fetch("http://localhost:3001/iphones")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setProducts(data.products);
// // //       })
// // //       .catch((error) => console.error("Fetch error:", error));
// // //   }, []);

// // //   return (
// // //     <div style={{ paddingTop: "80px" }}>
// // //       <section className="internal-page-wrapper">
// // //         <div className="container">
// // //           <div className="row justify-content-center text-center">
// // //             <div className="col-12">
// // //               <div className="title-wraper bold">iPhones</div>
// // //               <div className="brief-description">
// // //                 The best for the brightest.
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {products.map((product, index) => {
// // //             const order1 = index % 2 === 0 ? 1 : 2;
// // //             const order2 = index % 2 === 0 ? 2 : 1;

// // //             return (
// // //               <div
// // //                 key={product.product_url}
// // //                 className="row justify-content-center text-center product-holder my-5"
// // //               >
// // //                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
// // //                   <div className="product-title">{product.product_name}</div>
// // //                   <div className="product-brief">
// // //                     {product.product_brief_description}
// // //                   </div>
// // //                   <div className="starting-price">
// // //                     {`Starting at ${product.starting_price}`}
// // //                   </div>
// // //                   <div className="monthly-price">{product.price_range}</div>
// // //                   <div className="links-wrapper">
// // //                     <ul>
// // //                       <li>
// // //                         <Link to={`/iphone/${product.product_url}`}>
// // //                           Learn more
// // //                         </Link>
// // //                       </li>
// // //                     </ul>
// // //                   </div>
// // //                 </div>

// // //                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
// // //                   <div className="product-image">
// // //                     <img
// // //                       src={`http://localhost:3001${product.product_img}`}
// // //                       alt={product.product_name}
// // //                       style={{ maxWidth: "100%" }}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default Iphone;



// // src/components/Iphone/Iphone.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./iphone.css";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch(() => console.log("Err: unable to fetch!"));
//   }, []);

//   return (
//     <div style={{ paddingTop: "80px" }}>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">iPhones</div>
//               <div className="brief-description">The best for the brightest.</div>
//             </div>
//           </div>

//           {products.map((product, index) => {
//             const {
//               product_url: id,
//               product_name: title,
//               product_img: img,
//               product_brief_description: Brief,
//               starting_price: StartPrice,
//               price_range: PriceRange,
//             } = product;

//             const productPage = `/iphone/${id}`;
//             const order1 = index % 2 === 0 ? 2 : 1;
//             const order2 = index % 2 === 0 ? 1 : 2;

//             return (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100 my-5"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">{`Starting at ${StartPrice}`}</div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={img} alt={title} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Iphone;





//********************************* */
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./iphone.css";


// const Iphone = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);

//   return (
//     <section className="internal-page-wrapper top-100">
//       <div className="container">
//         {products.map((product) => {
//           const {
//             product_name,
//             product_brief_description,
//             product_img,
//             starting_price,
//             price_range,
//             product_url,
//           } = product;

//           const slug = product_url.split("/").filter(Boolean).pop();
//           const order1 = index % 2 === 0 ? 2 : 1;
//           const order2 = index % 2 === 0 ? 1 : 2;

//           return (
//             <div
//               className="row justify-content-center text-center bottom-50"
//               key={slug}
//             >
//               <div className="col-12 col-md-6 order-${order1}">
//                 <div className="title-wraper bold">{product_name}</div>
//                 <div className="brief-description">
//                   {product_brief_description}
//                 </div>
//                 <div className="starting-price">{`Starting at ${starting_price}`}</div>
//                 <div className="monthly-price">{price_range}</div>
//                 <div className="links-wrapper">
//                   <ul>
//                     <li>
//                       <Link to={`/iphone/${slug}`}>Learn more</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 order-${order1}">
//                 <div className="prodict-image">
//                   <img src={product_img} alt={product_name} />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Iphone;




//#########################
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./iphone.css";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        {products.map((product, index) => {
          const {
            product_name,
            product_brief_description,
            product_img,
            starting_price,
            price_range,
            product_url,
          } = product;

          const slug = product_url.split("/").filter(Boolean).pop(); //extracts the last part of a URL
          //1"https://www.apple.com/in/iphone-se/".split("/");
          // Result: ["https:", "", "www.apple.com", "in", "iphone-se", ""]
          //2["https:", "", "www.apple.com", "in", "iphone-se", ""].filter(Boolea);
          // Result: ["https:", "www.apple.com", "in", "iphone-se"]
          //3["https:", "www.apple.com", "in", "iphone-se"].pop()
          // Result: "iphone-se"
          const order1 = index % 2 === 0 ? 2 : 1;
          const order2 = index % 2 === 0 ? 1 : 2;

          return (
            <div
              className="row justify-content-center text-center bottom-50"
              key={slug}
            >
              <div className={`col-12 col-md-6 p5-5 order-${order1}`}>
                <div className="title-wraper  bold">{product_name}</div>
                <div className="brief-description">
                  {product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${starting_price}`}</div>
                <div className="monthly-price">{price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${slug}`}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`col-12 col-md-6 pt-5 order-${order2}`}>
                <div className="prodict-image pt-5">
                  <img src={product_img} alt={product_name} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Iphone;
