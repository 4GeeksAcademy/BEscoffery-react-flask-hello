export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fetchedContacts':
    const contactArray = action.payload;
      return {
        ...store,
        contacts: [...contactArray]
      }
      
    case 'createdContact':
      const newContact = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact]
      }
    case 'editedContact':
      const updated = action.payload;
      return {
        ...store,
        contacts: store.contacts.map( c => 
          c.id === updated.id ? updated : c
        )
      }
      case 'deletedContact':
      const {id} = action.payload;
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== id)
      };
    
    
   default:
      throw Error('Unknown action.');
  }    
}
