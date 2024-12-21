import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Dash/Sidebar";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [incidentReports, setIncidentReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState("");
  const [ack, setAck] = useState(false);

  // Fetch all incidents
  const getAllIncidents = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/incidents", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (res.status === 200) {
        const data = await res.json();
        setIncidentReports(data);
      } else {
        toast.error("Failed to fetch incidents");
      }
    } catch (err) {
      console.error("Error fetching incidents:", err);
    }
  };

  // Acknowledge incident
  const acknowledge = async (incId) => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/incidents/${incId}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
      });
      if (res.status === 200) {
        toast.success("Incident acknowledged successfully!");
        setAck(!ack); // Trigger re-fetch
      } else {
        toast.error("Failed to update incident");
      }
    } catch (err) {
      console.error("Error while acknowledging:", err);
      toast.error("Error while updating!");
    }
  };

  useEffect(() => {
    getAllIncidents();
    window.scrollTo(0, 0);
  }, [ack]);

  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div className="container table-responsive mx-3">
        <div className="features_wrapper" style={{ marginTop: "-50px" }}>
          <div className="row">
            <div className="col-12 text-center">
              <p className="features_subtitle">Latest Women Incident Reported!</p>
              <h2 className="features_title">Women Incident Data</h2>
            </div>
          </div>
        </div>
        <table className="table table-striped table-bordered table-hover" style={{ marginTop: "-50px" }}>
          <thead className="table-dark text-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Report</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
              <th scope="col">Incident Date & Time</th>
              <th scope="col">Acknowledgement Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {incidentReports.map((incident) => (
              <tr key={incident._id}>
                <th scope="row" style={{ color: incident.isSeen ? "green" : "red" }}>
                  {incident.uname}
                </th>
                <td>
                  {incident.isSeen ? (
                    incident.report
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => setSelectedReport(incident.report)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      View Report
                    </button>
                  )}
                </td>
                <td>{incident.address}</td>
                <td>{incident.pincode}</td>
                <td>
                  {new Date(incident.createdAt).toLocaleDateString()} -{" "}
                  {new Date(incident.createdAt).toLocaleTimeString()}
                </td>
                <td>
                  {incident.isSeen ? (
                    <button className="btn btn-success">Acknowledged</button>
                  ) : (
                    <button className="btn btn-danger" onClick={() => acknowledge(incident._id)}>
                      Acknowledge
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Viewing Report */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Incident Report</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{selectedReport}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
