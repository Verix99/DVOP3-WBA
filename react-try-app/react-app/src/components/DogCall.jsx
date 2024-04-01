import { useState, useEffect } from "react";

const DogCall = () => {
    const [dogFact, setDogFact] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dog-api.kinduff.com/api/facts");
            const response2 = await fetch("https://dog.ceo/api/breeds/image/random");
            if (!response.ok) {
                throw new Error("API call failed");
            }
            const data = await response.json();
            setDogFact(data.facts[0]);
            console.log(response2.facts[0]);
        } 
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
          }
    }
    useEffect(() => {
        fetchData();
    }, []);
    if (loading === true) {
        return <p>Načítání dat</p>;
      }
    return (
        <div>
            <h1>Dog facts</h1>
            <p>{dogFact}</p>
            <button className="btn-fact" onClick={fetchData}>Load new fact</button>
        </div>
    );
}

export default DogCall;
