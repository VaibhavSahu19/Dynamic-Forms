import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const App = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

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
          <p className="text-sm text-gray-700">Attending with guest: {values.attendingWithGuest}</p>
          {values.attendingWithGuest === 'Yes' && <p className="text-sm text-gray-700">Guest Name: {values.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default App;