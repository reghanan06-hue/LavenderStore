const handleSubmit = async (e) => {
  e.preventDefault();
  if (!name || !text) return alert("Name and Comment are required");

  try {
    // POST le commentaire vers ton backend
    const res = await fetch("http://localhost:5000/story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message: text }), // message = text
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Server error");

    console.log("Comment added:", data);
    alert("Comment posted!");

    // Réinitialiser le formulaire
    setName("");
    setEmail("");
    setText("");

    // Ajouter le nouveau commentaire **sous les existants**
    // setComments([...comments, data]); 
    setComments([...comments, { ...data, message: data.text }]);
    // [...comments, data] ajoute data à la fin du tableau existant
  } catch (err) {
    console.error(err);
    alert("Error posting comment: " + err.message);
  }
};