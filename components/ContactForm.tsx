"use client";

import { HeadingStyles } from "@/lib/styles";
import React, { useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

type FormData = {
  subject: string;
  email: string;
  message: string;
  name: string;
};

const defaultFormData: FormData = {
  subject: "",
  email: "",
  message: "",
  name: "",
};

const ContactForm = () => {
  const [formData, setformData] = useState(defaultFormData);
  const [formValid, setformValid] = useState(false);

  const validate = () => {
    const valid = Object.entries(formData).every(
      ([_key, value]) => value.trim() !== "" && value.length > 4
    );

    return valid;
  };

  const sendEmail = (data: FormData) => {
    const { name, subject, message, email } = data;

    const values = {
      name,
      subject,
      message,
      email,
      reply_to: email,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_serviceID as string,
        process.env.NEXT_PUBLIC_templateID as string,
        values,
        process.env.NEXT_PUBLIC_publicKey as string
      )
      .then(() => {
        toast.success("Email sent successfully");
      })
      .catch(() => {
        toast.error("Failed to send email!");
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setformValid(true);
      sendEmail(formData);
      setformData(defaultFormData);
    } else {
      setformValid(false);
    }
  };

  return (
    <form className="max-w-md mx-auto sm:mx-0" onSubmit={handleSubmit}>
      <div className="text-center mb-2">
        <legend className={HeadingStyles.size.base}>Send an email</legend>
        <small className="text-red-500">All fields are required</small>
      </div>

      <div className="space-y-5">
        <div className="input-group space-y-2">
          <label htmlFor="name" className="cursor-pointer">
            Full name
          </label>

          <input
            type="text"
            id="name"
            value={formData.name}
            minLength={5}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            placeholder="Type your full name"
            className="h-10 bg-white rounded-md bg-opacity-10 px-4 border border-gray-500 focus:border-primary outline-0 w-full"
            required
          />
        </div>

        <div className="input-group space-y-2">
          <label htmlFor="subject" className="cursor-pointer">
            Subject
          </label>

          <input
            type="text"
            id="subject"
            minLength={5}
            value={formData.subject}
            onChange={(e) =>
              setformData({ ...formData, subject: e.target.value })
            }
            placeholder="Type a subject"
            className="h-10 bg-white rounded-md bg-opacity-10 px-4 border border-gray-500 focus:border-primary outline-0 w-full"
            required
          />
        </div>

        <div className="input-group space-y-2">
          <label htmlFor="email" className="cursor-pointer">
            Your email
          </label>

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            placeholder="Type your email"
            className="h-10 bg-white rounded-md bg-opacity-10 px-4 border border-gray-500 focus:border-primary outline-0 w-full"
            required
          />
        </div>

        <div className="input-group space-y-2">
          <label htmlFor="message" className="cursor-pointer">
            Message
          </label>

          <textarea
            id="message"
            minLength={5}
            value={formData.message}
            onChange={(e) =>
              setformData({ ...formData, message: e.target.value })
            }
            placeholder="Type your message"
            className="min-h-[10rem] bg-white rounded-md bg-opacity-10 p-4 border border-gray-500 focus:border-primary outline-0 w-full"
            required
          />
        </div>

        <Button className="w-full" variant="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
