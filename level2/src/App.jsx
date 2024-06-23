import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const App = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  const languages = ["NextJS", "ReactJS", "Java", "JavaScript", "Python", "C++", "C#"];
  const languageDropDown = languages.map((language, index) => {
    return (
    <div key={index} className='flex justify-center items-center'>
      <label className="inline-flex items-center"></label>
      <input
        type="checkbox"
        name={`${language}`}
        value={`${language}`}
        checked={values.additionalSkills.includes(`${language}`)}
        onChange={handleChange}
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      />
      <span className="ml-1 text-sm text-gray-700">{language}</span>
    </div>)
  })

  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    const time = `${hours}:${minutes} ${ampm}`;
    const formattedDateTime = `${month} ${day}, ${year} at ${time}`;
  
    return formattedDateTime;
  };

  return (
    <div className=" max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-[40px]">
      {!values.submitted && <form onSubmit={handleSubmit} noValidate>
        <h1 className="text-xl font-bold mb-4">Level 2</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your Phone Number"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Applying for Position</label>
          <div className='mt-1 flex items-center'>
            <select
              value={values.position}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name='position'
            >
              <option>-Select-</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
        </div>
        {(values.position === 'Designer' || values.position === 'Developer') && (
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              id="experience"
              type="number"
              name="experience"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter experience in Years"
              value={values.experience}
              onChange={handleChange}
            />
            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
          </div>
        )}
        {(values.position === 'Designer') && (
          <div className="mb-4">
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
              Portfolio URL
            </label>
            <input
              id="portfolio"
              type="text"
              name="portfolio"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://www.example.com"
              value={values.portfolio}
              onChange={handleChange}
            />
            {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
          </div>
        )}
        {(values.position === 'Manager') && (
          <div className="mb-4">
            <label htmlFor="managerialExperience" className="block text-sm font-medium text-gray-700">
              Managerial Experience
            </label>
            <input
              id="managerialExperience"
              type="number"
              name="managerialExperience"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Managerial Experience in Years"
              value={values.managerialExperience}
              onChange={handleChange}
            />
            {errors.managerialExperience && <p className="text-red-500 text-xs mt-1">{errors.managerialExperience}</p>}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Additional Skills</label>
          <div className="mt-[4px] flex justify-start items-center gap-[10px]">
            {languageDropDown}
          </div>
          {errors.additionalSkills && <p className="text-red-500 text-xs mt-1">{errors.additionalSkills}</p>}
        </div>
        <div className='mb-4'>
          <label className='inline-flex items-center' htmlFor="dateAndTime">Preferred Interview Date and Time</label>
          <input
            className='mt-1 block w-[35%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            type="datetime-local"
            id="dateAndTime" 
            name='dateAndTime'
            onChange={handleChange}
            value={values.dateAndTime}
          />
          {errors.dateAndTime && <p className="text-red-500 text-xs mt-1">{errors.dateAndTime}</p>}
        </div>
        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Submit
        </button>
      </form>}
      {values.submitted && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-medium mb-2">Form Submission Summary</h2>
          <p className="text-sm text-gray-700">Name: {values.name}</p>
          <p className="text-sm text-gray-700">Email: {values.email}</p>
          <p className="text-sm text-gray-700">Phone Number: {values.phoneNumber}</p>
          <p className="text-sm text-gray-700">Position Applied for: {values.position}</p>
          {(values.position === 'Developer' || values.position === 'Designer') && <p className="text-sm text-gray-700">Relevant Experience: {values.experience}</p>}
          {values.position === 'Designer' && <p className="text-sm text-gray-700">Portfolio URL: {values.portfolio}</p>}
          {values.position === 'Manager'&& <p className="text-sm text-gray-700">Managerial Experience: {values.managerialExperience}</p>}
          <p className="text-sm text-gray-700">Additional Skills: {values.additionalSkills.map((skill, index) => {
            return <span key={index}>{skill} </span>
          })}</p>
          <p className="text-sm text-gray-700">Preferred Interview Date & Time: {formatDateTime(values.dateAndTime)}</p>
        </div>
      )}
    </div>
  );
};

export default App;