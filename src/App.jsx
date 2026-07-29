import {useState} from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    country: "",
    gender: "",
    agree: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if(
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.country ||
      !formData.gender 
    ) {
      alert("Please fill all required fields");
      return;
    }

    if(!formData.email.includes("@")){
      alert("Please enter a valid email");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

     if (!formData.agree) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    alert("Registeration Successful !");
    console.log(formData);
  }

  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
       

        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <br />
        <br />

       

        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <br />
        <br />

        

        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <br />
        <br />


        <textarea
          placeholder="Write about yourself"
          value={formData.bio}
          onChange={(e) =>
            setFormData({
              ...formData,
              bio: e.target.value,
            })
          }
        />

        <br />
        <br />

        

        <select
          value={formData.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              country: e.target.value,
            })
          }
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        <br />
        <br />

        

        <label>
          <input
            type="radio"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            value="Other"
            checked={formData.gender === "Other"}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
          Other
        </label>

        <br />
        <br />

     

        <label>
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(e) =>
              setFormData({
                ...formData,
                agree: e.target.checked,
              })
            }
          />
          I agree to the Terms & Conditions
        </label>

        <br />
        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default App;