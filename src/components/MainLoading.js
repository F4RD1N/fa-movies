import Loader from './Loader'

const MainLoading = () => {
  return(
    <section className="fixed w-screen h-screen z-50 flex justify-center items-center bg-overlay">
      <Loader />
    </section>
    )
}

export default MainLoading