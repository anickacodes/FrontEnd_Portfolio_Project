import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/ClientList.css";

const ClientList = () => {
  const {
    state: { style },
  } = useLocation();
  const { id } = useParams();
  const API = import.meta.env.VITE_API_PORT;
  const [clients, setClients] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const FetchClient = async () => {
      try {
        const response = await fetch(`${API}/styles/${style.id}/clients`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setClients(data.allClients);
      } catch (err) {
        console.error("Error fetching Clients Data", err);
        setFetchError(err.message);
      }
    };
    FetchClient();
  }, [API, style.id]);

  return (
    <div>
      <div className="clientList_containter">
        <div className="back_button">
          <button>
            <Link to={`/styles/${id}`}> ⮐ </Link>
          </button>
        </div>
        <h2> Client List for</h2>
        <h3>Style: {style.service} Appointments </h3>
        {fetchError ? (
          <p>Error fetching data: {fetchError}</p>
        ) : clients.length > 0 ? (
          clients.map((client) => (
            <div className="client_card" key={client.id}>
              <p>
                <b>Name:</b> {client.name}
              </p>
              <p>
                <b>Contact:</b> {client.phone}{" "}
              </p>
              <p>
                <b>Address:</b> {client.address}
                {"N/A"}
              </p>
              <p>
                <b>Rating:</b> {client.rating}{" "}
              </p>
              <p>
                <b>Member:</b> {client.is_member ? "Yes🤍" : "No👀"}
              </p>
            </div>
          ))
        ) : (
          <p>No clients found.</p>
        )}
      </div>
    </div>
  );
};

export default ClientList;
