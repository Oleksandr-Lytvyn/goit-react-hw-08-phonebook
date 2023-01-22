import styled from 'styled-components';

export const ContactListWrap = styled.div`
  .contacts_section {
    margin-top: 50px;
  }

  .contacts_list {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .contacts_item {
    padding-left: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    background-color: hsla(0, 0%, 0%, 0.092);
    border-radius: 5px;
  }

  .btn_contact {
    color: darkred;
  }
`;
