
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

const Contact = () => {

  //emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mqop51b', 'template_xaazmgm', form.current, 'DkdeshjOorWhhfZWm')
    e.target.reset();
  }

  //handle submit button messsage

  const messageAlert = (e) => {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('textarea')

    const successMessage = document.getElementById("success");
    const errorMessage = document.getElementById("danger");

    if (name.value === '' && email.value === '' && message.value === '') {
      errorMessage.style.display = 'block'
    } else {
      setTimeout(() => {
        name.value = '';
        email.value = '';
        message.value = '';
      }, 2000);
      successMessage.style.display = 'block'
    }

    setTimeout(() => {
      errorMessage.style.display = 'none'
      successMessage.style.display = 'none'
    }, 4000)
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
                  id='name'
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
                  id='email' 
                  name='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                  values={values.email}
                  onChange={handleChange}
                  className={errors.email && touched.email ? "input-error" : "input-success"}
                ></FormEmailInput>
                {errors.email && touched.email && <p className='message-text-error'>{errors.email} </p>}
          <FormTextArea
                id="textarea"
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
                onClick={messageAlert}
              >
              Enviar
          </FormSendButton>
          <div className='alert-message'>
          <p className="success" id='success'>Sua mensagem foi enviada com sucesso!</p>
          <p className="danger" id='danger'>Houve um erro. Confira se todos os campos foram preenchidos corretamente</p>
          </div>
            </FormContainer>
        </ContactInnerContainer>
    </ContactContainer>
  )
}

export default Contact
