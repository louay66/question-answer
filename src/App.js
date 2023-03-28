import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import { question } from './data';

function App() {
  const [data, setdata] = useState(question)
  
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setdata([...question])
  }
  
  const deletAll = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length)
    setdata([])
  }
  const deletOne = (item) => {
    localStorage.setItem("items", JSON.stringify([...item]));
    setdata([...item])
    if (item.length <= 0) {
      deletAll();
    }
  }
  
  return (
    <div className="font text-center color-body py-3">
      <Container>
      <Row className='justify-content-center'>
        <Col sm='4'>
          <div className='fs-3 text-center py-3'>The Common Q&A</div>
        </Col>
        <Col sm='8' className='py-3'>
          <FormInput onAdd = {addItem}/>
          <QAList data={data}  deletOne={deletOne}/>
          {
          localStorage.getItem("items") != null? (<button onClick={deletAll} className='btn-color w-100 my-2'> Delete All</button>) : null
          }
          </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
