import Spinner from 'react-bootstrap/Spinner'

function TuLoader() {
  return (
    <div className="loadingBox">
      <Spinner 
        className="loadingSpinner" 
        animation="border" 
      />
    </div>
  )
}

export default TuLoader