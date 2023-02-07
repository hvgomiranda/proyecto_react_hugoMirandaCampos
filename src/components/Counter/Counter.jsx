import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter()
{
    const [count, setCount] = useState(0);

    const handleCounter = () =>
    {
        setCount(count + 1);
    }

    return(
        <div>

        </div>
    )
}