import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04"; // Assuming Four04 is a 404 component

const ProductPage = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((x) => {
          const slug = x.product_url.split("/").filter(Boolean).pop();
          return slug === pid;
        });
        setProduct(found);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [pid]);

  if (!product) {
    return <Four04 />;
  }

  const {
    product_name,
    product_brief_description,
    product_description,
    product_img,
    starting_price,
    price_range,
  } = product;

  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center bottom-50">
          <div className="col-12 pt-4">
            <div className="title-wraper  bold">{product_name}</div>
            <div className="brief-description">{product_brief_description}</div>
          </div>
        </div>

        <div className="row justify-content-center text-center product-holder h-100">
          <div className="col-sm-12 col-md-6 my-auto">
            <div className="product-title">{product_name}</div>
            <div className="product-description">{product_description}</div>
            <div className="starting-price">{`Starting at ${starting_price}`}</div>
            <div className="monthly-price">{price_range}</div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="product-image pt-5">
              <img src={product_img} alt={product_name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
















// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const { pid } = useParams(); // Using React Router v6+ hook to get params

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         const productList = data.products;
//         // const singleProduct = productList.filter((x) => x.product_name === pid);
//         const singleProduct = data.products.find(
//           (x) => x.product_name.toString() === pid
//         );
//         setProducts(singleProduct);
//         console.log(products);
//       });
//   }, [pid]); // Dependency array includes pid to refetch if it changes
//   if (products.length === 0) {
//     return (
//       <div>
//         <section className="internal-page-wrapper top-100">
//           <div className="container">
//             {products.map((product) => {
//               const {
//                 product_url: id,
//                 product_name: title,
//                 product_img: img,
//                 product_brief_description: Brief,
//                 starting_price: StartPrice,
//                 price_range: PriceRange,
//                 product_description: details,
//               } = product;

//               return (
//                 <div key={id} className="bottom-100">
//                   <div className="row justify-content-center text-center bottom-50">
//                     <div className="col-12">
//                       <div className="title-wraper bold">{title}</div>
//                       <div className="brief-description">{Brief}</div>
//                     </div>
//                   </div>

//                   <div className="row justify-content-center text-center product-holder h-100">
//                     <div className="col-sm-12 col-md-6 my-auto">
//                       <div className="starting-price">
//                         {`Starting at ${StartPrice}`}
//                       </div>
//                       <div className="monthly-price">{PriceRange}</div>
//                       <div className="product-details">{details}</div>
//                     </div>

//                     <div className="col-sm-12 col-md-6">
//                       <div className="prodict-image">
//                         <img src={img} alt={title} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   } else {
//     return <Four04 />;
//   }
// };

// export default ProductPage;

// // src/components/ProductPage/ProductPage.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// const ProductPage = () => {
//   const [product, setProduct] = useState(null);
//   const { pid } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         const foundProduct = data.products.find((x) => x.product_name === pid);
//         // const foundProduct = data.products.find( (x) => x.product_id.toString() === pid
//         // );
//         setProduct(foundProduct || null);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, [pid]);

//   if (!product) {
//     return <Four04 />;
//   }

//   const {
//     product_url: id,
//     product_name: title,
//     product_img: img,
//     product_brief_description: Brief,
//     starting_price: StartPrice,
//     price_range: PriceRange,
//     product_description: details,
//   } = product;

//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center bottom-50">
//             <div className="col-12">
//               <div className="title-wraper bold">{title}</div>
//               <div className="brief-description">{Brief}</div>
//             </div>
//           </div>

//           <div className="row justify-content-center text-center product-holder h-100">
//             <div className="col-sm-12 col-md-6 my-auto">
//               <div className="starting-price">{`Starting at ${StartPrice}`}</div>
//               <div className="monthly-price">{PriceRange}</div>
//               <div className="product-details">{details}</div>
//             </div>

//             <div className="col-sm-12 col-md-6">
//               <div className="product-image">
//                 <img src={img} alt={title} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// const ProductPage = () => {
//   const [product, setProduct] = useState(null);
//   const { pid } = useParams(); // e.g., pid = "https://www.apple.com/in/iphone-se/"

//   useEffect(() => {
//     fetch("http://localhost:3001/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         const foundProduct = data.products.find(
//           (item) => item.product_url === decodeURIComponent(pid)
//         );
//         setProduct(foundProduct || null);
//       });
//   }, [pid]);

//   if (!product) {
//     return <Four04 />;
//   }

//   const {
//     product_url: id,
//     product_name: title,
//     product_img: img,
//     product_brief_description: Brief,
//     starting_price: StartPrice,
//     price_range: PriceRange,
//     product_description: details,
//   } = product;

//   return (
//     <section className="internal-page-wrapper top-100">
//       <div className="container">
//         <div className="bottom-100">
//           <div className="row justify-content-center text-center bottom-50">
//             <div className="col-12">
//               <div className="title-wraper bold">{title}</div>
//               <div className="brief-description">{Brief}</div>
//             </div>
//           </div>

//           <div className="row justify-content-center text-center product-holder h-100">
//             <div className="col-sm-12 col-md-6 my-auto">
//               <div className="starting-price">{`Starting at ${StartPrice}`}</div>
//               <div className="monthly-price">{PriceRange}</div>
//               <div className="product-details">{details}</div>
//             </div>

//             <div className="col-sm-12 col-md-6">
//               <div className="product-image">
//                 <img src={img} alt={title} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
