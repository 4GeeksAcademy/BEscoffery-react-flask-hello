export const fetchAllContacts = async (dispatch) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/bescoffery/contacts`)
        try {
            if (!response.ok) {
                throw new Error(response.status);
            }
            const data = await response.json();
            // console.log(data.contacts);
            // we need to be able to save the contacts in the store
            // to accomplish this, we need to create a dispatch to set the contact key in the store

            dispatch({
                type: 'fetchedContacts',
                payload: data.contacts,
            })
        }
        catch (error){
            console.error("Error getting agenda. Check if URL is incorrect or if that agenda doesn't exists.", error)
        }
    }


export const addContact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone, 
        email: email,
    }

    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
    }

    const response = await fetch('https://playground.4geeks.com/contact/agendas/bescoffery/contacts', options)
    try {
        if(!response.ok) {
            throw new Error('Error creating contact!', response.status)
        }
        const data = await response.json();
        dispatch({
            type: 'createdContact',
            payload: newContact,
        });

        return data;
    }
    catch (error) {
        console.error('Error posting contact to the agenda.', error)
    }


}

export const deleteContact = async(id, dispatch) => {
    const options = {
        method: 'DELETE',
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/bescoffery/contacts/${id}`, options)
    try {
        if (!response.ok) {
            throw new Error('Error. Unable to delete contact!', response.status);
        }
        dispatch({
            type: 'deletedContact', 
            payload: { id: id },
        });
    }
    catch (error) {
        console.error('Error deleting contact from the agenda.', error)
    }
}

export const editContact = async (id, updatedData, dispatch) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/bescoffery/contacts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) throw new Error(response.status);

    const updatedContact = await response.json();

    dispatch({
      type: "editedContact",
      payload: updatedContact,
    });
  } catch (error) {
    console.error("Error editing contact:", error);
  }
};
