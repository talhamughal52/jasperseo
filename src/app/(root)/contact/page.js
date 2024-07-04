import ContactForm from "@/components/ContactForm";
import "@/css/contact.css";

export default function page() {
  return (
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
                    Contact
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1527e04 elementor-widget elementor-widget-text-editor"
                data-id="1527e04"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">Home – Contact</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-bfd7705 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
        data-id="bfd7705"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a23ed5f animated fadeIn"
            data-id="a23ed5f"
            data-element_type="column"
            data-settings='{"animation":"fadeIn"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-f8d6663 elementor-widget elementor-widget-heading"
                data-id="f8d6663"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Contact Us
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-cb08af2 elementor-widget elementor-widget-heading"
                data-id="cb08af2"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Get in Touch with Our SEO Experts
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-45eb5cb elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="45eb5cb"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <link
                    rel="stylesheet"
                    href="https://jasperseo.net/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
                  />
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i aria-hidden="true" className="fas fa-envelope"></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        support@jasperseo.net
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-map-marker-alt"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Office 4165, 58 Peregrine Road, Hainault, Ilford, Essex,
                        United Kingdom, IG6 3SZ
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1920648"
            data-id="1920648"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-cc05dc0 wpr-forms-submit-justify wpr-forms-align-left elementor-widget elementor-widget-wpr-forms animated fadeIn"
                data-id="cc05dc0"
                data-element_type="widget"
                data-settings='{"_animation":"fadeIn","_animation_delay":100}'
                data-widget_type="wpr-forms.default"
              >
                <div className="elementor-widget-container">
                  <div className="wpr-forms-container wpr-custom-chk-radio">
                    <div
                      className="wpcf7 js"
                      id="wpcf7-f1002-p750-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        ></p>
                        <ul></ul>
                      </div>
                      <ContactForm />
                    </div>
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
