const Reason = ({ icon, title, desc }) => {
  return (
    <div className="reason">
      {icon}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Reason;
