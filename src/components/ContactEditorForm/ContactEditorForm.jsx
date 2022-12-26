import { Form, LabelForm, LabelInput, ButtonSubmit } from 'components/Form/Form.styled';
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { Overlay, Modal } from './ContactEditorForm.styled';
import { editContact} from 'redux/contacts/operations';
import useContactSelectors from 'hooks/useContactSelectors';
import { useState } from 'react';

const ContactEditorForm = () => {

  const {contactId} = useParams();
  const { contacts } = useContactSelectors();
  const res = contacts.filter((elem) => elem.id === contactId);
  const contactName= res.map(elem=>elem.name).toString();
  const contactNumber= res.map(elem=>elem.number).toString();   
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeModal= () => navigate('/contacts');

  const InputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  
  const SubmitForm = e => {
    e.preventDefault();
    const someCopyItem = contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (someCopyItem) {
      return alert(`${name} is already in contacts`);
    }
    const obj = {
      id: contactId,
      name,
      number
    }
    
    console.log(JSON.stringify(obj))
    dispatch(editContact(JSON.stringify(obj)));
    
    
    closeModal();
    DefaultValue();
  };
  
  
  const DefaultValue = () => {
    setName('');
    setNumber('');
  };
    
    return (
      <>  
      <Overlay>
        <Modal>
               <Form style={{maxWidth: '100%'}} onSubmit={SubmitForm}> 
              <LabelForm>
                <span>Name</span>
                <LabelInput name="name" type="text" onChange={InputChange}  value={name}/>
              </LabelForm>
              <br />
              <LabelForm>
                <span>Number</span>
                <LabelInput name="number" type="tel" onChange={InputChange} value={number}/>
              </LabelForm>
              <br />
              <ButtonSubmit type="submit">save</ButtonSubmit>
              
              <ButtonSubmit type="button" onClick={closeModal} >close</ButtonSubmit>
            </Form>
        </Modal>
        
      </Overlay>
      </>         
      )
}

export default ContactEditorForm;