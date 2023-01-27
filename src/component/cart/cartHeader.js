import React from "react";
import { Fragment } from "react";
import "./cartHeader.css";

class CartHeader extends React.Component {
  render() {
    return (
      <Fragment>
        <header className="cart-header">
          {/* <div className="cart-top"> */}
            <div className=" me-0 ms-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 col-md-6">
                  <div className="main_menu">
                    <nav>
                      <ul className="">
                        <li className="">
                          <a href="/" className="text-decoration-none fs-6">
                            Trang Chủ <i className="ion-chevron-down"></i>
                          </a>
                          <ul className="sub_menu cart-nav">
                            <li>
                              <a href="/">Banner</a>
                            </li>
                            <li>
                              <a href="/">Featured</a>
                            </li>
                            <li>
                              <a href="/">Collection</a>
                            </li>
                            <li>
                              <a href="/">Best Selling</a>
                            </li>
                            <li>
                              <a href="/">News</a>
                            </li>
                            <li>
                              <a href="/">Blog</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/" className="text-decoration-none fs-6">
                            Danh Mục <i className="ion-chevron-down"></i>
                          </a>
                          <ul className="mega_menu cart_mega">
                            <li>
                              <ul>
                                <li>
                                  <a href="/">Hoa Tai</a>
                                </li>
                                <li>
                                  <a href="/">Mặt Dây Chuyền</a>
                                </li>
                                <li>
                                  <a href="/">Nhẫn</a>
                                </li>
                                <li>
                                  <a href="/">Chuỗi ngọc</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  <a href="/">Lắc Tay</a>
                                </li>

                                <li>
                                  <a href="/">Vòng tay</a>
                                </li>

                                <li>
                                  <a href="/">Đá quý</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              {/* <a href="/">Other</a> */}
                              <ul>
                                <li>
                                  <a href="/">Bạch Kim</a>
                                </li>
                                <li>
                                  <a href="/">Bạc</a>
                                </li>
                                {/* <li>
                                  <a href="/">Coins</a>
                                </li> */}
                                <li>
                                  <a href="/">Pha Lê</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="/" className="text-decoration-none fs-6">
                            Giới Thiệu
                          </a>
                        </li>
                        <li>
                          <a href="/" className="text-decoration-none fs-6">
                            Liên Hệ
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="logo">
                    <h1>Jazzy</h1>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 flex-cart">
                  <div className="top_right text-right">
                    <ul className="p-0">
                      <li>
                        <div className="search_btn">
                          <a href="/">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </a>
                          <div className="dropdown_search">
                            <form action="/">
                              <input
                                type="text"
                                placeholder="Search Product ...."
                              />
                              <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li>
                      <div className="middel_right">
                    <div className="cart_link ms-0 mb-0">
                      <a href="/" className="text-decoration-none">
                        <i className="fa-solid fa-bag-shopping fs-4 me-4"></i>
                        <span className="me-2">67,598</span>
                        <i className="fa fa-solid fa-chevron-down"></i>
                      </a>
                      <span className="quantity">2</span>
                    </div>
                  </div>
                      </li>

                      <li className="top_links">
                        <a href="/" className="text-decoration-none fs-6">
                          Tài khoản<i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown_links">
                          <li>
                            <a href="/">Thông Tin</a>
                          </li>
                          <li>
                            <a href="/">Giỏ Hàng</a>
                          </li>
                          <li>
                            <a href="/">Đăng Xuất</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </header>
      </Fragment>
    );
  }
}

export default CartHeader;
