
import { useFormik } from 'formik';
import { MainTitle } from '../../Assets/global/global';
import { basicSchema } from '../../schemas/schemas';
import "./contact.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

import {
    ContactContainer,
    ContactInnerContainer,
    FormContainer,
    FormNameLabel,
    FormNameInput,
    FormEmailLabel,
    FormEmailInput,
    FormTextArea,
    FormGender,
    FormGenderTitle,
    FormGenderBox,
    FormGenderContainer,
    FormGenderRadio,
    FormGenderName,
    FormSendButton
} from './contact.styles'


const onSubmit =  async (values, actions) => {
  console.log(values)
  console.log(actions)
  await new Promise((resolve)=> setTimeout((resolve,1000)))
  actions.resetForm();
}

const Contact = () =>  {

    //emailjs
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_mqop51b', 'template_xaazmgm', form.current, 'DkdeshjOorWhhfZWm')

      e.target.reset();


  }
  
  //form validation
  const {values, errors, touched, isSubmitting, handleChange, handleSubmit} = useFormik({
     initialValues: {           
      username: "", 
      email: "",
      option: "",
      textarea: ""
     },
     validationSchema: basicSchema,
     onSubmit,
  });


  return (
      <ContactContainer>
        <ContactInnerContainer>
        <MainTitle>Entre em contato</MainTitle>
            <FormContainer
              onSubmit={sendEmail}
              ref={form}
            >
              <FormNameLabel>Nome</FormNameLabel>
                <FormNameInput
                  name='name'
                  type='text'
                  placeholder='Digite seu nome'
                  values={values.username}
                  onChange={handleChange}
                  className={errors.name && touched.name ? "input-error" : "input-success"}
                >
                </FormNameInput>
          
                <FormEmailLabel>E-mail</FormEmailLabel>
                <FormEmailInput 
                  name='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                  values={values.email}
                  onChange={handleChange}
                  className={errors.email && touched.email ? "input-error" : "input-success"}
                ></FormEmailInput>
                {errors.email && touched.email && <p className='message-text-error'>{errors.email} </p>}
              <FormTextArea
                name='textarea'
                as="textarea"
                values={values.textarea}
                onChange={handleChange}
                placeholder='Digite sua mensagem aqui'
                className={errors.textarea && touched.textarea ? "input-error" : "input-success"}
              >
          </FormTextArea>

          <FormGender>
            <FormGenderTitle>Gender</FormGenderTitle>
              <FormGenderContainer>
              <FormGenderBox>
                  <FormGenderRadio 
                    type="radio"
                    name='option'
                    values={values.option}
                    onChange={handleChange}
                    className={errors.option && touched.option ? "input-error" : "input-success"}
                  >
                  </FormGenderRadio>
                  <FormGenderName>Masculino</FormGenderName>
                </FormGenderBox>
              <FormGenderBox>
                  <FormGenderRadio 
                    name='option'
                    type="radio"
                    values={values.option}
                    onChange={handleChange}
                    className={errors.option && touched.option ? "input-error" : "input-success"}
                  >
                  </FormGenderRadio>
                  <FormGenderName>Feminino</FormGenderName>
                </FormGenderBox>
            </FormGenderContainer>
          </FormGender>

              <FormSendButton
                type='submit'
                disabled={isSubmitting}
              >
              Enviar
          </FormSendButton>
          {}
            </FormContainer>
        </ContactInnerContainer>
    </ContactContainer>
  )
}

export default Contact

//https://www.youtube.com/watch?v=7Ophfq0lEAY&t=2s 11:19
