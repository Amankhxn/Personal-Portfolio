import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Button from '../components/Button';
import { FaRegPaperPlane } from "react-icons/fa6";
import { BsDot } from 'react-icons/bs';
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <FiMail size={24} />,
    label: "Email",
    value: "amankhan.sknsits.it@gmail.com",
    href: "mailto:amankhan.sknsits.it@gmail.com",
  },
  {
    icon: <FiPhone size={24} />,
    label: "Phone",
    value: "+91 8830162045",
    href: "tel:+918830162045",
  },
  {
    icon: <FiMapPin size={24} />,
    label: "Location",
    value: "Maharashtra, India",
    href: "#",
  },
];

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, 
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

     console.log("helllo")


      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };





  return (
    <section id="contact" className='spaceMaker relative overflow-hidden pt-28 pb-14 grid gap-10  '>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="features  text-center spaceMaker flex flex-col gap-4">
        <p className='text-primary font-semibold '>GET IN TOUCH</p>

        <h1 className='text-5xl'><span className='text-primary font-bold'>Let's Build </span> <span className='text-foreground italic'> something great.</span></h1>
        <p className='text-muted-foreground text-lg '>Have a project in mind? I'd love to hear about it Send me a message and let's discuss how we can work together. </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>

        <form  onSubmit={handleSubmit} className='glass px-6 py-12 rounded-3xl flex flex-col gap-4 border-primary/50 max-w-lg'>

          <div className='flex flex-col gap-2 '>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" autoComplete='off' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Enter your name...' className='outline-none focus:border-primary/50 glass-strong px-4 py-2 rounded-xl' />
          </div>


          <div className='flex flex-col gap-2 '>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" autoComplete='off' required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder=' your@email.com' className='outline-none focus:border-primary/50 glass-strong  px-4 py-2 rounded-xl' />
          </div>

          <div className='flex flex-col gap-2 '>
            <label htmlFor="msg">Message</label>
            <textarea type="email" rows={5} autoComplete='off'  required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} id="msg" placeholder='Your Message..' className='outline-none resize-none focus:border-primary/50 glass-strong  px-4 py-2 rounded-xl' />
          </div>


          <Button
            className="w-full"
            type="submit"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>Sending...</>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </Button>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

        </form>


        <div className='flex flex-col gap-8'>
          <div className="personalDetails relative overflow-hidden  glass px-6 py-10 rounded-3xl flex flex-col gap-4 border-primary/50 max-w-lg">
            <h2>Contact Information</h2>

            {
              contactInfo.map((info, idx) => (
                <div key={idx} className=" flex items-center gap-4  ">
                  <div className='glass h-12 w-12  rounded-2xl text-primary flex justify-center items-center ' >
                    {info.icon}
                  </div>
                  <div className="div details ">
                    <div className="det1 text-muted-foreground font-semibold">
                    <a href={info.href}>{info.label}</a>
                    </div>
                    <div className="det2 text-sm">
                      <a href={info.href}>{info.value}</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='glass py-10 px-5 rounded-2xl max-w-lg border-primary/50'>
            <div className=''>
              <p className='flex items-center animate-pulse'><BsDot className='text-green-500  ' size={34} />Currently Avaiable</p>
            </div>

            <div>
              <p className='text-muted-foreground'>I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consltant let's talk.</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Contact


