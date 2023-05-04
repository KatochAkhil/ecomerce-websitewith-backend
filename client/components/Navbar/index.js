import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  // background-header
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(localStorage.getItem("user"));
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(localStorage.getItem("totalProductscart"));
    }
  }, [total]);

  return (
    <header
      className={
        scroll
          ? "header-area header-sticky background-header"
          : "header-area header-sticky"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link href="/" className="logo">
                <img src={`${process.env.NEXT_PUBLIC_URL}./images/logo.png`} />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/about">About</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/products/mens">Mens</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/products/women">Women</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/products/kids">Kids</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/products">Products</Link>
                </li>
                {user ? (
                  <li className="scroll-to-section">
                    <Link
                      href="/login"
                      onClick={() => {
                        localStorage.removeItem("user");
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="scroll-to-section">
                      <Link href="/login">Login</Link>
                    </li>
                    <li className="scroll-to-section">
                      <Link href="/register">Register</Link>
                    </li>
                  </>
                )}
                <li className="scroll-to-section ">
                  <Link href="/cart" className="d-flex items-center cart_link">
                    <span className="total_items">{total}</span>
                    <Icon
                      icon="material-symbols:add-shopping-cart-sharp"
                      width={25}
                    />
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
