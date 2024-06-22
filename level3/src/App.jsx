import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const App = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className=" max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-[40px]">
      {!values.submitted && <form onSubmit={handleSubmit} noValidate>
        <h1 className="text-xl font-bold mb-4">Level 3</h1>
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
          <label className="block text-sm font-medium text-gray-700">Survey Topic</label>
          <div className='mt-1 flex items-center'>
            <select
              value={values.topic}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name='topic'
            >
              <option>-Select-</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
          </div>
          {errors.topic && <p className="text-red-500 text-xs mt-1">{errors.topic}</p>}
        </div>
        {values.topic === 'Technology' && (
          <div className="mb-4">
            <label htmlFor="techSection" className="block text-md font-bold text-gray-700">
              Technology Section
            </label>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Favorite Programming Language</label>
              <div className='mt-1 flex items-center'>
                <select
                  value={values.favLanguage}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name='favLanguage'
                >
                  <option>-Select-</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
              </div>
              {errors.favLanguage && <p className="text-red-500 text-xs mt-1">{errors.favLanguage}</p>}
            </div>
            <label htmlFor="experience" className='block text-sm font-medium text-gray-700'>Experience</label>
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
        {values.topic === 'Health' && (
          <div className="mb-4">
            <label htmlFor="healthSection" className="block text-md font-bold text-gray-700">
              Health Section
            </label>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Exercise Frequency</label>
              <div className='mt-1 flex items-center'>
                <select
                  value={values.exercise}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name='exercise'
                >
                  <option>-Select-</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
              </div>
              {errors.exercise && <p className="text-red-500 text-xs mt-1">{errors.exercise}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Diet Preference</label>
              <div className='mt-1 flex items-center'>
                <select
                  value={values.diet}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name='diet'
                >
                  <option>-Select-</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </div>
              {errors.diet && <p className="text-red-500 text-xs mt-1">{errors.diet}</p>}
            </div>
          </div>
        )}
        {values.topic === 'Education' && (
          <div className="mb-4">
            <label htmlFor="edSection" className="block text-md font-bold text-gray-700">
              Education Section
            </label>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
              <div className='mt-1 flex items-center'>
                <select
                  value={values.qualification}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name='qualification'
                >
                  <option>-Select-</option>
                  <option value="Highschool">Highschool</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification}</p>}
              <label htmlFor="fieldOfStudy" className='block text-sm font-medium text-gray-700 mt-2'>Field of Study</label>
              <input
              id="fieldOfStudy"
              type="number"
              name="fieldOfStudy"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Field of Study"
              value={values.fieldOfStudy}
              onChange={handleChange}
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-xs mt-1">{errors.fieldOfStudy}</p>}
            </div>
          </div>
        )}
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