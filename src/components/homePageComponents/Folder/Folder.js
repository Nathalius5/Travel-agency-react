import "./Folder.css";

const Folder = ({ title, isSelectedFolder, onClick }) => {
  return (
    <div
      className={`folder ${isSelectedFolder ? "selected" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Folder;
