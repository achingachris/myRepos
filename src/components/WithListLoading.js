const WithListLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching Repositories, may take some time :)
      </p>
    )
  }
}

export default WithListLoading
