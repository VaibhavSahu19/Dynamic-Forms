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
          <label htmlFor='topic' className="block text-sm font-medium text-gray-700">Survey Topic</label>
          <div className='mt-1 flex items-center'>
            <select
              id='topic'
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
            <div id='techSection' className="mb-4">
              <label htmlFor='favLanguage' className="block text-sm font-medium text-gray-700">Favorite Programming Language</label>
              <div className='mt-1 flex items-center'>
                <select
                  value={values.favLanguage}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name='favLanguage'
                  id='favLanguage'
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
            <div id='healthSection' className="mb-4">
              <label htmlFor='exercise' className="block text-sm font-medium text-gray-700">Exercise Frequency</label>
              <div className='mt-1 flex items-center'>
                <select
                  id='exercise'
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
              <label htmlFor='diet' className="block text-sm font-medium text-gray-700">Diet Preference</label>
              <div className='mt-1 flex items-center'>
                <select
                  id='diet'
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
            <div id='edSection' className="mb-4">
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
        <div className="mb-4">
          <label htmlFor="feedback" className='block text-sm font-medium text-gray-700 mt-2'>
            Feedback
          </label>
          <textarea
            className='mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-20'
            name="feedback" 
            id="feedback" 
            value={values.feedback} 
            onChange={handleChange}
            placeholder='Enter you feedback here'
          ></textarea>
          {errors.feedback && <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>}
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
          <p className="text-sm text-gray-700">Topic: {values.topic}</p>
          {values.topic === 'Technology' && <p className="text-sm text-gray-700">Favorite Language: {values.favLanguage}</p>}
          {values.topic === 'Technology' && <p className="text-sm text-gray-700">Experience: {values.experience}</p>}
          {values.topic === 'Health' && <p className="text-sm text-gray-700">Exercise Frequency: {values.exercise}</p>}
          {values.topic === 'Health' && <p className="text-sm text-gray-700">Diet Type: {values.diet}</p>}
          {values.topic === 'Education' && <p className="text-sm text-gray-700">Qualification: {values.qualification}</p>}
          {values.topic === 'Education' && <p className="text-sm text-gray-700">Field of Study: {values.fieldOfStudy}</p>}
          
        </div>
      )}
    </div>
  );
};

export default App;