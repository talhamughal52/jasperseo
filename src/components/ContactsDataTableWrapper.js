import ContactsDataTable from "./ContactsDataTable";
import { getContacts } from "@/lib/actions/contacts.actions";

const ContactsDataTableWrapper = async () => {
  const contacts = await getContacts();
  return <ContactsDataTable contacts={contacts} />;
};

export default ContactsDataTableWrapper;
