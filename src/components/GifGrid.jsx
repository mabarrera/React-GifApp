import PropTypes from "prop-types"
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifCard from "./GifCard"

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
    <h3>{ category }</h3>
    {
      isLoading && ( <h2>Cargando...</h2> )
    }
    <div className="card-grid">
      {
        images.map( ( image ) => {
          return <GifCard key={ image.id } { ...image } />
        })
      }
    </div>
    </>
   )
}

export default GifGrid

GifGrid.propTypes = {
  category: PropTypes.string
}
