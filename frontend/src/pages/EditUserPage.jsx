import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditUserPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await fetch(`/api/user/${id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (!res.ok) {
              throw new Error("Failed to fetch user");
            }
            const data = await res.json();
            setName(data.name);
            setEmail(data.email);
            setAddress(data.address);
            setPhone(data.phone);
            setPassword(data.password);
            setConfirmPassword(data.confirmpassword);
            
          } catch (error) {
            console.log("Error fetching data", error);
          }
        };
        fetchUser();
      }, [id]);
    
      const updateUser = async (updatedUser) => {
        try {
          const res = await fetch(`/api/user/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
          });
          if (res.ok) {
            console.log("User updated successfully!");
            navigate(`/users/${id}`);
          } else {
            console.error("Failed to update user");
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
    
    
      const submitForm = (e) => {
        e.preventDefault();
        console.log("EditUserPage");
        if (!name || !email || !address || !phone || !password || !confirmpassword ) {
          console.log("Please fill in all fields");
    
        }
    
        const updatedUser = {
          title,
          type,
          description,
          company: {
            name: companyName,
            contactEmail,
            contactPhone,
          },
          location,
          salary,
        };
    
        updateUser(updatedUser);
      };
    
    
      const cancelEdit = () => {
        console.log("cancelEdit");
        navigate(`/`);
      };
    


  return (
    <div>EditUserPage</div>
  )
}

export default EditUserPage