import ColorChangeExample from "./ColorChangeExample";

const Card = () => {
  return (
    <>
      <style>
        {`
          .visiting-card {
            width: 300px;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #fdfdfd;
            font-family: 'Segoe UI', sans-serif;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            text-align: center;
          }

          .visiting-card .name {
            margin: 0;
            font-size: 24px;
            color: #2c3e50;
          }

          .visiting-card .title {
            margin: 5px 0 15px;
            font-size: 16px;
            color: #555;
          }

          .visiting-card .contact p {
            margin: 5px 0;
            font-size: 14px;
            color: #444;
          }
          .visiting-card .contact div {
            margin: 5px 0;
            font-size: 14px;
            color: #444;
          }
        `}
      </style>
      <div className="visiting-card">
        <h2 className="name">Jane Doe</h2>
        <p className="title">Frontend Developer</p>
        <div className="contact">
          <p>Email: jane.doe@example.com</p>
          <p>Phone: +1 234 567 8901</p>
          <div>
            <ColorChangeExample />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
