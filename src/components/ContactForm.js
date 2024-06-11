"use client";

import { createContact } from "@/lib/actions/contacts.actions";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    setIsLoading(true);
    setTimeout(async () => {
      const responce = await createContact(event);
      if (responce) {
        toast.success("Thanks for contacting us ! You will be contacted soon.");
      } else {
        toast.error("Please try again later");
      }
      setIsLoading(false);
    }, 100);
  };
  return (
    <form
      action={handleSubmit}
      method="POST"
      className="wpcf7-form init"
      aria-label="Contact form"
      data-status="init"
    >
      <div style={{ display: "none" }}>
        <input type="hidden" name="_wpcf7" defaultValue="1002" />
        <input type="hidden" name="_wpcf7_version" defaultValue="5.7.6" />
        <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
        <input
          type="hidden"
          name="_wpcf7_unit_tag"
          defaultValue="wpcf7-f1002-p750-o1"
        />
        <input type="hidden" name="_wpcf7_container_post" defaultValue="750" />
        <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
      </div>
      <p>
        <label>
          Your name
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-name">
            <input
              required
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              type="text"
              name="name"
            />
          </span>
        </label>
      </p>
      <p>
        <label>
          Your email
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-email">
            <input
              required
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              aria-required="true"
              aria-invalid="false"
              type="email"
              name="email"
            />
          </span>
        </label>
      </p>
      <p>
        <label>
          Subject
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-subject">
            <input
              required
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              type="text"
              name="subject"
            />
          </span>
        </label>
      </p>
      <p>
        <label>
          Your message (optional)
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-message">
            <textarea
              required
              cols="40"
              rows="10"
              className="wpcf7-form-control wpcf7-textarea"
              aria-invalid="false"
              name="message"
            ></textarea>
          </span>
        </label>
      </p>

      <div className="wpcf7-form-control wpcf7-submit">
        {isLoading ? (
          <CircularProgress
            style={{
              color: "white",
              width: "42px",
              height: "42px",
              margin: "0 36px",
            }}
          />
        ) : (
          <button
            style={{ color: "white", border: "none" }}
            className="contactSubmitButton"
          >
            Submit
          </button>
        )}
      </div>

      <div className="wpcf7-response-output" aria-hidden="true"></div>
    </form>
  );
};

export default ContactForm;
