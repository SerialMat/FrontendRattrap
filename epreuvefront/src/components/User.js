import Image from "./Image";

export default function User({ id, email, first_name, last_name, avatar}) {
    
  const idUser = id;

  function Modif(idModif){
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify({ userEmail: email ,userFirst: first_name,UserLast: last_name,userAvatar: avatar })
    };
  
    const postExample = async () => {
        try {
            await fetch(
                'api/users/', idModif)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert("Modif reussi");
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }
  }

  function Suppr(idModif){
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify({ userEmail: email ,userFirst: first_name,UserLast: last_name,userAvatar: avatar })
    };
  
    const postExample = async () => {
        try {
            await fetch(
                'api/users/', idModif)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert("Modif reussi");
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }
  }
  
    return (
        <div class="card">
        
        {(id === 'undefined') ? (
            <p>Loading ...</p>
        ): (    
        <div class="container">
            <p>{first_name} {last_name}</p>
            <Image avatar={avatar}/>
            <div className="container">
                <h4>{email} </h4>
                <button>email</button>
                <button onClick={Modif(idUser)}>Modif</button>
                <button onClick={Suppr(idUser)}>Suppr</button>
                
            </div>
        )
    
       </div>
        )
  
  }