
import React, { Component } from "react";
import { useForm } from "react-hook-form";

const Contact = () =>{

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log("da",data);

    return (
      <>

{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form> */}

{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      
      <input type="submit" />
    </form> */}


        <section id="contact" className="contact">
          <div className="bg"></div>
          <div className="form">
            <p className="step_main_title">Skontaktuj się z nami</p>
            <div className="decoration"></div>
            <form onSubmit={handleSubmit(onSubmit)}  >
              <div className="data">
                <label>
                  Wpisz swoje imię
                  <input {...register("firstName", {  pattern: /^\S*$/ })}  placeholder="Krzysztof" 
                  aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName && <p role="alert">First name is required</p>}
      
                </label>
                <label>
                  Wpisz swój email
                  <input 
        {...register("mail", { required: "Email Address is required" ,  pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} 
        aria-invalid={errors.mail ? "true" : "false"}  placeholder="abc@xyz.pl" 
      />
      {errors.mail && <p role="alert">fdsafsda</p>}
  
                </label>
              </div>
              <label>
                Wpisz swoją wiadomość
                <textarea 
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                {...register("area", {  minLength: 120, maxLength: 500 })}
                aria-invalid={errors.area ? "true" : "false"} 
                />
                  {errors.area && <p role="alert">area</p>}
              </label>
              <div className="btn">
                <button>Wyślij</button>
              </div>
              
            </form>
          </div>
        </section>
      </>
    );
}

export default Contact;

