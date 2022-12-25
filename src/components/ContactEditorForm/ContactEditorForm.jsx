import { Form, LabelForm, LabelInput, ButtonSubmit } from 'components/Form/Form.styled';
import { useNavigate, useParams} from 'react-router-dom';
//import { useDispatch} from 'react-redux';
import { Overlay, Modal } from './ContactEditorForm.styled';
//import { editContact} from 'redux/contacts/operations';
import useContactSelectors from 'hooks/useContactSelectors';

const ContactEditorForm = () => {
  const {contactId} = useParams();
  const { contacts } = useContactSelectors();
  const res = contacts.filter((elem) => elem.id === contactId);
  const contactName= res.map(elem=>elem.name).toString();
  const contactNumber= res.map(elem=>elem.number).toString();  
  const navigate = useNavigate();
  const closeModal= () => navigate('/contacts');

  // const dispatch = useDispatch();

  // const onEditContact = id => {
  //   dispatch(editContact(id));
  // };


    // const handleSubmit = async (values, actions) => {
    //     await onSubmit(values);
    //     actions.setSubmitting(false);
    //     actions.resetForm();
    // };
    
    return (
      <>  
      <Overlay>
        <Modal>
               <Form style={{maxWidth: '100%'}}> 
              <LabelForm>
                <span>Name</span>
                <LabelInput name="name" type="text"  defaultValue={contactName}/>
              </LabelForm>
              <br />
              <LabelForm>
                <span>Number</span>
                <LabelInput name="number" type="tel" defaultValue={contactNumber}/>
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