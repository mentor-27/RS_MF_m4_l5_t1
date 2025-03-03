const NotFound = () => {
  return (
    <div
      style={{
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ lineHeight: 1, fontSize: '5rem' }}>Oops...</h1>
      <p
        style={{
          lineHeight: 1,
          fontSize: '20rem',
          margin: '2rem',
          fontWeight: 'bold',
        }}
      >
        404
      </p>
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
