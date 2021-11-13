import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    e.target.value = "";
  };
  // handle form submission
  const hanldleAdmin = (e) => {
    e.preventDefault();
    const adminUser = { email };
    const url = `http://localhost:5000/user/admin`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Admin created");
        }
      });
  };
  return (
    <div className="mt-10 sm:mt-0 sm:w-3/4 lg:w-7/12 mx-auto">
      {/* form */}
      <form onSubmit={hanldleAdmin} className="px-2 sm:px-6">
        <div className="shadow bg-white rounded-lg">
          <div className="px-4 py-5  sm:p-6">
            {/* inputs grid container */}
            <div className="grid grid-cols-6 gap-4">
              {/* personal information */}
              <div className="col-span-6 text-gray-700 text-sm font-medium">
                Email Id
              </div>

              {/* email */}
              <div className="col-span-6">
                <input
                  onBlur={handleEmailInput}
                  type="email"
                  placeholder="Email"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
            </div>
          </div>
          {/* submit button */}
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Make Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
