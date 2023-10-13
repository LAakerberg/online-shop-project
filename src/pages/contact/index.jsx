import React from 'react';
import { FormHook } from '../../hooks/contact/ContactHook';

function FormInput() {
  return (
    <div className="bg-white border border-gray-600 rounded-md mb-5 p-1 flex flex-col">
      <div className="max-w-lg flex flex-col p-2">
        <FormHook className="" />
      </div>
      <div className="flex flex-col p-2"></div>
    </div>
  );
}

export function Contact() {
  return (
    <>
      <div>
        <h3>Contact Form</h3>
      </div>
      <FormInput />
    </>
  );
}
