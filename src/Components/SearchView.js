import Hero from './Hero';
import SubHero from './SubHero';
import MovieNotFound  from './MovieNotFound';
import MovieCard from './MovieCard';



const SearchView = ({keyword,searchResults,dataThere}) =>{
    function getData(){
        // set our text to be sent to Hero component
        const title = `Looking for ${keyword}`;
        // try block 
        try{                        
            if(searchResults === undefined)
            {
                // if movie not found our MovieNotFound component will be returned
                return<MovieNotFound/>
            }
            else
            {
                // if the searches are available return our MovieCard component using map()
                // note : key is important for unique identity
                var resultsHTML=  searchResults.map((Obj,I) => {
                    return<MovieCard key={I} movie={Obj} />
                })
                
    
            }
            
        }
        // catch if any error and simply console log it for us
        catch(error){
            console.log(error)
        }
        //console logging our results for developer reference/to customize their UI
        console.log({searchResults} ,"is your searchResult");
        return(
            <>
            {
                !keyword && 
                <SubHero />
            }
            {
                keyword && 
                <Hero text={title}/>
            }
            {resultsHTML && 
                <div className='container mt-5'>
                    <div className='row row-cols-lg-4 row-cols-sm-2'>
                            {resultsHTML}
                    </div>
                </div>
            }

            </>
        )
    }
  // Now simply just call the function above and it will accordingly return the details
    return getData();    
}
export default SearchView;
