get data:
///A stream in programming is something that lets you read or write data bit by bit, as it becomes available. This makes a lot of sense for a network protocol like HTTP because it reflects what is happening at the network layer. Especially for large responses, you don't want to have to wait for the whole body to arrive before you start to process it.
//So at the point when the fetch() promise resolves and gives you a response object, all it means is that you've received the response headers - you could still be receiving the body, which is represented by the response.body stream. That's why response.json() (and a bunch of other methods) is async and returns a promise: it needs to ensure that the whole response body has been received/streamed before it can attempt to parse it (or at the very least, before it can give you the final result - it could potentially use a streaming parser under-the-hood).
fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log(response);
                return response.json() //sends another promise and allows the next .then to await the full response.
            })
            .then(json => {
                console.log(json);
            })
    });
//this converts the response object to a json object






////////////STORAGE/////////////////
//set given value for key
localStorage.setItem(key, value)
// Set the given value for the given key 
localStorage.setItem(key, value) 
// Get a value with the provided key 
localStorage.getItem(key) 
// Remove the key from storage 
localStorage.removeItem(key) 
// Clear the local storage 
localStorage.clear()
////////////STORAGE/////////////////JSON//////////////////
//Converts to string.
JSON.stringify()
JSON.parse([1,2,3]) = > "[1,2,3]"
//Converts string back to its orgiginal form: (reads from json)
JSON.parse("[1,2,3]") = > [1,2,3]
JSON.parse()








///forEach
.forEach(item) => {
  do this
}





/////////////////////////////////////REACT!/////////////////////////////
 [pokemonList, setPokemonList] = useState([])
//thhe ([]) makes the default state an empty liat.

useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                //console.log(response);
                return response.json()
            })
    }, []);
// second paramater of [] makes this run once.
