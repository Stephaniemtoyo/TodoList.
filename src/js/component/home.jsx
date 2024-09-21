import React, { useState } from "react";
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setTodos(todos.concat(inputValue));
            setInputValue("");
        }
    };
    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    return (
        <div className="container">
            <h1> My Todos </h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        placeholder="What do you need to do?"/>
                </li>
                {todos.map((item, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            {item}
                        </span>{" "}
                        <button class="buttonDelete" onClick={() => handleDelete(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
						</svg> 
                        </button>
                    </li>
                ))}
            </ul>
            <div> {todos.length} tasks left</div>
        </div>
    );
};
export default Home;