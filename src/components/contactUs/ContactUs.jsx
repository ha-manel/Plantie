import React from 'react';

const ContactUs = () => (
  <section className="w-full flex justify-center mt-10">
    <div className="w-full flex flex-col p-10 sm:py-10 sm:px-10 md:w-3/5 md:py-10 lg:pl-32 lg:pr-28">
      <h3 className="header">We&apos;d love to hear from you!</h3>
      <ul className="flex flex-col xl:flex-row my-6 md:px-8 text-primary-500 font-nunito">
        <li>
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-primary-400 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-slate-700">+213-552-52-53-54</p>
          </div>
        </li>
        <li className="xl:mx-3 my-3 xl:my-0">
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-primary-400 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-slate-700">Constantine, Algeria</p>
          </div>
        </li>
        <li>
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-primary-400 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-slate-700">support@plantie.com</p>
          </div>
        </li>
      </ul>
      <form action="" className="max-w-lg flex flex-col md:p-8 pt-4">
        <input
          type="text"
          className="max-w-lg py-4 px-8 rounded-xl bg-secondary-100 font-inter border border-secondary-200 outline-primary-400"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          className="max-w-lg py-4 mt-4 mb-0 px-8 rounded-xl bg-secondary-100 font-inter border border-secondary-200 outline-primary-400"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          className="max-w-lg my-4 py-4 px-8 rounded-xl bg-secondary-100 font-inter border border-secondary-200 outline-primary-400"
          placeholder="Subject"
          required
        />
        <textarea
          className="max-w-lg resize-none py-4 px-8 rounded-xl bg-secondary-100 font-inter border border-secondary-200 outline-primary-400"
          placeholder="Your message..."
          required
        />
        <input
          type="submit"
          value="Send"
          className="mt-8 px-4 py-2 mr-2 cursor-pointer bg-primary-400 hover:bg-primary-300 transition ease-out duration-300 w-fit rounded-lg text-white text-lg font-semibold self-end"
        />
      </form>
    </div>
    <div className="hidden md:flex w-2/5 justify-center bg-secondary-100 rounded-l-full">
      <img
        src="./assets/images/plant6.png"
        alt="plant"
        className="w-4/5 object-contain mb-8"
      />
    </div>
  </section>
);

export default ContactUs;
