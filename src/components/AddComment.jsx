import { useState } from "react";
import { Navigate, useOutletContext, useLocation, Link } from "react-router-dom";

export function AddComment() {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const { currentSignedInUser } = useOutletContext();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const location = useLocation();
  //console.log(location);

  function handleFormChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function formSubmission(e) {
    e.preventDefault();
    if (formData.comment.replace(/\s/g, "") !== "") {
      setFormSubmitted(true);
    }
  }

  return formSubmitted ? (
    <Navigate to={".."} state={{ replies: formData.comment }} />
  ) : (
    <form
      onSubmit={formSubmission}
      className="max-w-96 mx-auto p-4 rounded-lg bg-white"
    >

      <textarea
        value={formData.comment}
        onChange={handleFormChange}
        className="p-4 border w-full h-32 rounded-lg font-semibold mb-4"
        name="comment"
        placeholder="Add a comment..."
      ></textarea>

      <div className="flex items-center">
        <div className="w-9 h-9 rounded-full bg-red-300 mr-auto">
          <img src={`./images/avatars/${currentSignedInUser.image}`} />
        </div>
        <Link to={".."}>
            <button className="text-white text-lg font-semibold bg-red-500 py-3 px-8 rounded-lg hover:opacity-80">
                Cancel
            </button>
        </Link>
        <button className="text-white text-lg font-semibold bg-indigo-700 py-3 px-8 rounded-lg hover:opacity-80 ml-2">
          Send
        </button>
      </div>

    </form>
  );
}

// {referToOthers && <span className="text-indigo-700 font-bold">@{referToOthers}</span>}
