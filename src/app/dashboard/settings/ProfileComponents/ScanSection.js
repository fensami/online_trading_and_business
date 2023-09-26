import QRCodeGenerator from "./QRCodeGenerator";

const ScanSection = () => {
  return (
    <div>
      <QRCodeGenerator />
      <h2 className="text-2xl font-semibold">Scan</h2>
      <p>Enter the six-digit code from the application</p>
      <p>
        After scanning the image, the app will display a six-digit code that you
        can enter below
      </p>
    </div>
  );
};

export default ScanSection;
