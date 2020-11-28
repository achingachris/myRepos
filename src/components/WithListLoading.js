const WithListLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on a sec, fetching Repositories, 🥺🥺🥺🥺🥺
      </p>
    )
  }
}

export default WithListLoading
