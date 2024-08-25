import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="my-9 border-2 shadow-md shadow-white w-1/2 mx-auto rounded-lg bg-slate-900">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-100 sm:text-3xl md:mb-6 p-7">
          Medicine Information App
        </h1>

        <p className="mb-6 text-white sm:text-lg md:mb-8">
          Welcome to our Medicine Information App! This tool allows you to
          quickly and easily access essential information about various
          medicines, helping you stay informed and safe. Simply enter the name
          of a medicine, and our app will provide you with details such as
          warnings, indications, adverse reactions, and active ingredients.
        </p>

        <h2 className="mb-2 text-xl font-semibold text-gray-50 sm:text-2xl md:mb-4">
          About the App
        </h2>

        <p className="mb-6 text-gray-200 sm:text-lg md:mb-8">
          Our app is designed to make it easy for users to access important
          information about medicines. Whether you're a healthcare professional
          or a curious consumer, our app provides accurate and up-to-date
          information on a wide range of medicines.
        </p>

        <ul className="mb-6 list-inside list-disc text-gray-100 sm:text-lg md:mb-8">
          <li>Search for detailed medicine information</li>
          <li>Get warnings, indications, and more</li>
          <li>User-friendly interface for quick access</li>
        </ul>

        <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-100 sm:text-lg md:mb-8 md:pl-6">
          “This app is a reliable resource for anyone looking to understand more
          about the medicines they use.”
        </blockquote>

        <h2 className="mb-2 text-xl font-semibold text-gray-100 sm:text-2xl md:mb-4">
          Key Features
        </h2>

        <p className="text-gray-100 sm:text-lg">
          Our app provides comprehensive information on medicines, including:
          warnings, indications, adverse reactions, and active ingredients. The
          interface is simple and easy to use, making it accessible to everyone.
        </p>
        <div className="flex justify-center mx-auto py-4 my-4 ">
          <Link to="/search">
            <button className="bg-indigo-500 w-56 p-2 rounded-lg hover:bg-indigo-400">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home