import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <div
          className=""
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "auto",
            }}
            className="fw-semibold"
          >
            <h1 className="font-poppins text-white text-3xl">404 | Page</h1>
            <p className="mt-5 text-gray-400 text-sm font-poppins">
              The Server can not find the requested page
            </p>
            <p className="text-center text-sm mt-10">
              <Link
                to={"/"}
                className="bg-teal-700 py-3 px-5 rounded text-white text-sm font-poppins"
              >
                Return to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
