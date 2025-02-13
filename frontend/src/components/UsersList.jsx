import { useState } from "react";
import data from "../userData.js";

function UsersList() {
    const [people, usePeople] = useState(data);
  return (
    <main>
        <section>
            <h2> {people.length} users</h2>
            <>
                {people.map(person => {const {id, name, image, phone, address, email} = person;
                                        return(
                                            <article key={id}>
                                                <img src={image} alt="user image" className="person-img"/> 
                                                <div>
                                                    <h4>{name}</h4>
                                                    <p>{email}</p>
                                                    <p>{address}</p>
                                                    <p>{phone}</p>
                                                </div>
                                                <button>View</button>
                                                <button>Delete</button>
                                            </article>

                                        )
                                        })}
            </>


        </section>
    </main>
  )
}

export default UsersList