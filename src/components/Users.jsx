import React,{useState,useEffect} from 'react'
import Loading from './Loading'

const Users = () => {
    const [person,setPerson] = useState({})
    const [image,setImage] = useState({})
    const [loading,setLoading] = useState(false)

    const fetchPerson =  () =>{
        fetch('https://randomuser.me/api')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setPerson(data.results[0])
            setImage(data.results[0].picture.large)
            console.log(data.results[0])
            setLoading(true)
        })
        .catch((error)=>{
            console.log(error.message || 'something went wrong.')
        })
    }
    useEffect(()=>{
        fetchPerson()
    },[])
    return (
        <>
                { loading ?
                    <>
                    <h1>React user <span>randomiser</span></h1>
                    <div className="container">
                        <div className="user">
                        <img src={image !== '' ? image :'http://via.placeholder.com/800'} alt="userImage" className="image"/>
                        </div>
                        <div className="details">
                            <p>Gender: {person.gender}</p>
                            <p>Email: {person.email}</p>
                            <p>Phone: {person.cell}</p>
                        </div>
                    </div>
                    <button type="button" className="button" onClick={fetchPerson}>
                        <span className="button__text">click</span>
                    </button>
                    </>
                    :
                <Loading/>
                }
                  
        </>
    )
}

export default Users
