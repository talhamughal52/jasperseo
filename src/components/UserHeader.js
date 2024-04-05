import "../css/header.css";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default async function Header() {
  return (
    <div
      data-elementor-type="wp-post"
      data-elementor-id="1064"
      className="elementor elementor-1064"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-dfcd4c8 elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="dfcd4c8"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4c0c42f"
            data-id="4c0c42f"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-982c581 elementor-widget__width-initial wpr-logo-position-center elementor-widget elementor-widget-wpr-logo"
                data-id="982c581"
                data-element_type="widget"
                data-widget_type="wpr-logo.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-logo elementor-clearfix">
                    <picture className="wpr-logo-image">
                      <img src="/JasperSeo.net_.png" alt="" />
                      <Link className="wpr-logo-url" rel="home" href="/"></Link>
                    </picture>
                    <Link className="wpr-logo-url" rel="home" href="/"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-379583c"
            data-id="379583c"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-e524d09 wpr-main-menu-align-right wpr-main-menu-align--tabletright wpr-main-menu-align--mobileleft wpr-pointer-underline wpr-pointer-line-fx wpr-pointer-fx-fade wpr-sub-icon-caret-down wpr-sub-menu-fx-fade wpr-nav-menu-bp-mobile wpr-mobile-menu-full-width wpr-mobile-menu-item-align-center wpr-mobile-toggle-v1 wpr-sub-divider-yes wpr-mobile-divider-yes elementor-widget elementor-widget-wpr-nav-menu"
                data-id="e524d09"
                data-element_type="widget"
                data-settings='{"menu_layout":"horizontal"}'
                data-widget_type="wpr-nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <nav
                    className="wpr-nav-menu-container wpr-nav-menu-horizontal"
                    data-trigger="hover"
                  >
                    <ul id="menu-1-e524d09" className="wpr-nav-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-753">
                        <Link
                          href="/"
                          aria-current="page"
                          className="wpr-menu-item wpr-pointer-item wpr-active-menu-item"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-752">
                        <Link
                          href="/about"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          About
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1189">
                        <Link
                          href="/pricing"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1191">
                        <Link
                          href="/contact"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav className="wpr-mobile-nav-menu-container">
                    <div className="wpr-mobile-toggle-wrap">
                      <div className="wpr-mobile-toggle">
                        <span className="wpr-mobile-toggle-line"></span>
                        <span className="wpr-mobile-toggle-line"></span>
                        <span className="wpr-mobile-toggle-line"></span>
                      </div>
                    </div>
                    <ul
                      id="mobile-menu-2-e524d09"
                      className="wpr-mobile-nav-menu"
                      style={{ width: "1440px", left: "-389.398px" }}
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-753">
                        <Link
                          href="/"
                          aria-current="page"
                          className="wpr-mobile-menu-item wpr-active-menu-item"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-752">
                        <Link href="/about" className="wpr-mobile-menu-item">
                          About
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1189">
                        <Link href="/pricing" className="wpr-mobile-menu-item">
                          Pricing
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1191">
                        <Link href="/contact" className="wpr-mobile-menu-item">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7085c34"
            data-id="7085c34"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-657c43e wpr-button-icon-style-inline wpr-button-icon-position-right elementor-widget elementor-widget-wpr-button"
                data-id="657c43e"
                data-element_type="widget"
                data-widget_type="wpr-button.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-button-wrap elementor-clearfix">
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                      <Link
                        className="wpr-button wpr-button-effect wpr-button-none"
                        data-text="Go"
                        href="/sign-in"
                      >
                        <span className="wpr-button-content">
                          <span className="wpr-button-text">Start Free</span>
                          <span className="wpr-button-icon">
                            <i className="fas fa-arrow-circle-right"></i>
                          </span>
                        </span>
                      </Link>
                    </SignedOut>

                    {/* {login === false ? (
                      <Link
                        className="wpr-button wpr-button-effect wpr-button-none"
                        data-text="Go"
                        href="/sign-in"
                      >
                        <span className="wpr-button-content">
                          <span className="wpr-button-text">Start Free</span>
                          <span className="wpr-button-icon">
                            <i className="fas fa-arrow-circle-right"></i>
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <Link
                        className="wpr-button wpr-button-effect wpr-button-none"
                        data-text="Go"
                        href="/home"
                      >
                        <span className="wpr-button-content">
                          <span className="wpr-button-text">Go To Home</span>
                          <span className="wpr-button-icon">
                            <i className="fas fa-arrow-circle-right"></i>
                          </span>
                        </span>
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-adaefe9 elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="adaefe9"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6e6873e"
            data-id="6e6873e"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-75767d6 wpr-logo-position-center elementor-widget elementor-widget-wpr-logo"
                data-id="75767d6"
                data-element_type="widget"
                data-widget_type="wpr-logo.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-logo elementor-clearfix">
                    <picture className="wpr-logo-image">
                      <img src="/cropped-JasperSeo-02.png" alt="" />
                      <Link className="wpr-logo-url" rel="home" href="/"></Link>
                    </picture>
                    <Link className="wpr-logo-url" rel="home" href="/"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1563041"
            data-id="1563041"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-2715e08 wpr-main-menu-align-right wpr-main-menu-align--tabletright wpr-main-menu-align--mobileleft wpr-pointer-underline wpr-pointer-line-fx wpr-pointer-fx-fade wpr-sub-icon-caret-down wpr-sub-menu-fx-fade wpr-nav-menu-bp-mobile wpr-mobile-menu-full-width wpr-mobile-menu-item-align-center wpr-mobile-toggle-v1 wpr-sub-divider-yes wpr-mobile-divider-yes elementor-widget elementor-widget-wpr-nav-menu"
                data-id="2715e08"
                data-element_type="widget"
                data-settings='{"menu_layout":"horizontal"}'
                data-widget_type="wpr-nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <nav
                    className="wpr-nav-menu-container wpr-nav-menu-horizontal"
                    data-trigger="hover"
                  >
                    <ul id="menu-1-2715e08" className="wpr-nav-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-807">
                        <Link
                          href="/"
                          aria-current="page"
                          className="wpr-menu-item wpr-pointer-item wpr-active-menu-item"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-809">
                        <Link
                          href="/about"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          About
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-808">
                        <Link
                          href="/"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-810">
                        <Link
                          href="/contact"
                          className="wpr-menu-item wpr-pointer-item"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav className="wpr-mobile-nav-menu-container">
                    <div className="wpr-mobile-toggle-wrap">
                      <div className="wpr-mobile-toggle">
                        <span className="wpr-mobile-toggle-line"></span>
                        <span className="wpr-mobile-toggle-line"></span>
                        <span className="wpr-mobile-toggle-line"></span>
                      </div>
                    </div>
                    <ul
                      id="mobile-menu-2-2715e08"
                      className="wpr-mobile-nav-menu"
                      style={{ width: "497.516px", left: "0px" }}
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-747 current_page_item menu-item-807">
                        <Link
                          href="/"
                          aria-current="page"
                          className="wpr-mobile-menu-item wpr-active-menu-item"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-809">
                        <Link href="/about" className="wpr-mobile-menu-item">
                          About
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-808">
                        <Link href="/" className="wpr-mobile-menu-item">
                          Blog
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-810">
                        <Link href="/contact" className="wpr-mobile-menu-item">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
