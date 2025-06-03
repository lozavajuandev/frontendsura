export const createClint = async (e) => {
  e.preventDefault();

  const newClient = {
    document,
    document_type: documentType,
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    address: addres,
  };
  try {
    const response = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    {
      const confirmation = await response.json();
      console.log(confirmation);
    }
  } catch (error) {
    console.error(error);
  }
};
