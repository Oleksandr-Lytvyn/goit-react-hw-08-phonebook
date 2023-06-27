import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAvatar } from 'redux/auth/operations';

import defaultAva from '../../images/contact.png';

export const Avatar = ({ setIsModal }) => {
  const {
    user: { avatarURL },
  } = useAuth();
  const dispatch = useDispatch();
  const [prew, setPrew] = useState('');
  const [file, setFile] = useState('');

  const uploadFile = e => {
    if (!e.target.files?.length) return;
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    // console.log(file);
    const objectUrl = URL.createObjectURL(file);
    setPrew(objectUrl);
    setFile(file);
  };

  const sendFile = () => {
    let formData = new FormData();
    // console.log('send file');
    formData.append('avatar', file);
    // console.log(formData.get('avatar'));
    dispatch(setAvatar(file));
    setIsModal(false);
  };

  return (
    <>
      {' '}
      <form>
        <label htmlFor="avatar">
          <img
            src={prew || avatarURL || defaultAva}
            alt="user avatar"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              margin: '0 auto',
            }}
          />
        </label>
        <input
          name="avatar"
          id="avatar"
          type="file"
          onChange={uploadFile}
          style={{ display: 'none' }}
        />
      </form>
      <button type="submit" onClick={sendFile}>
        change avatar
      </button>
    </>
  );
};
