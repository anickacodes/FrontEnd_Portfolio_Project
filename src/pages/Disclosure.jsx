import "../styles/Disclosure.css";

const Disclosure = () => {
  return (
    <div className="terms_container">
      <h2 className="terms_header"> Terms & Conditions</h2>
      <article className="terms_section">
        <span className="self-made">
          [CLN Stylez] - Terms and Conditions Agreement Effective Date:
          [November 19,2023]
        </span>
        <br /> <span className="important-point">1. Booking and Deposit:</span>{" "}
        A non-refundable deposit of 25% is required for all appointments. The
        deposit will be deducted from the total cost of the service. <br />
        <span className="important-point">2: Appointment Booking:</span> Clients
        are required to book appointments at least 24 hours in advance. Same-day
        appointments (booked between 24 and 7 hours before the scheduled time)
        will incur an additional fee of $20.
        <br />
        <span className="important-point">3: Contact Information:</span> Clients
        must provide accurate contact information, including a valid phone
        number and email address. This information will be used to confirm
        appointments and communicate important updates.
        <br />
        <span className="important-point">
          4: Service Area and Travel:
        </span>{" "}
        [CLN Stylez] is a traveling stylist offering services within NYC metro
        (any location accessible by MTA/Metro North or within 20min travel time
        of MTA) and Jersey City. No extra travel fees are applied, as they are
        included in style pricing. <br />
        <span className="important-point">5: Cancellation Policy:</span> Clients
        are required to provide a minimum of 24 hours' notice for appointment
        cancellations.
        <b>
          <em>
            Failure to cancel within the specified time frame will result in the
            forfeiture of the deposit.
          </em>
        </b>
        <br />
        <span className="important-point">6: Rescheduling:</span> Clients may
        reschedule appointments with a minimum of 24 hours' notice without
        losing their deposit. Rescheduling within 24 hours may be subject to an
        additional fee. <br />
        <span className="important-point">7: Late Arrivals:</span> Clients are
        expected to be ready on time for their appointments. Start times more
        than 15 minutes late may result in a rescheduling of the appointment OR
        late fee of $10. <br />
        <span className="important-point">8: Service Satisfaction:</span> If
        clients are dissatisfied with the service provided, they are encouraged
        to communicate their concerns during the appointment for immediate
        resolution. <br />
        <span className="important-point">9: Stylist Discretion:</span> Our
        stylists reserve the right to refuse service to clients for any reason.
        We prioritize a positive and respectful environment for both clients and
        staff. <br />
        <span className="important-point">10: Health and Safety:</span> Clients
        must disclose any relevant health or allergy information that may affect
        the services provided. <br />
        <span className="important-point">11: Agreement Acceptance:</span> By
        booking an appointment with [CLN Stylez], clients acknowledge and agree
        to abide by these terms and conditions.
      </article>
    </div>
  );
};

export default Disclosure;
