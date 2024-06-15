const ProgressBar: React.FC<{ width: number; color: string }> = ({
  width,
}) => {
  return (
    <div className="progress-bar-wrapper">
      <div
        className="progress-bar"
        style={{
          width: width?.toFixed(2) + "%",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
