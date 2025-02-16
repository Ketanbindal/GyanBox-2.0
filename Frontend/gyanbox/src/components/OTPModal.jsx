const OTPModal = () => {
    return (
      <div id="otpModal" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
        <input type="text" id="otp" placeholder="Enter OTP" className="px-4 py-2 border rounded w-full mb-4" />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
      </div>
    );
  };
  
  export default OTPModal;
  