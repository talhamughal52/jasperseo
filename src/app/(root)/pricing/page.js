import AccordianComponent from "@/components/AccordianComponent";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function page() {
  return (
    <div
      data-elementor-type="wpr-theme-builder"
      data-elementor-id="1086"
      className="elementor elementor-1086 post-35 page type-page status-publish hentry"
    >
      <div
        data-elementor-type="wp-page"
        data-elementor-id="750"
        className="elementor elementor-750"
        style={{ position: "relative" }}
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-172c155 wpr-parallax-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-sticky-section-no"
          data-id="172c155"
          data-element_type="section"
          data-settings='{"background_background":"gradient"}'
        >
          <div className="elementor-background-overlay"></div>
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-becd488"
              data-id="becd488"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-8956bc4 elementor-widget elementor-widget-heading"
                  data-id="8956bc4"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Pricing
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1527e04 elementor-widget elementor-widget-text-editor"
                  data-id="1527e04"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    Home – Pricing
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Box /> */}
        </section>
      </div>

      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-7e2a059 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="7e2a059"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b05ff31"
            data-id="b05ff31"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-627f973 wpr-pricing-table-animation-none wpr-pricing-table-heading-center elementor-widget elementor-widget-wpr-pricing-table"
                data-id="627f973"
                data-element_type="widget"
                data-widget_type="wpr-pricing-table.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-pricing-table">
                    <div className="elementor-repeater-item-a08224e wpr-pricing-table-item wpr-pricing-table-heading wpr-pricing-table-item-first">
                      <div className="wpr-pricing-table-headding-inner">
                        <div className="wpr-pricing-table-title-wrap">
                          <h3 className="wpr-pricing-table-title">Free</h3>
                          <span className="wpr-pricing-table-sub-title">
                            Free Package
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-repeater-item-af513a2 wpr-pricing-table-item wpr-pricing-table-price">
                      <div className="wpr-pricing-table-price-inner">
                        <span className="wpr-pricing-table-currency">$</span>
                        <span className="wpr-pricing-table-sub-price">00</span>
                      </div>
                      <div className="wpr-pricing-table-preiod">/Month</div>
                    </div>
                    <section className="elementor-repeater-item-5c6d9aa wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> 1 CE </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-63aad92 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Unlimited NLP Terms </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-f2db5b9 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Compatitor Analysis </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-38cd695 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Content Score </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-77ba2d7 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Country Wise Research </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-a3b7c11 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Compatitors Missing Terms </span>
                        </span>
                      </div>
                    </section>
                    <div className="elementor-repeater-item-7dbd9c6 wpr-pricing-table-item wpr-pricing-table-button">
                      <SignedIn>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/dashboard"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedIn>
                      <SignedOut>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/sign-in"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedOut>
                    </div>
                    <div className="elementor-repeater-item-2c1a424 wpr-pricing-table-item wpr-pricing-table-text wpr-pricing-table-item-last"></div>
                    <div className="wpr-pricing-table-badge wpr-pricing-table-badge-cyrcle wpr-pricing-table-badge-right">
                      <div className="wpr-pricing-table-badge-inner">Free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-dcee0f1"
            data-id="dcee0f1"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1c92f21 wpr-pricing-table-animation-none wpr-pricing-table-heading-center elementor-widget elementor-widget-wpr-pricing-table"
                data-id="1c92f21"
                data-element_type="widget"
                data-widget_type="wpr-pricing-table.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-pricing-table">
                    <div className="elementor-repeater-item-a08224e wpr-pricing-table-item wpr-pricing-table-heading wpr-pricing-table-item-first">
                      <div className="wpr-pricing-table-headding-inner">
                        <div className="wpr-pricing-table-title-wrap">
                          <h3 className="wpr-pricing-table-title">Starter</h3>
                          <span className="wpr-pricing-table-sub-title">
                            Individual Package
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-repeater-item-af513a2 wpr-pricing-table-item wpr-pricing-table-price">
                      <div className="wpr-pricing-table-price-inner">
                        <span className="wpr-pricing-table-currency">$</span>
                        <span className="wpr-pricing-table-main-price">9</span>
                        <span className="wpr-pricing-table-sub-price">99</span>
                      </div>
                      <div className="wpr-pricing-table-preiod">/Month</div>
                    </div>
                    <section className="elementor-repeater-item-5c6d9aa wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> 6 CE </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-63aad92 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Unlimited NLP Terms </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-f2db5b9 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Compatitor Analysis </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-38cd695 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Content Score </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-77ba2d7 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Country Wise Research </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-2f117cb wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Competitors Missing Terms </span>
                        </span>
                      </div>
                    </section>
                    <div className="elementor-repeater-item-7dbd9c6 wpr-pricing-table-item wpr-pricing-table-button">
                      <SignedIn>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/dashboard"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedIn>
                      <SignedOut>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/sign-in"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedOut>
                    </div>
                    <div className="elementor-repeater-item-2c1a424 wpr-pricing-table-item wpr-pricing-table-text wpr-pricing-table-item-last"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b096e58"
            data-id="b096e58"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-d7e2074 wpr-pricing-table-animation-none wpr-pricing-table-heading-center elementor-widget elementor-widget-wpr-pricing-table"
                data-id="d7e2074"
                data-element_type="widget"
                data-widget_type="wpr-pricing-table.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-pricing-table">
                    <div className="elementor-repeater-item-74a71a4 wpr-pricing-table-item wpr-pricing-table-heading wpr-pricing-table-item-first">
                      <div className="wpr-pricing-table-headding-inner">
                        <div className="wpr-pricing-table-title-wrap">
                          <h3 className="wpr-pricing-table-title">Pro</h3>
                          <span className="wpr-pricing-table-sub-title">
                            Small Company
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-repeater-item-f75dc0a wpr-pricing-table-item wpr-pricing-table-price">
                      <div className="wpr-pricing-table-price-inner">
                        <span className="wpr-pricing-table-currency">$</span>
                        <span className="wpr-pricing-table-main-price">19</span>
                        <span className="wpr-pricing-table-sub-price">99</span>
                      </div>
                      <div className="wpr-pricing-table-preiod">/Month</div>
                    </div>
                    <section className="elementor-repeater-item-ea8fccd wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> 15 CE </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-5ca34a8 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Unlimited NLP Terms </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-777f3f8 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Compatitor Analysis </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-a346111 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Content Score </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-b533d3f wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Country Wise Research </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-eaf1ecc wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Competitors Missing Terms </span>
                        </span>
                      </div>
                    </section>
                    <div className="elementor-repeater-item-ef378a6 wpr-pricing-table-item wpr-pricing-table-button">
                      <SignedIn>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/dashboard"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedIn>

                      <SignedOut>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/sign-in"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedOut>
                    </div>
                    <div className="elementor-repeater-item-bc92d3c wpr-pricing-table-item wpr-pricing-table-text wpr-pricing-table-item-last"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-dc16721"
            data-id="dc16721"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1c8f84b wpr-pricing-table-animation-none wpr-pricing-table-heading-center elementor-widget elementor-widget-wpr-pricing-table"
                data-id="1c8f84b"
                data-element_type="widget"
                data-widget_type="wpr-pricing-table.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-pricing-table">
                    <div className="elementor-repeater-item-20fe7b4 wpr-pricing-table-item wpr-pricing-table-heading wpr-pricing-table-item-first">
                      <div className="wpr-pricing-table-headding-inner">
                        <div className="wpr-pricing-table-title-wrap">
                          <h3 className="wpr-pricing-table-title">Premium</h3>
                          <span className="wpr-pricing-table-sub-title">
                            Businesses
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-repeater-item-0b8d5a6 wpr-pricing-table-item wpr-pricing-table-price">
                      <div className="wpr-pricing-table-price-inner">
                        <span className="wpr-pricing-table-currency">$</span>
                        <span className="wpr-pricing-table-main-price">49</span>
                        <span className="wpr-pricing-table-sub-price">99</span>
                      </div>
                      <div className="wpr-pricing-table-preiod">/Month</div>
                    </div>
                    <section className="elementor-repeater-item-bf03032 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> 60 CE </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-e59a64a wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Unlimited NLP Terms </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-9021e99 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Compatitor Analysis </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-a92e7db wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Content Score </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-163bce5 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Country Wise Research </span>
                        </span>
                      </div>
                    </section>
                    <section className="elementor-repeater-item-821d055 wpr-pricing-table-item wpr-pricing-table-feature">
                      <div className="wpr-pricing-table-feature-inner">
                        <i className="wpr-pricing-table-feature-icon fas fa-check"></i>
                        <span className="wpr-pricing-table-feature-text wpr-pricing-table-ftext-line-">
                          <span> Competitors Missing Terms </span>
                        </span>
                      </div>
                    </section>
                    <div className="elementor-repeater-item-3d9b430 wpr-pricing-table-item wpr-pricing-table-button">
                      <SignedIn>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/dashboard"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedIn>

                      <SignedOut>
                        <Link
                          className="wpr-pricing-table-btn wpr-button-effect wpr-button-none"
                          href="/sign-in"
                        >
                          <span> GET START </span>
                        </Link>
                      </SignedOut>
                    </div>
                    <div className="elementor-repeater-item-0b7b784 wpr-pricing-table-item wpr-pricing-table-text wpr-pricing-table-item-last"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-7c0f1d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="7c0f1d6"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8f7c672"
            data-id="8f7c672"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap"></div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-925a864"
            data-id="925a864"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap"></div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-df35043"
            data-id="df35043"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap"></div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6967ac5 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="6967ac5"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a987639"
            data-id="a987639"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-42dbd7d wpr-advanced-accordion-icon-side-box elementor-widget elementor-widget-wpr-advanced-accordion"
                data-id="42dbd7d"
                data-element_type="widget"
                data-settings='{"active_item":1}'
                data-widget_type="wpr-advanced-accordion.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="wpr-advanced-accordion"
                    data-accordion-type="accordion"
                    data-active-index="1"
                    data-accordion-trigger="click"
                    data-interaction-speed="0.4"
                  >
                    <AccordianComponent
                      heading="How do I purchase a package?"
                      content="To purchase a package, Click on any package and
                            enter your payment details. that's it"
                    />
                    <AccordianComponent
                      heading="Is it possible to request a refund if we don't like
                            the product?"
                      content="Yes, you can get refund within three days of
                      purchase. For refunds, please contact us via live
                      support. After you sign up, you will have access to
                      live support."
                    />
                    <AccordianComponent
                      heading="What methods of payment do you accept?"
                      content="We accept various payment methods, including credit
                      cards, and bank transfers. Contact us if you have
                      any other method"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
