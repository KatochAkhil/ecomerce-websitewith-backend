import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";

function LatestWomen() {
  const options = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section" id="women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Women's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="women-item-carousel">
              <div
                className="
              "
              >
                <Slider {...options}>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="ic:baseline-remove-red-eye"
                                width={30}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon icon="material-symbols:star" width={30} />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="material-symbols:shopping-cart-rounded"
                                width={30}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src="./images/women-01.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>New Green Jacket</h4>
                      <span>$75.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="ic:baseline-remove-red-eye"
                                width={30}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon icon="material-symbols:star" width={30} />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="material-symbols:shopping-cart-rounded"
                                width={30}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src="./images/women-02.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>ClassNameclassNameic Dress</h4>
                      <span>$45.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="ic:baseline-remove-red-eye"
                                width={30}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon icon="material-symbols:star" width={30} />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="material-symbols:shopping-cart-rounded"
                                width={30}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src="./images/women-03.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Spring Collection</h4>
                      <span>$130.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="ic:baseline-remove-red-eye"
                                width={30}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon icon="material-symbols:star" width={30} />
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <Icon
                                icon="material-symbols:shopping-cart-rounded"
                                width={30}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src="./images/women-01.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>ClassNameclassNameic Spring</h4>
                      <span>$120.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestWomen;
