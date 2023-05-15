
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'

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

function Contact() {
  return (
      <ContactContainer>
        <MainTitle>Entre em contato</MainTitle>
          <Formik
          initialValues={{
            name: '',
            email: '',
            textarea: '',
            gender: ''
        }}
        
        validationSchema={
          Yup.object({
            name: Yup.string().required("Required"),
          })
        }

        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
          >
            <FormContainer>
              <FormNameLabel>Nome</FormNameLabel>
                <FormNameInput
                  name='name'
                  type='text'
                  placeholder='Digite seu nome'
                >
                </FormNameInput>
            <ErrorMessage name='name' />
          
                <FormEmailLabel>E-mail</FormEmailLabel>
                <FormEmailInput 
                  name='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                >
                </FormEmailInput>
              <FormTextArea
                as="textarea"
                placeholder='Digite sua mensagem aqui'
              >
          </FormTextArea>

          <FormGender>
            <FormGenderTitle>Gender</FormGenderTitle>
              <FormGenderContainer>
              <FormGenderBox>
                  <FormGenderRadio type="radio"></FormGenderRadio>
                  <FormGenderName>Masculino</FormGenderName>
                </FormGenderBox>
              <FormGenderBox>
                  <FormGenderRadio type="radio"></FormGenderRadio>
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
          </Formik>
    </ContactContainer>
  )
}

export default Contact