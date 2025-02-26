import { useState } from "react";
import users from "../usersData.js";

function UsersList() {
    const [people, setPeople] = useState(users);

    const handleDelete = (id) => {
        setPeople(people.filter(person => person.id !== id));
    };
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
                                                <button >Edit</button>
                                                <button onClick={() => handleDelete(id)}>Delete</button>
                                            </article>

                                        )
                                        })}
            </>


        </section>
    </main>
  )
}

export default User;