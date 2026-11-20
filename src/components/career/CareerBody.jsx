import { useState, useRef } from "react";
import { circular } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import Cards from "./CareerCard";

const CareerBody = () => {
  const [loading, setLoading] = useState(false);
  const [jobSelected, setJobSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const form = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the selected file
  };

  const handleInputChange = (name, value) => {
    // setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!jobSelected) newErrors.jobSelected = "Please select a job opening.";
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!terms) newErrors.terms = "You must agree to the terms";
    return newErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    // Convert file to base64
    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // Get only the base64 part
        reader.onerror = (error) => reject(error);
      });
    };

    let fileContent = null;
    if (file) {
      fileContent = await toBase64(file);
    }

    try {
      const response = await fetch(
        "https://identikowebsitemail.azurewebsites.net/api/submit-form?",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify({
            jobSelected,
            name,
            email,
            phone,
            message,
            file: {
              content: fileContent,
              filename: file.name,
            },
          }),
        }
      );

      if (response.ok) {
        setLoading(false);
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 6000);
        setJobSelected("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFile(null);
        setTerms(false);
        toast.success("Career Form Submission Successful!");
      } else {
        // Handle error response
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      // Handle errors during submission
      // setError(err.message);
      console.log("FAILED...", err);
      toast.error("Submission failed, please try again!");
      setLoading(false);
    }
  };

  return (
    <div
      id="section-1"
      className="relative w-full pb-20 pt-4 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
      <ToastContainer />

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Success</h2>
            <p>Your form has been successfully submitted!</p>
          </div>
        </div>
      )}

      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 z-10">
        <div className="w-full flex flex-col justify items-center pl-1 md:pl-0 pr-1 md:pr-0 gap-8 md:gap-0 transform animate-slide-up">
          <div className="md:mt-4 flex flex-col items-center gap-1 text-center">
            <div className="w-[100%] md:p-2 text-2xl font-semibold">
              WHY JOIN US
            </div>

            <div className="w-[100%] md:w-[70%] text-base md:text-xl text-center">
              Identiko is a leading ICT player with deep expertise in identity
              management systems. We partner with top companies like Idemia,
              Lenovo, Microsoft, Neuro Technology, and Cisco to deliver
              world-class solutions, helping clients excel in today’s and
              tomorrow’s knowledge-driven society.
            </div>
          </div>
        </div>
        <div className="md:mt-5">
          <p className="text-lg md:text-xl font-medium">
            Why Identiko? Discover Our Dynamic Work Culture
          </p>
          <Cards />
        </div>

        <div className="w-fit mx-auto flex justify-center items-center">
          <form
            onSubmit={handleFormSubmit}
            className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg relative"
            ref={form}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#003997]">
              Join Us
            </h2>

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="col-span-2">
                <div className="relative bg-[#F7F8FA]">
                  <select
                    name="services"
                    onChange={(e) => setJobSelected(e.target.value)}
                    className={`w-full border rounded-md p-3 shadow appearance-none focus:outline-none cursor-pointer focus:border-[#1F6FE2] ${
                      errors.service ? "border-red-500" : "border-[#7F9395]"
                    }`}
                  >
                    <option value="" disabled selected>
                      * Job Openings *
                    </option>
                    {/* <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Project Management">Project Management</option>
                    <option value="UI/UX Designer">UI/UX Designer</option> */}
                    {/* <option value="No Vacant roles">No Vacant roles</option> */}
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-2">
                <label htmlFor="name" className="mb-2">
                  Name <span className="text-red-700">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="email" className="mb-2">
                  E-mail <span className="text-red-700">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phone" className="mb-2">
                  Phone <span className="text-red-700">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="NG"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  className={`shadow bg-white appearance-none cursor-pointer rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  name="phone"
                  placeholder="0800-0000-000"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="col-span-2 mb-4">
                <label htmlFor="coverletter" className="mb-2">
                  Cover Letter
                </label>
                <textarea
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100%] ${
                    errors.coverletter ? "border-red-500" : "border-gray-300"
                  }`}
                  name="coverletter"
                  placeholder="Cover Letter"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.coverletter && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.coverletter}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <label htmlFor="cv" className="mb-2">
                  Upload CV (PDF Only)
                  <span className="text-red-700">*</span>
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline ${
                    errors.file ? "border-red-500" : "border-gray-300"
                  }`}
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  required
                />
                {errors.file && (
                  <p className="text-red-500 text-xs mt-1">{errors.file}</p>
                )}
              </div>

              <div className="col-span-2">
                <label htmlFor="terms" className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="form-checkbox"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700 text-nowrap">
                    I agree to the{" "}
                    <Link to="/terms" className="text-blue-500 underline">
                      Terms and Conditions
                    </Link>{" "}
                    <span className="text-red-700">*</span>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-md shadow-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBody;
