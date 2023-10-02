import { useEffect, useState } from "react";
import CondicionalArticulos from "./pagPrincipal/CondicionalArticulos";

const PagPrincipal = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <main className="pagPrincipal">
      <CondicionalArticulos />
    </main>
  );
};

export default PagPrincipal;
