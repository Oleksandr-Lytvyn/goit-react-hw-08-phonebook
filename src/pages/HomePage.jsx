import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '20px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <button
        type="button"
        onClick={() => {
          navigate('/contacts');
        }}
      >
        contacts
      </button>
    </div>
  );
}
