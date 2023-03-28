import React, { useState } from 'react';
import { Form , Row, Col} from 'react-bootstrap';
import { question } from '../data';

const FormInput = ({onAdd}) => {
   const [qu, setQU] = useState('')
   const [au, setAN] = useState('')
   const addNewItem = () => {
      question.push({id:Math.random(), q:qu, a:au});
      setQU('');
      setAN('');
      onAdd();

   }
   return (
      <Row className='my-2'>
         <Col sm='5'>
            <Form.Control value={qu} onChange={(e) => setQU(e.target.value)} type='text' placeholder="enter question" />
         </Col>
         <Col sm='5'>
         <Form.Control value={au} onChange={(e) => setAN(e.target.value)} type='text' placeholder="Enter Answer" />
         </Col>
         <Col sm='2'>
            <button onClick={addNewItem} className='btn-color w-100' type='submit '>Submit</button>
         </Col>
      </Row>
   );
};

export default FormInput;