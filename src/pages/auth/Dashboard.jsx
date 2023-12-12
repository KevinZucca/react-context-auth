import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-[50vh] flex flex-col justify-center items-center mt-2 gap-10">
        <h2 className="text-3xl">Dashboard page</h2>
        <button className="bg-red-400 rounded px-4 py-2">
          <Link to="/">Logout</Link>
        </button>
      </div>
    </>
  );
}
