import { useState } from "react";

import "./CodeEditor.css";

function CodeEditor({ onCompile }) {

    const [code, setCode] = useState(`#include <iostream>

int main(){

    int a = 10;
    int b = 20;

    std::cout << a + b;

    return 0;
}`);

    const [loading, setLoading] = useState(false);

    const compileCode = async () => {

        try {

            setLoading(true);

            await onCompile(code);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="code-editor">

            <h2>C++ Code Editor</h2>

            <textarea

                value={code}

                onChange={(e) => setCode(e.target.value)}

                rows={18}

            />

            <button

                onClick={compileCode}

                disabled={loading}

            >

                {loading ? "Compiling..." : "Compile Code"}

            </button>

        </div>

    );

}

export default CodeEditor;
