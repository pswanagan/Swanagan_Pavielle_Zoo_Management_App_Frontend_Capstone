export default function AnimalCard({animal}){
    return (
        <div className="animal-card">
          <img className='card-img' src={animal.image} alt={animal.name} />
          <h3>{animal.name}</h3>
          
        </div>
      );
} 