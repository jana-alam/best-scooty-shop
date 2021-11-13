import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const UserReview = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const handleReviewInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const reviewData = { ...review };
    reviewData[name] = value;
    setReview(reviewData);
  };
  // handle form submission
  const hanldleReview = (e) => {
    e.preventDefault();
    const customerReview = { ...review, name: user?.displayName };
    const url = ` https://mysterious-falls-26048.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Thanks For your review");
          e.target.reset();
        }
      });
  };
  return (
    <div className="mt-10 sm:mt-0 sm:w-3/4 lg:w-7/12 mx-auto">
      {/* form */}
      <form onSubmit={hanldleReview} className="px-2 sm:px-6">
        <div className="shadow bg-white rounded-lg">
          <div className="px-4 py-5  sm:p-6">
            {/* inputs grid container */}
            <div className="grid grid-cols-6 gap-4">
              {/* User Review */}
              <div className="col-span-6 text-gray-700 text-sm font-medium">
                Your FeedBack
              </div>

              {/* email */}
              <div className="col-span-6">
                <textarea
                  onBlur={handleReviewInput}
                  name="comments"
                  placeholder="Give us your feedback"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
                <input
                  onBlur={handleReviewInput}
                  type="number"
                  name="ratings"
                  placeholder="Rating From 1 to 5"
                  min={0}
                  max={5}
                  className="p-2 mt-1 block w-40 shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
            </div>
          </div>
          {/* submit button */}
          <div className="px-4 pb-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserReview;
