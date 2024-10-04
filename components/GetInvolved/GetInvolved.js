"use client"

import { useState } from "react"

const GetInvolved = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    organisation: "",
    areYou: "",
    message: "",
    other: "",
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(userDetails)
    setUserDetails({
      name: "",
      email: "",
      organisation: "",
      areYou: "",
      message: "",
    })
  }

  const renderNameField = () => (
    <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-center w-full md:w-1/2">
      <span className="w-40 border-r border-[#95AA62] text-lg text-[#374708]">
        Name
      </span>
      <input
        type="text"
        className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            name: e.target.value,
          }))
        }
      />
    </div>
  )

  const renderEmailField = () => (
    <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-center w-full md:w-1/2">
      <span className="w-40 border-r border-[#95AA62] text-lg text-[#374708]">
        Email
      </span>
      <input
        type="text"
        className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            email: e.target.value,
          }))
        }
      />
    </div>
  )

  const renderOrganisationField = () => (
    <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-center w-full md:w-1/2">
      <span className="w-40 border-r border-[#95AA62] text-lg text-[#374708]">
        Organisation
      </span>
      <input
        type="text"
        className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.organisation}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            organisation: e.target.value,
          }))
        }
      />
    </div>
  )

  const renderAreYouField = () => (
    <>
      <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-center w-full md:w-1/2">
        <span className="w-40 border-r border-[#95AA62] text-lg text-[#374708]">
          Are you
        </span>
        <select
          className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
          value={userDetails.areYou}
          onChange={(e) =>
            setUserDetails((prevDetails) => ({
              ...prevDetails,
              areYou: e.target.value,
              // Reset the "other" field if the value is not "Other"
              other: e.target.value !== "Other" ? "" : prevDetails.other,
            }))
          }
        >
          <option value="" disabled></option>
          <option value="Government Agency">Government Agency</option>
          <option value="Civil Society Organisation">
            Civil Society Organisation
          </option>
          <option value="Faith-based institution">
            Faith-based institution
          </option>
          <option value="Private Sector Business">
            Private Sector Business
          </option>
          <option value="Corporate Organisation">Corporate Organisation</option>
          <option value="Educational Institution">
            Educational Institution
          </option>
          <option value="Individual Contributor">Individual Contributor</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Conditional 'Other' input field */}
      {userDetails.areYou === "Other" && (
        <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-center w-full md:w-1/2">
          <span className="w-40 border-r border-[#95AA62] text-lg text-[#374708]">
            Specify
          </span>
          <input
            type="text"
            placeholder="Please specify"
            value={userDetails.other}
            onChange={(e) =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                other: e.target.value,
              }))
            }
            className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
          />
        </div>
      )}
    </>
  )

  const renderMessageField = () => (
    <div className="border border-[#95AA62] bg-[#EBEBC9] px-3 py-1.5 rounded flex items-stretch w-full md:w-1/2">
      <div className="w-40 border-r border-[#95AA62] flex items-center">
        <span className="text-lg text-[#374708]">Message</span>
      </div>
      <textarea
        rows={5}
        cols={50}
        value={userDetails.message}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            message: e.target.value,
          }))
        }
        className="border-none outline-none bg-transparent px-2 w-full text-[#374708]"
        placeholder="Enter your message here..."
      ></textarea>
    </div>
  )

  return (
    <div className="h-auto px-5 pt-12 pb-10">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl text-[#486601] font-semibold">
            Get Involved With Shoonya
          </h1>
          <p className="text-xl text-shoonya-black">
            Here’s how you can get started. Fill out the enquiry form and our
            team will get back to you shortly.
          </p>
        </div>

        <form
          className="flex flex-col items-center gap-2 w-full mt-10"
          onSubmit={onSubmitForm}
        >
          {renderNameField()}
          {renderEmailField()}
          {renderOrganisationField()}
          {renderAreYouField()}
          {renderMessageField()}
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full md:w-1/2 bg-[#364708] text-white rounded mt-5 hover:bg-[#486601] hover:text-[#D9D98C] transition-colors duration-300"
          >
            Root for tomorrow! Join the Movement
          </button>
        </form>
      </div>
    </div>
  )
}

export default GetInvolved
