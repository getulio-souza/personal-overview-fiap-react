
import {useFormik } from 'formik';
import { basicSchema } from '../../schemas/schemas';
import "./contact.css"

import React from 'react'; 
import {
    ContactContainer,
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
import { MainTitle } from '../../Assets/global/global';

const onSubmit = () => {
  console.log("submitted")
}

const Contact = () =>  {

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
     initialValues: {           
      username: "", 
      email: "",
      gender: "",
      textarea: ""
     },
     validationSchema: basicSchema,
     onSubmit,
  });

  console.log(errors)

  return (
      <ContactContainer>
        <MainTitle>Entre em contato</MainTitle>
            <FormContainer
              onSubmit={handleSubmit}
            >
              <FormNameLabel>Nome</FormNameLabel>
                <FormNameInput
                  name='name'
                  type='text'
                  placeholder='Digite seu nome'
                  values={values.username}
                  onChange={handleChange}
                >
                </FormNameInput>
          
                <FormEmailLabel>E-mail</FormEmailLabel>
                <FormEmailInput 
                  name='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                  values={values.email}
                  onChange={handleChange}
                  className={errors.email&& touched.email ? "input-error" : ""}
                />
              <FormTextArea
                name='textarea'
                as="textarea"
                values={values.textarea}
                onChange={handleChange}
                placeholder='Digite sua mensagem aqui'
              >
          </FormTextArea>

          <FormGender>
            <FormGenderTitle>Gender</FormGenderTitle>
              <FormGenderContainer>
              <FormGenderBox>
                  <FormGenderRadio 
                    type="radio"
                    values={values.gender}
                    onChange={handleChange}
                  >
                  </FormGenderRadio>
                  <FormGenderName>Masculino</FormGenderName>
                </FormGenderBox>
              <FormGenderBox>
                  <FormGenderRadio 
                    type="radio"
                    values={values.gender}
                    onChange={handleChange}
                  >
                  </FormGenderRadio>
                  <FormGenderName>Feminino</FormGenderName>
                </FormGenderBox>
            </FormGenderContainer>
          </FormGender>

              <FormSendButton
                type='submit'
              >
              Enviar
            </FormSendButton>
            </FormContainer>
    </ContactContainer>
  )
}

export default Contact

//https://www.youtube.com/watch?v=7Ophfq0lEAY&t=2s 11:19
