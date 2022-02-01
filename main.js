// http://localhost:3001/users/
const url="http://localhost:3001/users/"

function getUser(){
    axios.get(url)
    .then( res => {
        //console.log(res)
        const data = res.data
        console.log(data)

        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getUser()

function addUser(){

}