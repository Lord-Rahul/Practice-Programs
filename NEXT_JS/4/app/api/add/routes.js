export default function handler(req, res) {
    if (req.method === "POST") {
      const { name, role } = req.body;
      res.status(200).json({ message: `User ${name} with role ${role} added successfully.` });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  