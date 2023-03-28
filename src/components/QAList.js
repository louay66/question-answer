import React from 'react';
import { Row, Accordion } from 'react-bootstrap';
import { question } from '../data';

const QAList = ({data, deletOne}) => {
  

  const localdata = JSON.parse(localStorage.getItem("items"))

  const oneDelet = (ID) => {
    
    if (localStorage.getItem("items") != null)
    {    const index = question.findIndex((item) => item.id === ID);
         question.splice(index, 1);
         deletOne(question);
    }
  }

   return (

      <Row>
         {
          localStorage.getItem("items") != null ? (localdata.map((item, index) => {
            return (<Accordion>
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className='m-auto'>{item.q}</div>
                  </Accordion.Header>
                <Accordion.Body>
                  <div className='mx-3 d-inline'>{item.a}</div>
                  <button onClick={() => oneDelet(item.id)} className='btn-color'>delete</button>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
            )
          })) : <h2 className='fs-10 text-center p-5'> NOT FOUND </h2>
         }
         
      </Row>
   );
};

export default QAList;