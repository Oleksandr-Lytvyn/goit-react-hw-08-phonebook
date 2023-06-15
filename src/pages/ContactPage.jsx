import ContactForm from 'components/ContactForm/ContactForm';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ContactSection } from 'components/ContactSection/ContactSection';

export default function ContactPage() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {/* <div className={css.page_wrapper}> */}
      {isModal && (
        <Modal setIsModal={setIsModal}>
          <ContactForm setIsModal={setIsModal} />
        </Modal>
      )}
      <ContactSection setIsModal={setIsModal} />
      {/* </div> */}
    </>
  );
}
