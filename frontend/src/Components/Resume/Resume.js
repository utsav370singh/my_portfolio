import React, { useState, useEffect } from "react";

const Resume = () => {
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => setError("Failed to load Razorpay SDK");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      checkAccess(email);
    }
  }, [email]);

  const checkAccess = async (email) => {
    try {
      const res = await fetch("http://localhost:5000/api/payment/check-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setLink(data.downloadLink);
      }
    } catch (err) {
      console.error("Access check failed", err);
    }
  };

  const handlePayment = async () => {
    setError("");
    setIsLoading(true);

    try {
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      if (!razorpayLoaded) {
        throw new Error("Payment system is still loading. Please try again.");
      }

      const orderRes = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount: 49 }),
      });

      if (!orderRes.ok) {
        throw new Error("Failed to create payment order");
      }

      const { id: orderId } = await orderRes.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: 49,
        currency: "INR",
        name: "Utsav Singh",
        description: "Download Resume",
        order_id: orderId,
        handler: async (response) => {
          try {
            const verifyRes = await fetch("http://localhost:5000/api/payment/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, email }),
            });

            const data = await verifyRes.json();
            if (!data.success) throw new Error(data.message);

            setLink(data.downloadLink);
          } catch (err) {
            setError(err.message);
          }
        },
        prefill: { email },
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: () => setIsLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl w-full bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Buy Resume @ ₹49</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black w-full p-2 mb-4 border rounded"
      />

      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {link ? (
        <>
          <a
            href={link}
            download
            className="block w-full py-2 bg-yellow-300 text-white font-bold rounded hover:bg-violet-300 transition-colors"
          >
            Download Resume
          </a>
          <p className="mt-4 text-yellow-300 font-medium">
            You already paid! Click above to download.
          </p>
        </>
      ) : (
        <button
          onClick={handlePayment}
          disabled={isLoading || !email}
          className={`w-full py-2 text-white font-bold rounded transition-colors ${
            isLoading || !email
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Processing..." : "Pay with Razorpay"}
        </button>
      )}
    </div>
  );
};

export default Resume;
