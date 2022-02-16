import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import {Alert, Button,FormGroup,FormLabel,} from 'react-bootstrap';
import KodlamaIoTextInput from '../utilities/KodlamaIoTextInput';


export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values)=>{
                    console.log(values);
                }}
            >
                <Form className="mb-3"  >
                <KodlamaIoTextInput name="productName" placeholder="ürün adı" /> 
                    <FormGroup className='mt-3' >
                        <FormLabel>Ürün Adı   :  </FormLabel>
                        <Field name="productName" placeholder="Ürün adı" />
                        <ErrorMessage name='productName' render={error =>
                            <Alert  variant='danger' content={error}>Lütfen Ürün adı Giriniz!</Alert>
                        } />                  
                    </FormGroup>
                
                    <FormGroup>
                        <FormLabel className='mt-3' >Ürün Fiyatı   :  </FormLabel> 
                        <Field name="unitPrice" placeholder="Ürün Fiyatı" />  
                        <ErrorMessage name='unitPrice' render={error =>
                            <Alert  variant='danger' content={error}>Lütfen Ürün Fiyatı Giriniz!</Alert>
                        } />   
                        </FormGroup>           
                    <Button className='mt-3' variant="success" type="submit">
                        Ekle
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
