import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* import { useHistory } from 'react-router-dom'; */

const formRules = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Your first name must be at least 3 char')
      .max(15, 'Too many character, only 15 character is allowed')
      .required(),
    lastName: yup
      .string()
      .min(3, 'Your last name must be at least 3 char')
      .required(),
    email: yup
      .string()
      .email()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        'Not valid email, ex: your.email@hotmail.com'
      )
      .required(),
    body: yup
      .string()
      .min(10, 'You must enter at least 10 character')
      .max(500, 'Only allowed with maximum 500 character')
      .required(),
  })
  .required();

export function FormHook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRules),
  });

  /*   const history = useHistory(); */

  function onSubmit(data) {
    console.log(data);
    setTimeout(() => {
      alert(`Success`);
      /* history.push('/success'); */
    }, 5000);
  }

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label>Your name</label>
        <input
          {...register('firstName')}
          placeholder="Your first name"
          id="contact_form"
        />
        <p className="error_message">{errors.firstName?.message}</p>
        <label>Your last name</label>
        <input
          {...register('lastName')}
          placeholder="Your last name"
          id="contact_form"
        />
        <p className="error_message">{errors.lastName?.message}</p>
        <label>Your email</label>
        <input
          {...register('email')}
          placeholder="your.mail@hotmail.com"
          id="contact_form"
        />
        <p className="error_message">{errors.email?.message}</p>
        <label>Description</label>
        <textarea
          {...register('body')}
          type="text"
          placeholder="Describe your problem"
          id="contact_form"
        />
        <p className="error_message">{errors.body?.message}</p>
        <label>Choose subject</label>
        <select {...register('Subject')} className="rounded-md p-1 m-1">
          <option value="return">Return</option>
          <option value="shipment">Shipment</option>
          <option value="feedback">Feedback</option>
        </select>
        <div className="flex flex-row justify-between w-60 pt-5">
          <div>
            <button
              type="submit"
              className="global_button btn_submit uppercase font-bold"
            >
              Send
            </button>
          </div>
          <div>
            {' '}
            <button
              type="button"
              onClick={handleReset}
              className="global_button btn_reset uppercase font-bold"
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
