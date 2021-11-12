import React from "react";

const Features = () => {
  return (
    <section className="py-8 mb-12">
      <h1 className="text-center text-6xl text-gray-600 font-semibold mb-6 sm:mb-20">
        Smart <span className="text-red-600">Features</span>
      </h1>
      {/* Features container */}
      <div className="text-center w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mb-10">
        {/* Single Feature */}
        <div>
          <svg
            className="h-16 w-16 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
          </svg>

          <p>
            <span className="text-6xl font-bold text-gray-800">25</span>
            <span className="text-2xl font-bold text-gray-700">km/h</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Speed</p>
        </div>
        {/* Single Feature */}
        <div>
          <svg
            className="h-16 w-16 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 18h21v-12h-21v12zm9.599-6.157v-2.843l6.401 4.686-4.408-1.296v2.61l-6.592-4.488 4.599 1.331zm14.401-1.593v3.5c0 .69-.56 1.25-1.25 1.25h-.75v-6h.75c.69 0 1.25.56 1.25 1.25z" />
          </svg>
          <p>
            <span className="text-6xl font-bold text-gray-800">16</span>
            <span className="text-2xl font-bold text-gray-700">km</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Charge</p>
        </div>
        {/* Single Feature */}
        <div>
          <svg
            className="h-16 w-16 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm10.881-2.501c0-1.492-.739-2.83-1.902-3.748l.741-.752c1.395 1.101 2.28 2.706 2.28 4.5s-.885 3.4-2.28 4.501l-.741-.753c1.163-.917 1.902-2.256 1.902-3.748zm-3.381 2.249l.74.751c.931-.733 1.521-1.804 1.521-3 0-1.195-.59-2.267-1.521-3l-.74.751c.697.551 1.141 1.354 1.141 2.249s-.444 1.699-1.141 2.249zm-16.479 1.499l-.741.753c-1.395-1.101-2.28-2.707-2.28-4.501s.885-3.399 2.28-4.5l.741.752c-1.163.918-1.902 2.256-1.902 3.748s.739 2.831 1.902 3.748zm.338-3.748c0-.896.443-1.698 1.141-2.249l-.74-.751c-.931.733-1.521 1.805-1.521 3 0 1.196.59 2.267 1.521 3l.74-.751c-.697-.55-1.141-1.353-1.141-2.249zm16.641 14.501c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z" />
          </svg>
          <p>
            <span className="text-6xl font-bold text-gray-800">24</span>
            <span className="text-2xl font-bold text-gray-700">hours</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">History</p>
        </div>
        {/* Single Feature */}
        <div>
          <svg
            className="h-16 w-16 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z" />
          </svg>

          <p>
            <span className="text-6xl font-bold text-gray-800">30</span>
            <span className="text-2xl font-bold text-gray-700">deg</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Climbing</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
