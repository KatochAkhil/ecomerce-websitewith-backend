import Link from "next/link";
import React from "react";

function Category({ categories }) {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {categories?.map((item) => (
            <div className="col-lg-4">
              <Link href={`/products/${item.title}`}>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content"></div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">{">"}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
