export default function KeeperDetailsModal({ keeper, onClose }){
    if (!keeper) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '5px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}>
          <h2>{keeper.name}</h2>
          <p>Username: {keeper.username}</p>
          <p>Email: {keeper.email}</p>
          <p>Address: {`${keeper.address.street}, ${keeper.address.city}, ${keeper.address.zip}`}</p>
          <p>Phone: {keeper.phone}</p>
          {/* Add edit and delete buttons here */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
}